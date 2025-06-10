"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { t } = useLanguage()

  // Add your gallery images here
  const galleryImages = [
    "/images/gallery/photo1.jpg",
    "/images/gallery/photo2.jpg",
    "/images/gallery/photo3.jpg",
    "/images/gallery/photo4.jpg",
    "/images/gallery/photo5.jpg",
    "/images/gallery/photo6.jpg",
    "/images/gallery/photo7.jpg",
    "/images/gallery/photo8.jpg",
  ]

  const openModal = (index: number) => setSelectedImage(index)
  const closeModal = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="gallery" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-teal-400 font-mono text-xl mr-4">06.</span>
          <h2 className="text-3xl font-bold text-slate-200">Photo Gallery</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-teal-400/10"
              onClick={() => openModal(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-48 object-cover filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-teal-400 z-10">
                <X className="w-8 h-8" />
              </button>
              <Image
                src={galleryImages[selectedImage] || "/placeholder.svg"}
                alt={`Gallery image ${selectedImage + 1}`}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
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
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
