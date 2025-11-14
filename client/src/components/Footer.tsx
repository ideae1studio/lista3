export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información General */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Lista N°3</h3>
            <p className="text-muted-foreground mb-2">
              Consejo Estudiantil 2025-2026
            </p>
            <p className="text-muted-foreground text-sm">
              Colegio Militar N°4 "Abdón Calderón"
            </p>
            <p className="text-muted-foreground text-sm">
              Cuenca, Ecuador
            </p>
          </div>

          {/* Eslogan */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Nuestro Lema</h3>
            <p className="text-foreground italic font-semibold">
              "Lideramos para servir, servimos para cumplir"
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              Comprometidos con la excelencia y el servicio a la comunidad educativa.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Docente Asesora</h3>
            <p className="text-foreground">Lic. Liliana Ortiz</p>
            <p className="text-muted-foreground text-sm mt-4">
              Unidad Educativa de Fuerzas Armadas
            </p>
            <p className="text-muted-foreground text-sm">
              33 años de excelencia educativa
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p className="mb-2">
            © 2025 Lista N°3 - Consejo Estudiantil COMIL 4 "Abdón Calderón"
          </p>
          <p>
            Colegio Militar N°4 "Abdón Calderón" - Cuenca, Ecuador
          </p>
        </div>
      </div>
    </footer>
  );
}
