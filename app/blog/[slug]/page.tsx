import {pageMetadata} from '@/lib/seo';
import {SEO} from '@/components/seo';
import {notFound} from 'next/navigation';
import {articles} from '@/lib/content';
import {Contact} from '@/components/alamo';
import {origin} from '@/lib/config';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const a=articles.find(a=>a.slug===slug);return a?pageMetadata({title:a.title,description:a.summary,path:'/blog/'+slug,image:'/auto-cotizar.webp'}):{title:'Artículo no encontrado',robots:{index:false,follow:false}}}
export default async function Article({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const a=articles.find(a=>a.slug===slug);if(!a)notFound();return <main id="contenido"><SEO path={'/blog/'+slug}/><section className="innerhero"><div className="wrap"><div className="breadcrumb"><a href="/blog">Blog</a> / {a.category}</div><h1>{a.title}</h1><p>{a.summary}</p></div></section><article className="section wrap prose legal">{a.sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}<p className="notice">Contenido educativo de Agencia Alamo. Las condiciones concretas deben revisarse con tu agente y tu póliza.</p></article><section className="wrap insurance-seo-links"><h2>Consulta opciones para tu auto</h2><div><a href="/cotizar-seguro-auto">Cotizar seguro de auto</a><a href="/seguro-sr22-fr44">SR-22 y FR-44</a><a href="/seguro-licencia-internacional">Licencia internacional</a></div></section><Contact/></main>}
