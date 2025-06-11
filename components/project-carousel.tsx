"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectCarouselProps {
  images: string[]
  title: string
  className?: string
}

export function ProjectCarousel({ images, title, className = "" }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null

  return (
    <div className={`relative group ${className}`}>
      <div className="bg-teal-400/10 rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} screenshot ${currentIndex + 1}`}
          width={500}
          height={300}
          className="w-full h-auto transition-all duration-300"
        />
        {images.length > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-teal-400" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
