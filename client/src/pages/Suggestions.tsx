import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";

export default function Suggestions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const createSuggestion = trpc.suggestions.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", email: "", suggestion: "" });
      setTimeout(() => setSubmitted(false), 5000);
    },
    onError: (err) => {
      setError("Error al enviar la sugerencia. Intenta de nuevo.");
      console.error(err);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.suggestion.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Por favor ingresa un correo válido.");
      return;
    }

    createSuggestion.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title="Sugerencias" showBackButton={true} backHref="/" />

      {/* Contenido */}
      <main className="flex-1 container py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comparte Tus Sugerencias
            </h2>
            <p className="text-lg text-muted-foreground">
              Tu opinión es importante para nosotros. Ayúdanos a mejorar la campaña compartiendo tus ideas y sugerencias.
            </p>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8 animate-fadeInUp"
          >
            {/* Mensaje de éxito */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-700">¡Gracias por tu sugerencia!</p>
                  <p className="text-sm text-green-600">
                    Hemos recibido tu mensaje y lo revisaremos pronto.
                  </p>
                </div>
              </div>
            )}

            {/* Mensaje de error */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-700">Error</p>
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              </div>
            )}

            {/* Campo Nombre */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                disabled={createSuggestion.isPending}
              />
            </div>

            {/* Campo Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu.email@ejemplo.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                disabled={createSuggestion.isPending}
              />
            </div>

            {/* Campo Sugerencia */}
            <div className="mb-8">
              <label htmlFor="suggestion" className="block text-sm font-semibold mb-2">
                Tu Sugerencia
              </label>
              <textarea
                id="suggestion"
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                placeholder="Comparte tu idea, sugerencia o comentario aquí..."
                rows={6}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                disabled={createSuggestion.isPending}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Máximo 1000 caracteres
              </p>
            </div>

            {/* Botón Enviar */}
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg font-semibold"
              disabled={createSuggestion.isPending}
            >
              {createSuggestion.isPending ? "Enviando..." : "Enviar Sugerencia"}
            </Button>
          </form>

          {/* Información adicional */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold text-lg mb-2">Ideas</h3>
              <p className="text-muted-foreground text-sm">
                Comparte tus ideas para mejorar la campaña o las actividades del consejo estudiantil.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-lg mb-2">Comentarios</h3>
              <p className="text-muted-foreground text-sm">
                Déjanos saber qué te pareció de nuestras actividades y cómo podemos mejorar.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Propuestas</h3>
              <p className="text-muted-foreground text-sm">
                Sugiere nuevas actividades o eventos que te gustaría que realizáramos.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2">Colaboración</h3>
              <p className="text-muted-foreground text-sm">
                Ofrécenos tu ayuda o sugiere formas en que podamos colaborar juntos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
