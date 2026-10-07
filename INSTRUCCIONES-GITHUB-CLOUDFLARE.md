# Agencia Alamo — instalación en GitHub y Cloudflare

Este paquete contiene el código completo del sitio, todas las páginas, imágenes,
SEO, blog y el formulario de cotización.

## 1. Antes de subirlo

1. Crea un repositorio **privado** en GitHub llamado `agencia-alamo-website`.
2. Descomprime este ZIP.
3. Copia el contenido de la carpeta `Agencia-Alamo-Website` al repositorio.
4. No subas contraseñas, tokens ni archivos `.env`.

## 2. Crear la base de datos del formulario

1. En Cloudflare abre **Storage & Databases > D1 SQL Database**.
2. Crea una base llamada `agencia-alamo-leads`.
3. Copia su **Database ID**.
4. Abre `wrangler.jsonc` y sustituye
   `REPLACE_WITH_YOUR_CLOUDFLARE_D1_DATABASE_ID` por el ID real.
5. En la consola de D1 ejecuta el contenido del archivo
   `drizzle/0000_strange_mercury.sql` para crear la tabla de cotizaciones.

La conexión debe conservar el nombre `DB` porque el formulario usa ese binding.

## 3. Conectar GitHub con Cloudflare

1. En Cloudflare abre **Workers & Pages > Create application**.
2. Selecciona **Import a repository** o **Connect to Git**.
3. Autoriza únicamente el repositorio `agencia-alamo-website`.
4. Selecciona la rama de producción `main`.
5. Usa estas opciones:

   - Root directory: `/`
   - Node version: `22`
   - Build command: `corepack enable && pnpm install --frozen-lockfile && pnpm build`
   - Deploy command: `pnpm exec wrangler deploy --config wrangler.jsonc`

6. Publica primero en la dirección temporal `workers.dev`.

## 4. Comprobar antes de conectar el dominio

Prueba todas las páginas, navegación móvil, botones de teléfono, Messenger y el
formulario. Confirma en D1 que una solicitud de prueba aparezca en la tabla
`quotes`.

## 5. Conectar agenciaalamo.com

No cambies los nameservers hasta haber copiado y verificado los registros de
correo MX, SPF, DKIM y DMARC. Mantén Wix activo como respaldo durante el cambio.

Cuando el dominio ya esté activo en Cloudflare, abre el Worker y ve a
**Settings > Domains & Routes > Add > Custom Domain**. Agrega
`agenciaalamo.com` y configura `www.agenciaalamo.com` para redirigir al dominio
principal.

## 6. Actualizaciones futuras

Cada cambio enviado a la rama `main` hará que Cloudflare vuelva a construir y
publicar el sitio. Para revisar cambios antes de producción, usa una rama de
prueba y combínala con `main` solamente después de aprobar la vista previa.
