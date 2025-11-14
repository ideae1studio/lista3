import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    category: "Integrantes",
    images: [
      { id: 1, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Integrante+1", alt: "Integrante 1" },
      { id: 2, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Integrante+2", alt: "Integrante 2" },
      { id: 3, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Integrante+3", alt: "Integrante 3" },
      { id: 4, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Integrante+4", alt: "Integrante 4" },
    ],
  },
  {
    category: "Campaña",
    images: [
      { id: 5, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Campaña+1", alt: "Campaña 1" },
      { id: 6, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Campaña+2", alt: "Campaña 2" },
      { id: 7, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Campaña+3", alt: "Campaña 3" },
      { id: 8, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Campaña+4", alt: "Campaña 4" },
    ],
  },
  {
    category: "Auspiciantes y Convenios",
    images: [
      { id: 9, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Auspiciante+1", alt: "Auspiciante 1" },
      { id: 10, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Auspiciante+2", alt: "Auspiciante 2" },
      { id: 11, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Convenio+1", alt: "Convenio 1" },
      { id: 12, src: "https://placehold.co/400x300/1a1a1a/ffffff?text=Convenio+2", alt: "Convenio 2" },
    ],
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title="Galería" showBackButton={true} backHref="/" />

      {/* Contenido */}
      <main className="flex-1 container py-12">
        <div className="mb-12 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Galería de Fotos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revisa fotos de nuestros candidatos, actividades de campaña y auspiciantes que nos apoyan.
          </p>
        </div>

        {/* Galerías por categoría */}
        {galleryImages.map((category, catIdx) => (
          <section
            key={catIdx}
            className="mb-16 animate-fadeInUp"
            style={{ animationDelay: `${catIdx * 100}ms` }}
          >
            <h3 className="text-2xl font-bold mb-8 text-accent">
              {category.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.images.map((image, imgIdx) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-4xl">🔍</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Información */}
        <section className="bg-card border border-border rounded-lg p-8 mt-16">
          <h3 className="text-2xl font-bold mb-4">Actualizar Galería</h3>
          <p className="text-muted-foreground mb-4">
            Puedes actualizar las fotos de la galería reemplazando las imágenes de ejemplo con tus propias fotos. 
            Para hacerlo, necesitarás:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Acceder al panel de administración</li>
            <li>Subir tus fotos al almacenamiento S3</li>
            <li>Actualizar las URLs de las imágenes en la base de datos</li>
          </ul>
        </section>
      </main>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-2xl max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
