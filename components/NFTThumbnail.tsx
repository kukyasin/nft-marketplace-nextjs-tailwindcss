import Image from "next/image"
import { cn } from "@/lib/utils"

interface NFTThumbnailProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  hoverEffect?: boolean
}

export default function NFTThumbnail({
  src,
  alt,
  width = 300,
  height = 300,
  className,
  priority = false,
  hoverEffect = true,
}: NFTThumbnailProps) {
  return (
    <div className={cn("nft-thumbnail-container rounded-lg overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn("object-cover w-full h-full", hoverEffect ? "nft-thumbnail" : "grayscale")}
        priority={priority}
      />
    </div>
  )
}
