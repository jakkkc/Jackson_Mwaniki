type FramedImageProps = {
  src: string
  alt: string
  className?: string
}

export default function FramedImage({ src, alt, className = '' }: FramedImageProps) {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-blue-500/30 blur-3xl rounded-full" />
      <img src={src} alt={alt} className={`relative drop-shadow-2xl ${className}`} />
      <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-pink-400 rounded-bl-md" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400 rounded-br-md" />
    </div>
  )
}
