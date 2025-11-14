import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { APP_LOGO } from "@/const";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  backHref?: string;
}

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Candidatos", href: "/candidatos" },
  { label: "Plan de Trabajo", href: "/plan-de-trabajo" },
  { label: "Galería", href: "/galeria" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Sugerencias", href: "/sugerencias" },
];

export default function Header({ title, showBackButton = false, backHref = "/" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navegación Principal */}
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

      {/* Header de Página */}
      {title && (
        <div className="sticky top-16 z-40 bg-card border-b border-border">
          <div className="container py-4 flex items-center gap-4">
            {showBackButton && (
              <Link href={backHref}>
                <Button variant="ghost" size="sm">
                  <span className="mr-2">←</span>
                  Volver
                </Button>
              </Link>
            )}
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          </div>
        </div>
      )}
    </>
  );
}
