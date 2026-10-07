import {origin} from '@/lib/config';
import {services,articles} from '@/lib/content';
import {serviceSearch} from '@/lib/seo';
export function SEO({path,faq}:{path:string;faq?:string[][]}){
const url=origin+path;const service=services.find(s=>'/'+s.slug===path);const article=articles.find(a=>'/blog/'+a.slug===path);const english=path==='/en';
const titles:Record<string,string>={'/':'Agencia Alamo | Seguros en español en Annandale','/en':'Alamo Insurance Agency | Bilingual Insurance in Annandale','/cotizar-seguro-auto':'Cotiza tu seguro de auto en español','/blog':'Consejos de seguros en español','/privacidad':'Privacidad de Agencia Alamo','/accesibilidad':'Accesibilidad de Agencia Alamo'};
const name=(service&&serviceSearch[service.slug]?.title)||article?.title||titles[path]||'Agencia Alamo';
const agencyId=origin+'/#agency';const siteId=origin+'/#website';
const graph:Record<string,unknown>[]=[
{'@type':'InsuranceAgency','@id':agencyId,name:'Agencia Alamo',alternateName:'Alamo Insurance Agency',url:origin+'/',logo:{'@type':'ImageObject',url:origin+'/logo.webp'},image:origin+'/familia-alamo.webp',telephone:'+1-703-256-1720',address:{'@type':'PostalAddress',streetAddress:'7540 Little River Tpke, Suite B',addressLocality:'Annandale',addressRegion:'VA',postalCode:'22003',addressCountry:'US'},areaServed:['Virginia','Maryland','Washington DC','Delaware'],sameAs:['https://www.facebook.com/segurosalamo/'],openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday'],opens:'09:30',closes:'17:30'},{'@type':'OpeningHoursSpecification',dayOfWeek:'Saturday',opens:'10:30',closes:'13:00'}]},
{'@type':'WebSite','@id':siteId,url:origin+'/',name:'Agencia Alamo',alternateName:'Alamo Insurance Agency',publisher:{'@id':agencyId},inLanguage:['es','en']},
{'@type':'WebPage','@id':url+'#webpage',url,name,inLanguage:english?'en':'es',isPartOf:{'@id':siteId},about:{'@id':agencyId},...(path!=='/'?{breadcrumb:{'@id':url+'#breadcrumb'}}:{})}
];
if(path!=='/'){const crumbs=[{name:english?'Home':'Inicio',item:origin+'/'}];if(article)crumbs.push({name:'Blog',item:origin+'/blog'});crumbs.push({name,item:url});graph.push({'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,...c}))});}
if(service||path==='/cotizar-seguro-auto')graph.push({'@type':'Service','@id':url+'#service',name:service?.title||'Cotización de seguro de auto',serviceType:service?.short||'Seguro de auto',description:service?.intro||'Consulta opciones de seguro de auto con atención en español e inglés.',url,provider:{'@id':agencyId},areaServed:service&&['seguro-auto-virginia','seguro-auto-annandale','seguro-sr22-fr44'].includes(service.slug)?['Virginia']:service?.slug==='seguro-auto-maryland'?['Maryland']:service?.slug==='seguro-auto-washington-dc'?['Washington DC']:['Virginia','Maryland','Washington DC','Delaware']});
if(article)graph.push({'@type':'BlogPosting','@id':url+'#article',headline:article.title,description:article.summary,inLanguage:'es',mainEntityOfPage:{'@id':url+'#webpage'},author:{'@id':agencyId},publisher:{'@id':agencyId},image:origin+'/auto-cotizar.webp'});
if(faq)graph.push({'@type':'FAQPage','@id':url+'#faq',mainEntity:faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))});
return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}}/>;
}
