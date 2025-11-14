import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

const candidatesData = [
  {
    id: 1,
    name: "Juan Martín Portero Calle",
    position: "PRESIDENTE",
    average: "9.69",
    achievements: "Primer Brigadier, Primer Escolta del Pabellón de la Ciudad, Ganador Concurso de Oratoria, Ganador Singing Contest, Integrante de la Selección de Basquet, Abanderado Nacional",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Juan+Martín",
  },
  {
    id: 2,
    name: "Damaris Stefanía Peñafiel Farfán",
    position: "VICEPRESIDENTE",
    average: "9.48",
    achievements: "Comandante de curso",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Damaris",
  },
  {
    id: 3,
    name: "Diana Micaela Herrera Castillo",
    position: "SECRETARIA",
    average: "9.57",
    achievements: "Brigadier",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Diana",
  },
  {
    id: 4,
    name: "Andersson Aarón Nieto Ávila",
    position: "TESORERO",
    average: "9.96",
    achievements: "Brigadier Mayor, Abanderado del Pabellón de la Ciudad",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Andersson",
  },
  {
    id: 5,
    name: "Juan Sebastián Narváez Abril",
    position: "JEFE DE CAMPAÑA",
    average: "-",
    achievements: "Seleccionado de Futbol",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Juan+Sebastián",
  },
  {
    id: 6,
    name: "Wilson Bravo Ávila",
    position: "ASESOR DE IMAGEN",
    average: "-",
    achievements: "Seleccionado de Futbol",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Wilson",
  },
  {
    id: 7,
    name: "Scarlett Valeria Mallaguari Caguana",
    position: "1° VOCAL PRINCIPAL",
    average: "8.32",
    achievements: "Comandante de curso",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Scarlett",
  },
  {
    id: 8,
    name: "Francisco Daniel Rivas Quito",
    position: "2° VOCAL PRINCIPAL",
    average: "8.61",
    achievements: "Comandante de curso",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Francisco",
  },
  {
    id: 9,
    name: "Noelia Rafaela Gavilanes Cevallos",
    position: "3° VOCAL PRINCIPAL",
    average: "9.86",
    achievements: "Comandante de curso",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Noelia",
  },
  {
    id: 10,
    name: "Matías Josué Jaramillo Tapia",
    position: "1° VOCAL SUPLENTE",
    average: "9.36",
    achievements: "Comandante de curso",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Matías",
  },
  {
    id: 11,
    name: "Paulett Camila Yange Flores",
    position: "2° VOCAL SUPLENTE",
    average: "9.70",
    achievements: "Comandante de curso",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Paulett",
  },
  {
    id: 12,
    name: "Shellmy Maite Veloz Salvatierra",
    position: "3° VOCAL SUPLENTE",
    average: "9.56",
    achievements: "Comandante de curso",
    photo: "https://placehold.co/300x400/1a1a1a/ffffff?text=Shellmy",
  },
];

export default function Candidates() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title="Candidatos" showBackButton={true} backHref="/" />

      {/* Contenido */}
      <main className="flex-1 container py-12">
        <div className="mb-12 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            12 integrantes comprometidos con el liderazgo, el servicio y el cumplimiento de nuestros objetivos.
          </p>
        </div>

        {/* Directiva */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-accent">Directiva</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidatesData.slice(0, 4).map((candidate, idx) => (
              <div
                key={candidate.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64 bg-muted">
                  <img
                    src={candidate.photo}
                    alt={candidate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4">
                  <div className="text-accent font-bold text-sm mb-2">
                    {candidate.position}
                  </div>
                  <h4 className="font-bold text-lg mb-2 line-clamp-2">
                    {candidate.name}
                  </h4>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Promedio: <span className="font-bold">{candidate.average}</span>
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {candidate.achievements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jefe de Campaña y Asesor */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-accent">Jefe de Campaña y Asesor</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidatesData.slice(4, 6).map((candidate, idx) => (
              <div
                key={candidate.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(idx + 4) * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64 bg-muted">
                  <img
                    src={candidate.photo}
                    alt={candidate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4">
                  <div className="text-accent font-bold text-sm mb-2">
                    {candidate.position}
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    {candidate.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {candidate.achievements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vocales */}
        <section>
          <h3 className="text-2xl font-bold mb-8 text-accent">Vocales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidatesData.slice(6).map((candidate, idx) => (
              <div
                key={candidate.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(idx + 6) * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64 bg-muted">
                  <img
                    src={candidate.photo}
                    alt={candidate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4">
                  <div className="text-accent font-bold text-sm mb-2">
                    {candidate.position}
                  </div>
                  <h4 className="font-bold text-lg mb-2">
                    {candidate.name}
                  </h4>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Promedio: <span className="font-bold">{candidate.average}</span>
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {candidate.achievements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
