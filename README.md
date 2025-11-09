# CV de Sheynner Zavala - Aplicación React

Una aplicación web moderna y responsiva para mostrar el CV de Sheynner Zavala, desarrollada con React, Tailwind CSS y animaciones avanzadas.

## 🚀 Características

- **Diseño Ultra-Moderno**: Interfaz con animaciones fluidas y diseño responsivo
- **Tema Oscuro/Claro**: Cambio dinámico entre temas con persistencia
- **PDF Exportable**: Funcionalidad para descargar el CV en formato PDF
- **Carrusel de Proyectos**: Showcase interactivo de proyectos con imágenes
- **Gestión de Datos**: Sistema CRUD para editar información del CV
- **Animaciones**: Transiciones suaves con Framer Motion
- **Íconos Modernos**: Utiliza Lucide React para íconos consistentes

## 📋 Tecnologías Utilizadas

- **Frontend**: React 19.2.0
- **Estilos**: Tailwind CSS 3.4.18
- **Animaciones**: Framer Motion 12.23.24
- **Íconos**: Lucide React 0.553.0
- **PDF Export**: html2pdf.js 0.12.1
- **Build Tool**: Create React App

## 🛠️ Instalación y Uso Local

### Prerequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/sheynner-dev/cv.git
   cd cv
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   - La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

## 📦 Despliegue en GitHub Pages

### Configuración Automática

El proyecto ya está configurado para desplegarse en GitHub Pages. Solo necesitas:

1. **Hacer push al repositorio**
   ```bash
   git add .
   git commit -m "Actualización del CV"
   git push origin main
   ```

2. **Desplegar a GitHub Pages**
   ```bash
   npm run deploy
   ```

### URL del Sitio Web
- **GitHub Pages**: [https://sheynner-dev.github.io/cv](https://sheynner-dev.github.io/cv)

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expulsa de Create React App (⚠️ irreversible)
- `npm run deploy` - Despliega a GitHub Pages

## 📁 Estructura del Proyecto

```
cv/
├── public/
│   ├── docs/          # Documentos PDF
│   ├── images/        # Imágenes de proyectos y perfil
│   └── index.html     # HTML principal
├── src/
│   ├── App.js         # Componente principal
│   ├── cv.jsx         # Componente del CV
│   └── index.js       # Punto de entrada
├── package.json       # Dependencias y scripts
├── tailwind.config.js # Configuración de Tailwind
└── README.md         # Este archivo
```

## 🎨 Personalización

### Editar Información del CV

El CV utiliza datos estáticos definidos en `src/cv.jsx`. Para actualizar la información:

1. Abre `src/cv.jsx`
2. Modifica el objeto `initialData` con tu información
3. Reinicia el servidor de desarrollo para ver los cambios

### Cambiar Imágenes

- **Perfil**: Reemplaza `public/images/perfil.png`
- **Proyectos**: Añade imágenes en `public/images/` y actualiza las referencias en `initialData`

## 📱 Características del Diseño

- **Totalmente Responsivo**: Se adapta a todos los tamaños de pantalla
- **Tema Oscuro/Claro**: Cambio instantáneo con persistencia
- **Animaciones Suaves**: Transiciones fluidas entre secciones
- **Carga Optimizada**: Imágenes optimizadas y lazy loading

## 🔒 Seguridad

- Sin dependencias con vulnerabilidades críticas
- Código abierto y transparente
- Sin almacenamiento de datos sensibles

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Sheynner Zavala - [@sheynner-dev](https://github.com/sheynner-dev)

Link del Proyecto: [https://github.com/sheynner-dev/cv](https://github.com/sheynner-dev/cv)

---

⭐ Si este proyecto te fue útil, ¡no olvides darle una estrella!
