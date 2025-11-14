import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Candidatos", href: "/candidatos" },
    { label: "Plan de Trabajo", href: "/plan-de-trabajo" },
    { label: "Galería", href: "/galeria" },
    { label: "Multimedia", href: "/multimedia" },
    { label: "Sugerencias", href: "/sugerencias" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navegación */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt="Logo" className="w-10 h-10" />
              <span className="font-bold text-lg hidden sm:inline">Lista N°3</span>
            </a>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Menú Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú Mobile Expandido */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center py-20 md:py-32 overflow-hidden">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>

        {/* Contenido */}
        <div className="container relative z-10 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Lista N°3
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-accent">
            Consejo Estudiantil 2025-2026
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            <span className="font-bold text-accent">"Lideramos para servir, servimos para cumplir"</span>
          </p>
          <p className="text-base md:text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
            Colegio Militar N°4 "Abdón Calderón" - Cuenca, Ecuador
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/candidatos">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
                Conoce a los Candidatos
              </Button>
            </Link>
            <Link href="/plan-de-trabajo">
              <Button variant="outline" className="px-8 py-3 text-lg">
                Plan de Trabajo
              </Button>
            </Link>
          </div>
        </div>

        {/* Decoración */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Sección de Características */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explora Nuestra Campaña
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/candidatos">
              <a className="group p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Candidatos
                </h3>
                <p className="text-muted-foreground">
                  Conoce a los 12 integrantes de nuestra lista con sus logros y trayectoria académica.
                </p>
              </a>
            </Link>

            {/* Card 2 */}
            <Link href="/plan-de-trabajo">
              <a className="group p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Plan de Trabajo
                </h3>
                <p className="text-muted-foreground">
                  Descubre las actividades y objetivos que realizaremos durante el año.
                </p>
              </a>
            </Link>

            {/* Card 3 */}
            <Link href="/galeria">
              <a className="group p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Galería
                </h3>
                <p className="text-muted-foreground">
                  Revisa fotos de nuestros candidatos, campaña y auspiciantes.
                </p>
              </a>
            </Link>

            {/* Card 4 */}
            <Link href="/multimedia">
              <a className="group p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Multimedia
                </h3>
                <p className="text-muted-foreground">
                  Videos divertidos, educativos y música de nuestra campaña.
                </p>
              </a>
            </Link>

            {/* Card 5 */}
            <Link href="/sugerencias">
              <a className="group p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Sugerencias
                </h3>
                <p className="text-muted-foreground">
                  Comparte tus ideas y sugerencias para mejorar nuestra campaña.
                </p>
              </a>
            </Link>

            {/* Card 6 */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Colegio Militar</h3>
              <p className="text-muted-foreground">
                Unidad Educativa de Fuerzas Armadas "Abdón Calderón" - 33 años de excelencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
