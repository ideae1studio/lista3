// Importaciones necesarias de Vite y sus plugins
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs"; // Módulo 'fs' de Node.js para interactuar con el sistema de archivos
import path from "path"; // Módulo 'path' de Node.js para manejar rutas de archivos
import { defineConfig } from "vite"; // La función principal de configuración de Vite
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime"; // Plugin específico de Manu.ai

// --- Configuración de Plugins ---
// Se agrupan los plugins que Vite utilizará
const plugins = [
  react(), // Plugin oficial para React (HMR, JSX, etc.)
  tailwindcss(), // Plugin para integrar Tailwind CSS
  // jsxLocPlugin(), // ELIMINADO: Este plugin causaba conflictos de versión y fue desinstalado.
  vitePluginManusRuntime(), // Plugin específico del runtime de Manu.ai
];

// --- Definición de la Configuración ---
export default defineConfig({
  //
  // --- ¡MODIFICACIÓN IMPORTANTE PARA GITHUB PAGES! ---
  // Esta línea le dice a Vite que tu sitio no estará en la raíz (ej. "dominio.com/")
  // sino en una subcarpeta (ej. "ideae1studio.github.io/lista3/").
  // El nombre '/lista3/' DEBE coincidir con el nombre de tu repositorio en GitHub.
  base: "/lista3/",
  //
  // --- Plugins ---
  plugins, // Usa la lista de plugins definida arriba

  // --- Resolución de Rutas (Alias) ---
  // Te permite usar atajos (alias) en tus importaciones
  resolve: {
    alias: {
      // "@" apuntará a la carpeta "client/src"
      "@": path.resolve(import.meta.dirname, "client", "src"),
      // "@shared" apuntará a la carpeta "shared"
      "@shared": path.resolve(import.meta.dirname, "shared"),
      // "@assets" apuntará a la carpeta "attached_assets"
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  // --- Directorio de Variables de Entorno ---
  // Dónde buscar archivos .env (ej. .env, .env.local)
  envDir: path.resolve(import.meta.dirname), // Apunta a la raíz del proyecto

  // --- Raíz del Proyecto (Source Code) ---
  // Le dice a Vite dónde está tu 'index.html' y el código fuente principal.
  root: path.resolve(import.meta.dirname, "client"),

  // --- Directorio Público ---
  // Archivos estáticos (como logos, favicons) que se copian tal cual.
  publicDir: path.resolve(import.meta.dirname, "client", "public"),

  // --- Configuración de Compilación (Build) ---
  build: {
    // Dónde se generarán los archivos finales listos para producción.
    // Esto coincide con el 'path' que usaremos en el archivo deploy.yml.
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    
    // Limpia el directorio 'outDir' antes de cada nueva compilación.
    emptyOutDir: true,
  },

  // --- Configuración del Servidor de Desarrollo (Dev Server) ---
  server: {
    host: true, // Escucha en todas las direcciones IP (útil para pruebas en red)
    // Hosts permitidos para acceder al servidor de desarrollo
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    // Opciones de seguridad del sistema de archivos
    fs: {
      strict: true,
      deny: ["**/.*"], // No permitir el acceso a archivos ocultos (ej. .git)
    },
  },
});