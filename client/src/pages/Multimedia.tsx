import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import { useState } from "react";

const multimediaContent = [
  {
    category: "Videos Divertidos",
    items: [
      {
        id: 1,
        title: "Presentación de la Lista N°3",
        description: "Conoce a nuestro equipo en este video divertido",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Video+1",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 2,
        title: "Momentos Graciosos de Campaña",
        description: "Los mejores momentos de nuestra campaña",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Video+2",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 3,
        title: "Reto de Candidatos",
        description: "Un reto divertido entre los candidatos",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Video+3",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 4,
        title: "Detrás de Cámaras",
        description: "Momentos detrás de cámaras de la campaña",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Video+4",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    category: "Videos Educativos",
    items: [
      {
        id: 5,
        title: "Liderazgo y Responsabilidad",
        description: "Aprende sobre liderazgo responsable",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Educativo+1",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 6,
        title: "Valores del Colegio Militar",
        description: "Conoce los valores fundamentales de nuestra institución",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Educativo+2",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 7,
        title: "Trabajo en Equipo",
        description: "Importancia del trabajo en equipo",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Educativo+3",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 8,
        title: "Convivencia Armónica",
        description: "Cómo construir una convivencia armónica",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Educativo+4",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    category: "Música de Campaña",
    items: [
      {
        id: 9,
        title: "Himno de la Lista N°3",
        description: "Canción oficial de nuestra campaña",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Música+1",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        isAudio: true,
      },
      {
        id: 10,
        title: "Canción de Unidad",
        description: "Una canción que representa nuestra unidad",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Música+2",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        isAudio: true,
      },
      {
        id: 11,
        title: "Ritmo de Campaña",
        description: "Música para animar la campaña",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Música+3",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        isAudio: true,
      },
      {
        id: 12,
        title: "Melodía del Colegio",
        description: "Música inspirada en nuestro colegio",
        thumbnail: "https://placehold.co/400x225/1a1a1a/ffffff?text=Música+4",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        isAudio: true,
      },
    ],
  },
];

export default function Multimedia() {
  const [selectedVideo, setSelectedVideo] = useState<{ videoUrl: string; title: string } | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<{ audioUrl: string; title: string } | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title="Multimedia" showBackButton={true} backHref="/" />

      {/* Contenido */}
      <main className="flex-1 container py-12">
        <div className="mb-12 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contenido Multimedia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Videos divertidos, educativos y música que representan nuestra campaña.
          </p>
        </div>

        {/* Categorías de contenido */}
        {multimediaContent.map((section, secIdx) => (
          <section
            key={secIdx}
            className="mb-16 animate-fadeInUp"
            style={{ animationDelay: `${secIdx * 100}ms` }}
          >
            <h3 className="text-2xl font-bold mb-8 text-accent">
              {section.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item: any, itemIdx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.isAudio) {
                      setSelectedAudio({ audioUrl: item.audioUrl, title: item.title });
                    } else {
                      setSelectedVideo({ videoUrl: item.videoUrl, title: item.title });
                    }
                  }}
                  className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-video bg-muted">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-accent rounded-full p-4">
                          {item.isAudio ? (
                            <div className="text-white text-2xl">🎵</div>
                          ) : (
                            <Play className="w-6 h-6 text-accent-foreground" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2 line-clamp-2 text-left">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground text-left line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Información */}
        <section className="bg-card border border-border rounded-lg p-8 mt-16">
          <h3 className="text-2xl font-bold mb-4">Agregar Contenido Multimedia</h3>
          <p className="text-muted-foreground mb-4">
            Puedes agregar más videos y música a esta sección. Para hacerlo, necesitarás:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Subir los archivos de video o audio a una plataforma como YouTube o SoundCloud</li>
            <li>Obtener el código de incrustación (embed code)</li>
            <li>Actualizar la base de datos con los nuevos enlaces</li>
          </ul>
        </section>
      </main>

      {/* Modal de video */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="font-bold text-lg">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Modal de audio */}
      {selectedAudio && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedAudio(null)}
        >
          <div
            className="w-full max-w-2xl bg-card rounded-lg p-8 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">{selectedAudio.title}</h3>
              <button
                onClick={() => setSelectedAudio(null)}
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                ✕
              </button>
            </div>
            <audio
              controls
              className="w-full"
              src={selectedAudio.audioUrl}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
