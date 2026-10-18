# fena-web

Sitio de la Federación Ecuatoriana de Natación en Nuxt 4. Migrado desde `../fena-web` (HTML estático, plantilla Eduvers) y organizado como `capia-web`.

## Comandos

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # servidor Node (.output/server/index.mjs), ver Dockerfile
pnpm generate   # sitio estático en .output/public (Netlify)
pnpm lint
```

## Estructura

```
app/
  app.vue                  título base y layout
  layouts/default.vue      header, footer, menú móvil, sidebar, chat, scroll-to-top
  pages/                   una carpeta por sección; [slug].vue para los detalles
  components/
    layout/                piezas compartidas (AppHeader, HeaderNav, AppFooter, PageHeader, CtaHighlights…)
    home/                  secciones de la home
    news/                  NewsCard
    <página>/              secciones propias de cada página (institucion, noticias, denuncias…)
  constants/               menú, contacto, redes, logos y textos de CtaHighlights
  data/                    contenido de ejemplo (noticias, eventos, cifras) hasta tener backend
  stores/ui.js             estado de sidebar, menú móvil y chat
  plugins/template.client.js  inicializa el JS de la plantilla en cada navegación
public/assets/             css, js, fuentes, imágenes y videos de la plantilla
```

## Cómo se trabaja

- **Menú, contacto y redes**: se cambian una sola vez en `app/constants/`. El header, el menú sticky, el menú móvil, el sidebar y el footer leen de ahí.
- **Logos**: `brand.logo` (letras azules) en fondo claro; `brand.logoWhite` (letras blancas) en fondo azul.
- **Página nueva**: crear `app/pages/<ruta>/index.vue` con `<PageHeader title="…" />`, sus secciones y `<CtaHighlights :items="…" />`.
- **Contenido repetido** (tarjetas, listas): poner los datos en `app/data/` y recorrerlos con `v-for`, como en `HomeNews`, `HomeEvents`, `HomeFeatures` y `HomeCounter`. Cuando exista la API, se reemplaza el import de `data/` por la llamada.
- **JS de la plantilla** (`public/assets/js/fena-template.js`): `initGlobal()` corre una vez y `initPage()` después de cada cambio de página. Para un widget nuevo de jQuery, agregarlo en `initPage()`. La interactividad del layout (menús, sidebar, chat, tabs de eventos) ya está en Vue y no usa jQuery.
- **Estilos**: la plantilla está en `public/assets/css/style.css` (paleta en `:root`: azul `#0B1542`, rojo `#E42A2D`, amarillo `#FAEE25`). Estilos propios en `app/assets/main.css`.

## Pendiente

- Las secciones de las páginas interiores se migraron tal cual desde el HTML. Conviene pasarlas a datos + `v-for` a medida que se toquen, como en la home.
- Los formularios no envían nada todavía (sin backend). El canal de denuncias es una demo que guarda en `localStorage`.
