# Alher - Bombas de Agua (Sitio Web Estático)

Sitio web estático moderno, sobrio y de costo cero para la empresa **Alher** (Reparación, colocación y mantenimiento de bombas de agua en CABA).

---

## 🎨 Cambios y Estilo

- **Paleta de Colores:** Azul marino profundo (`#0b2545`, `#13315c`) combinado con blanco puro y acentos sutiles.
- **Diseño Despejado y Limpio:** Se eliminaron alertas y banners redundantes para una experiencia mucho más clara y profesional.
- **Botón de Contacto Directo:** Botón de WhatsApp estilizado que abre directamente la conversación con un mensaje genérico predeterminado:
  > *"Hola Alher, quisiera consultar por el servicio de bombas de agua en CABA."*
- **Navbar Simple (3 enlaces únicos):**
  - `¿Quiénes somos?`
  - `Ubicación`
  - `Contacto`
- **Ubicación Google Maps:** Ambos talleres en CABA (Pavón 2211 y Cochabamba 1502) con mapas interactivos y accesos directos a Google Maps.

---

## 📲 Configurar el Número de WhatsApp

En el archivo `js/main.js` (línea 11), colocá el número de teléfono oficial:

```javascript
const ALHER_CONFIG = {
  whatsappNumber: '5491100000000', // Modificá acá tu número (ej: 5491112345678)
  defaultMessage: 'Hola Alher, quisiera consultar por el servicio de bombas de agua en CABA.'
};
```

---

## 🚀 Cómo Probarlo y Alojarlo Gratis

1. **Local:** Hacé doble clic en `index.html` para verlo en tu navegador.
2. **Hosting Gratuito (Sin servidores ni costo):**
   - Podés subir la carpeta a [Netlify Drop](https://app.netlify.com/drop) arrastrándola con el mouse.
   - O mediante [GitHub Pages](https://pages.github.com/).
