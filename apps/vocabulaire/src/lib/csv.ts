import { uniqueStrings } from './normalize'

export type CsvRow = {
  french: string
  english: string[]
}

function detectSeparator(text: string): ',' | ';' {
  let commas = 0
  let semis = 0
  let inQuotes = false
  const sample = text.slice(0, 2000)
  for (let i = 0; i < sample.length; i++) {
    const char = sample[i]
    if (char === '"') {
      inQuotes = !inQuotes
      continue
    }
    if (inQuotes) continue
    if (char === ',') commas += 1
    if (char === ';') semis += 1
  }
  return semis > commas ? ';' : ','
}

function parseGrid(text: string, separator: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i += 1
        } else {
          inQuotes = false
        }
      } else {
        field += char
      }
      continue
    }

    if (char === '"') {
      inQuotes = true
    } else if (char === separator) {
      row.push(field)
      field = ''
    } else if (char === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else if (char !== '\r') {
      field += char
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }

  return rows
}

function looksLikeHeader(cells: string[]): boolean {
  const first = (cells[0] ?? '').trim().toLowerCase()
  const second = (cells[1] ?? '').trim().toLowerCase()
  const headerFr = /^(fran[cç]ais|french|fr|mot|terme|expression)$/
  const headerEn = /^(anglais|english|en|traduction|equivalent|équivalent)$/
  return headerFr.test(first) || headerEn.test(second)
}

export function parseVocabularyCsv(text: string): CsvRow[] {
  const cleaned = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const separator = detectSeparator(cleaned)
  const grid = parseGrid(cleaned, separator)
  const rows: CsvRow[] = []

  for (let i = 0; i < grid.length; i++) {
    const cells = grid[i].map((cell) => cell.trim())
    if (cells.every((cell) => cell === '')) continue
    if (i === 0 && looksLikeHeader(cells)) continue

    const french = cells[0] ?? ''
    const english = uniqueStrings(cells.slice(1))
    if (!french || english.length === 0) continue
    rows.push({ french, english })
  }

  return rows
}
