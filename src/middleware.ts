import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/revise' || pathname === '/revise/') {
    return NextResponse.rewrite(new URL('/revise/index.html', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/revise', '/revise/'],
}
