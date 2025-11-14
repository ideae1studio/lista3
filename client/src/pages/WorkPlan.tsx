import Header from "@/components/Header";
import Footer from "@/components/Footer";

const activities = [
  {
    month: "Diciembre 2025",
    date: "19/12/2025",
    items: [
      {
        name: "Concurso de disfraces (papá noeles)",
        objective: "Fomentar la creatividad, el espíritu navideño y la formación integral",
        beneficiary: "Estudiantes de la institución (todos los niveles)",
      },
      {
        name: "Concurso mejor decoración de aulas",
        objective: "Promover el trabajo en equipo y la ambientación festiva",
        beneficiary: "Estudiantes y comunidad educativa",
      },
      {
        name: "Recolección de juguetes para niños de escasos recursos",
        objective: "Incentivar la solidaridad, empatía y conciencia social",
        beneficiary: "Niños de escasos recursos en la comunidad local",
      },
    ],
  },
  {
    month: "Enero 2026",
    date: "22-23/01/2026",
    items: [
      {
        name: "Función de cine y día deportivo",
        objective: "Ofrecer un espacio de recreación y descanso, promoviendo la salud física",
        beneficiary: "Estudiantes de todos los niveles",
      },
      {
        name: "Prevención del consumo de alcoholismo",
        objective: "Excluir el consumo de alcohol en la vida cotidiana de los cadetes",
        beneficiary: "Estudiantes de básica superior y bachillerato",
      },
    ],
  },
  {
    month: "Febrero 2026",
    date: "12-13/02/2026",
    items: [
      {
        name: "Evento San Valentín (stand de fotos)",
        objective: "Fomentar la convivencia, compañerismo y relaciones interpersonales positivas",
        beneficiary: "Estudiantes de toda la comunidad educativa",
      },
      {
        name: "Buzón secreto",
        objective: "Promover el compañerismo y la expresión de afecto mediante mensajes positivos",
        beneficiary: "Estudiantes (todo el cuerpo estudiantil)",
      },
      {
        name: "Venta de rosas y chocolates",
        objective: "Recaudar fondos y promover interacción social",
        beneficiary: "Consejo Estudiantil y estudiantes",
      },
      {
        name: "Evento carnavalero con dinámicas y juegos",
        objective: "Complementar actividades lúdicas de manera divertida y segura",
        beneficiary: "Estudiantes (fomentando alegría y recreación controlada)",
      },
      {
        name: "Presentación de grupo de baile",
        objective: "Promover el talento artístico y participación cultural",
        beneficiary: "Estudiantes y comunidad educativa",
      },
    ],
  },
  {
    month: "Marzo 2026",
    date: "09-26/03/2026",
    items: [
      {
        name: "Evento día de la mujer (serenata, discurso de oratoria)",
        objective: "Reconocer y valorar el papel de la mujer en la comunidad educativa",
        beneficiary: "Mujeres de la comunidad educativa",
      },
      {
        name: "Presente para las mujeres",
        objective: "Expresar agradecimiento y aprecio hacia las mujeres del colegio",
        beneficiary: "Mujeres de la institución",
      },
      {
        name: "Conferencia: La mujer en la sociedad",
        objective: "Mencionar la importancia de la mujer y su aporte para la institución",
        beneficiary: "Toda la comunidad educativa",
      },
      {
        name: "Conferencia: Liderazgo y Autoestima",
        objective: "Impulsar el liderazgo desde la autoestima y el valor personal",
        beneficiary: "Comunidad educativa (diferentes niveles)",
      },
    ],
  },
  {
    month: "Abril 2026",
    date: "10/04/2026",
    items: [
      {
        name: "Presente para los docentes",
        objective: "Reconocer la labor, dedicación y compromiso del cuerpo docente",
        beneficiary: "Docentes de la institución",
      },
    ],
  },
  {
    month: "Mayo 2026",
    date: "10-15/05/2026",
    items: [
      {
        name: "Presente para todas las mamás del colegio",
        objective: "Celebrar el amor maternal y fortalecer el vínculo familia-escuela",
        beneficiary: "Madres pertenecientes a la unidad educativa",
      },
      {
        name: "Sorteo estudiantil (PC gamer)",
        objective: "Fomentar iniciativas familiares y promover la integración",
        beneficiary: "Familias y estudiantes",
      },
    ],
  },
  {
    month: "Junio 2026",
    date: "01-05/06/2026",
    items: [
      {
        name: "Evento día del niño (helados, inflables, zona de pintar, payaso, malabaristas)",
        objective: "Brindar un espacio de recreación, alegría y celebración",
        beneficiary: "Niños de la institución (todos los niveles básicos)",
      },
      {
        name: "Concurso de elaboración de carteles por grupos",
        objective: "Promover la conciencia ambiental y el manejo responsable de residuos",
        beneficiary: "Comunidad educativa y entorno ambiental",
      },
    ],
  },
];

export default function WorkPlan() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title="Plan de Trabajo" showBackButton={true} backHref="/" />

      {/* Contenido */}
      <main className="flex-1 container py-12">
        <div className="mb-12 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras Actividades 2025-2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un plan integral de actividades diseñadas para fomentar la convivencia, la creatividad y el desarrollo integral de nuestros estudiantes.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {activities.map((monthData, idx) => (
            <section
              key={idx}
              className="animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-1 bg-accent/20"></div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-accent">{monthData.month}</h3>
                  <p className="text-sm text-muted-foreground">{monthData.date}</p>
                </div>
                <div className="flex-1 h-1 bg-accent/20"></div>
              </div>

              <div className="grid gap-4">
                {monthData.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold mb-3 text-accent">
                      {item.name}
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">
                          Objetivo:
                        </p>
                        <p className="text-foreground">{item.objective}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">
                          Beneficiarios:
                        </p>
                        <p className="text-foreground">{item.beneficiary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Información adicional */}
        <section className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Información General</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-accent mb-2">Docente Asesora:</p>
              <p className="text-foreground">Lic. Liliana Ortiz</p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-2">Período:</p>
              <p className="text-foreground">Diciembre 2025 - Junio 2026</p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-2">Financiamiento:</p>
              <p className="text-foreground">
                Aportes voluntarios, patrocinios, donaciones y fondos propios
              </p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-2">Objetivo General:</p>
              <p className="text-foreground">
                Promover la convivencia armónica, la creatividad y el desarrollo integral de los estudiantes
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
