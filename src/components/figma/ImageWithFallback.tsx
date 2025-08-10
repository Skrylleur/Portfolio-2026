import Image from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function ImageWithFallback({
  src,
  alt,
  className,
  width = 800,
  height = 600,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true)
          setImgSrc("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMzAwTDMwMCAyMDBMNDAwIDMwMEwzMDAgNDAwTDIwMCAzMDBaIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTQ5N0E2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+")
        }
      }}
    />
  )
}
