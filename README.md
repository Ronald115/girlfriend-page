# Girlfriend Page

Proyecto web romántico construido con Next.js 16 (app router), React 19, TypeScript estricto y TailwindCSS. Incluye animaciones suaves con Framer Motion y una estética blanco + rosa pastel + naranja peach.

## Estructura
- `app/` – Routing con el app router de Next.js.
  - `page.tsx` – Pantalla de acceso con validación de fecha (04/04/2025) y transición suave.
  - `home/page.tsx` – Página principal con los tres módulos listos para personalizar.
- `components/` – Módulos reutilizables (galería, razones interactivas, mensaje final) y utilidades de estilos.
- `app/globals.css` – Base de Tailwind + utilidades de estética romántica.

## Funcionalidad preparada
- **Pantalla de acceso:** solo permite continuar cuando la fecha es 04/04/2025; si no, muestra un mensaje romántico.
- **Galería de fotos:** placeholders “Foto #” listos para reemplazar por tus imágenes.
- **Razones interactivas:** muestra una razón aleatoria al presionar el botón; reemplaza los textos por tus 110 razones.
- **Mensaje final:** sección animada con texto placeholder para tu dedicatoria.

## Puesta en marcha
1. Instala dependencias
   ```bash
   npm install
   ```
2. Ejecuta en desarrollo
   ```bash
   npm run dev
   ```
3. Ajusta tus fotos, razones y mensaje editando los componentes en `components/`.

## Tecnologías clave
- Next.js 16 (canary) + React 19 RC
- TypeScript 5 (strict)
- TailwindCSS 3
- Framer Motion para animaciones
- Lucide React + Heroicons para íconos modernos
