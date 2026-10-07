import type {Metadata} from 'next';
import {origin} from '@/lib/config';
export function pageMetadata({title,description,path,image='/familia-alamo.webp',english=false}:{title:string;description:string;path:string;image?:string;english?:boolean}):Metadata{
const url=origin+path;
return {title,description,alternates:{canonical:url,...(['/', '/en'].includes(path)?{languages:{es:origin+'/',en:origin+'/en','x-default':origin+'/'}}:{})},openGraph:{type:'website',siteName:'Agencia Alamo',title,description,url,locale:english?'en_US':'es_US',images:[{url:origin+image,alt:title}]},twitter:{card:'summary_large_image',title,description,images:[origin+image]}};
}
export const serviceSearch:Record<string,{title:string;description:string;image?:string}>={
'seguro-auto-annandale':{title:'Seguro de Auto en Annandale, VA | Atención en Español',description:'Cotiza seguro de auto en Annandale con Agencia Alamo. Compara coberturas y opciones de pago con atención bilingüe. Llama al 703-256-1720.',image:'/auto-cotizar.webp'},
'seguro-auto-virginia':{title:'Seguro de Auto en Virginia en Español',description:'Compara opciones de seguro de auto en Virginia. Coberturas, deducibles y ayuda con SR-22 o FR-44. Cotiza con Agencia Alamo: 703-256-1720.',image:'/auto-virginia.webp'},
'seguro-auto-maryland':{title:'Seguro de Auto en Maryland en Español',description:'Cotiza seguro de auto en Maryland con atención bilingüe. Revisa coberturas, precios y cambios de compañía con Agencia Alamo. 703-256-1720.',image:'/auto-maryland.webp'},
'seguro-auto-washington-dc':{title:'Seguro de Auto en Washington DC en Español',description:'Compara seguro de auto en Washington DC con Agencia Alamo. Atención en español para revisar coberturas y deducibles. Llama al 703-256-1720.',image:'/auto-dc.webp'},
'seguro-licencia-internacional':{title:'Seguro de Auto con Licencia Internacional o Extranjera',description:'¿Tienes licencia extranjera o internacional? Consulta opciones de seguro de auto según tu documentación y estado. Agencia Alamo: 703-256-1720.',image:'/auto-licencia.webp'},
'seguro-sr22-fr44':{title:'Seguro SR-22 y FR-44 en Virginia',description:'¿Necesitas SR-22 o FR-44 en Virginia? Agencia Alamo te ayuda a revisar el requisito y buscar opciones de seguro en español. Llama al 703-256-1720.',image:'/auto-sr22.webp'},
'seguro-casa-condo-renters':{title:'Seguro de Casa, Condo y Renters en Español',description:'Consulta seguros de casa, condo e inquilinos con Agencia Alamo. Revisa vivienda, pertenencias y responsabilidad personal. Cotiza: 703-256-1720.',image:'/seguro-casa.webp'},
'seguro-comercial-contratistas':{title:'Seguro Comercial para Contratistas en Español',description:'Consulta responsabilidad civil, workers’ compensation y auto comercial para contratistas. Atención bilingüe de Agencia Alamo: 703-256-1720.',image:'/seguro-negocio.webp'}
};
