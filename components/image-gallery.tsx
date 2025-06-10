"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  alt: string
  className?: string
}

export function ImageGallery({ images, alt, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  if (images.length === 0) return null

  return (
    <>
      <div className={`relative group ${className}`}>
        <div className="relative z-10 bg-teal-400/10 rounded-lg overflow-hidden cursor-pointer" onClick={openModal}>
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${alt} ${currentIndex + 1}`}
            width={300}
            height={300}
            className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
          />
          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <div className="absolute inset-0 border-2 border-teal-400 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-teal-400" : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-teal-400 z-10">
              <X className="w-8 h-8" />
            </button>
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${alt} ${currentIndex + 1}`}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 text-white p-3 rounded-full hover:bg-slate-900 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 text-white p-3 rounded-full hover:bg-slate-900 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
