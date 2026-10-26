# Ébano Kitchen & Bar — Reglas de Diseño, Maquetación y Contenido

## 1. Maquetación Full-Bleed y Hero sin Cajas de Texto
- **Imágenes de fondo de sección completa**: Cuando una imagen deba cubrir toda una sección (como `.hero__visual` en `<section class="hero">` o `.komein-banner__bg`), colócala como **hijo directo del `<section>`**, nunca dentro de `.container` ni de un contenedor interno con `position: relative`, para que `position: absolute; inset: 0;` ocupe el `100%` real del ancho y alto (`min-height: 100dvh`).
- **Texto en primer plano limpio (sin cajas)**: No encierres el texto del Hero (`.hero__copy`) dentro de recuadros, tarjetas con bordes ni paneles con `backdrop-filter`. Garantiza la legibilidad mediante un degradado direccional suave (`::after` interpolado con `var(--in-oklab)`) sobre la imagen de fondo y un `text-shadow` sutil.
- **Carrusel principal**: Mantén el avance automático de diapositivas en **6 segundos** (`HERO_AUTO_INTERVAL_MS = 6000` en `app.js` y `6s` en `.hero__dot.is-active::after`).

## 2. Minimalismo de Interfaz y Paleta Oficial (`#FF6500` · `#1E3E62` · `#0B192C` · `#000000`)
- **Paleta Oficial de 4 Colores (Cero tonos café/marrón)**: Usa exclusivamente la paleta `#FF6500` (`--palette-orange`), `#1E3E62` (`--palette-slate`), `#0B192C` (`--palette-navy`) y `#000000` (`--palette-black`), interpolando degradados con `var(--in-oklch)` y generando matices con `color-mix(in oklab, ...)`. Nunca uses tonos café o marrón en los fondos de las secciones.
- **Sin elementos redundantes**:
  - No agregues botones de acción redundantes debajo del mapa interactivo de Google Maps (`#mapa`) ni píldoras de estado en vivo (`#liveHoursStatus`) en la sección de horarios (`#horarios`).
  - Mantén el mapa de Google Maps (`#mapa`) a **todo color original** (nunca apliques `filter: grayscale(...)`).
- **Iconografía de WhatsApp y Redes Sociales**:
  - El botón flotante `.floating-wa` debe usar `whatsapp-logo.png` con fondo transparente (`background: transparent; border-radius: 0; box-shadow: none;`) y `filter: drop-shadow(...)` siguiendo la silueta exacta del logo (`64×64 px`).
  - Los íconos sociales del footer (`.footer__socials .social-icon`) no deben llevar círculos grises de fondo y deben mantener un tamaño uniforme y visible (`22px–24px`).

## 3. Fotografía en Alta Definición y Verificación de Orientación
- **Inspección visual obligatoria**: Tras convertir o recortar fotografías (especialmente desde archivos `.HEIC`), inspecciona siempre el archivo resultante con `read_file` para verificar que no esté rotado o invertido (`180°`) por metadatos EXIF.
- **Cache-busting**: Cuando gires o reemplaces una imagen existente manteniendo el mismo nombre de archivo, añade o incrementa un parámetro de versión (`?v=2`, `?v=3`) en `index.html` y `app.js` para forzar la recarga inmediata en el navegador.

## 4. Sincronización de Datos Oficiales (Horarios y Contacto)
Cualquier cambio en horarios o contacto debe mantenerse sincronizado simultáneamente en `index.html` (`#horarios`, `#reservas`, `#ubicacion`) y en `app.js` (`HERO_SLIDES`, `WHATSAPP_NUMBER`):
- **Horarios oficiales**:
  - **Jueves a Sábado**: `8:00 AM – 7:30 PM`
  - **Domingo**: `8:30 AM – 7:30 PM`
  - **Lunes**: `9:00 AM – 7:30 PM`
  - **Martes y Miércoles**: `Cerrado` (nunca usar la frase *"todos los días"*).
- **WhatsApp**: `0999002427` (`593999002427` en enlaces `wa.me`).
- **Redes y Mapa**:
  - Instagram: `https://www.instagram.com/ebano_kitchenbar/`
  - TikTok: `https://www.tiktok.com/@ebano_tonsupa?is_from_webapp=1&sender_device=pc`
  - Facebook: `https://www.facebook.com/profile.php?id=61593201235824`
  - Google Maps: `https://maps.app.goo.gl/edHkXdufkRBdoZLL9` (`0.9000261, -79.8024118`)
