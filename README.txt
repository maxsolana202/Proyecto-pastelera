📘 README – Instrucciones para ejecutar el proyecto NuevaCuba (React + Vite)

🧁 Descripción
NuevaCuba es una aplicación web desarrollada con React + Vite, que muestra el catálogo y la información de la Pastelería Mil Sabores.
El proyecto utiliza Bootstrap para el diseño y React Router para la navegación entre páginas.

------------------------------------------------------------
🚀 Cómo ejecutar el proyecto

1️⃣  Requisitos previos
- Tener instalado Node.js (versión 18 o superior).
  👉 Descarga desde https://nodejs.org/

Verifica en la terminal:
    node -v
    npm -v
Si ambas devuelven un número de versión (por ejemplo v20.14.0 y 10.7.0), puedes continuar.

------------------------------------------------------------
2️⃣  Abrir el proyecto
Ubica la carpeta del proyecto y entra en ella desde la terminal.
Ejemplo:
    cd C:\Users\<tu_usuario>\Desktop\NuevaCuba

------------------------------------------------------------
3️⃣  Instalar dependencias
Ejecuta:
    npm install
Esto descargará automáticamente todas las librerías necesarias (React, Bootstrap, Vite, etc.).
✅ Solo se necesita ejecutar este comando la primera vez o si borras la carpeta node_modules.

------------------------------------------------------------
4️⃣  Iniciar el servidor de desarrollo
Para abrir el proyecto en el navegador:
    npm run dev

Verás un mensaje similar a:
    VITE v5.x  ready in 300ms
      ➜  Local:   http://localhost:5173/

Copia esa dirección y pégala en tu navegador. Tu aplicación se abrirá de inmediato 🎂

------------------------------------------------------------
5️⃣  (Opcional) Generar el build de producción
Si deseas crear una versión optimizada para subir a hosting:
    npm run build

Y para probarla localmente:
    npm run preview

------------------------------------------------------------
💡 Estructura del proyecto
NuevaCuba/
 ├── index.html
 ├── package.json
 ├── vite.config.js
 ├── public/
 │    └── img/          →  imágenes (images1.jpeg ... images18.jpeg)
 └── src/
      ├── components/   → Navbar, Footer, CartContext, etc.
      ├── pages/        → Home, Products, Carrito, Contacto, etc.
      ├── styles/       → App.css, Custom.css, index.css
      └── main.jsx      → punto de entrada principal

------------------------------------------------------------
⚙️  Comandos principales
npm install       → Instala todas las dependencias necesarias
npm run dev       → Ejecuta el proyecto en modo desarrollo
npm run build     → Genera la versión lista para producción
npm run preview   → Sirve el build generado para previsualizarlo

------------------------------------------------------------
📦  Nota final
Si vas a mover el proyecto a otro computador:
1. Copia toda la carpeta NuevaCuba (puedes comprimirla en .zip).
2. En el nuevo equipo, descomprímela y abre una terminal dentro de ella.
3. Ejecuta:
       npm install
       npm run dev
4. Listo ✅

Autor: Proyecto Cuba – React + Vite
Versión: 1.0
Fecha: 2025
