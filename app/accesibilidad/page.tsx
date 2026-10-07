import {pageMetadata} from '@/lib/seo';
import {SEO} from '@/components/seo';
import {origin} from '@/lib/config';
export const metadata=pageMetadata({"title": "Accesibilidad y Ayuda", "description": "Consulta las opciones de accesibilidad y ayuda para utilizar el sitio de Agencia Alamo. Comunícate con nuestro equipo al 703-256-1720.", "path": "/accesibilidad", "image": "/logo.webp", "english": false});
export default function Accessibility(){return <main id="contenido" className="section wrap prose legal"><SEO path="/accesibilidad"/><h1>Accesibilidad</h1><p>Queremos que puedas informarte y contactarnos con facilidad. Este sitio incluye navegación por teclado, etiquetas en formularios, contraste legible y respeto a la preferencia de movimiento reducido.</p><h2>¿Necesitas ayuda?</h2><p>Si encuentras una barrera de acceso, llama al <a href="tel:+17032561720">703-256-1720</a>. Describe la página y la dificultad para que podamos ayudarte por otra vía y mejorar la experiencia.</p></main>}
