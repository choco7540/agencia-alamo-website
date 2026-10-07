import {pageMetadata} from '@/lib/seo';
import type {Metadata} from 'next';
import {ArrowUpRight,BadgeCheck,Car,Check,FileCheck,HardHat,HeartHandshake,House,KeyRound,Languages,MapPin,MessageCircle,Phone,Search,ShieldCheck,Star,Users} from 'lucide-react';
import {FAQ,QuoteForm} from '@/components/alamo';
import {agency,articles,faqs} from '@/lib/content';
import {SEO} from '@/components/seo';
import {origin} from '@/lib/config';

export const metadata:Metadata=pageMetadata({title:'Seguros en Español en Annandale, VA',description:'Cotiza seguro de auto, casa y negocio con Agencia Alamo en Annandale. Atención bilingüe para Virginia, Maryland, DC y Delaware. Llama al 703-256-1720.',path:'/'});

const products=[
  {icon:Car,title:'Seguro de auto',text:'Coberturas para tu vehículo, distintos historiales de manejo y atención clara en español.',url:'/seguro-auto-annandale',image:'/seguro-auto.webp',alt:'Conductor latino junto a su vehículo asegurado'},
  {icon:House,title:'Casa y condo',text:'Protege tu vivienda, tus pertenencias y la tranquilidad de quienes viven contigo.',url:'/seguro-casa-condo-renters',image:'/seguro-casa.webp',alt:'Casa familiar protegida por un seguro'},
  {icon:HardHat,title:'Seguro comercial',text:'Opciones para contratistas, pequeños negocios, vehículos comerciales y responsabilidad civil.',url:'/seguro-comercial-contratistas',image:'/seguro-negocio.webp',alt:'Contratistas trabajando en un proyecto de construcción'},
  {icon:KeyRound,title:'Renters',text:'Protección para muebles, ropa, electrónicos y otras pertenencias en una vivienda rentada.',url:'/seguro-casa-condo-renters',image:'/seguro-casa.webp',alt:'Vivienda que puede protegerse con seguro de renters'},
  {icon:FileCheck,title:'SR-22 y FR-44',text:'Te explicamos el proceso y te ayudamos a revisar opciones según tu situación en Virginia.',url:'/seguro-sr22-fr44',image:'/seguro-auto.webp',alt:'Conductor revisando opciones de seguro de auto'},
  {icon:ShieldCheck,title:'Licencia internacional',text:'Orientación para conductores con licencia internacional que buscan asegurar un auto.',url:'/seguro-licencia-internacional',image:'/seguro-auto.webp',alt:'Conductor con licencia internacional dentro de su automóvil'}
];

export default function Home(){
  return <main id="contenido" className="home-v4">
    <SEO path="/" faq={faqs}/>

    <section className="conversion-hero" aria-labelledby="hero-title">
      <div className="conversion-hero-photo" aria-hidden="true">
        <img src="/familia-alamo.webp" alt="" width="1600" height="1050" fetchPriority="high"/>
      </div>
      <div className="conversion-hero-shade" aria-hidden="true"/>
      <div className="wrap conversion-hero-grid">
        <div className="conversion-copy">
          <div className="hero-kicker"><MapPin/> Agencia de seguros en Annandale, Virginia</div>
          <h1 id="hero-title">Protección que<br/><span>sí entiendes.</span></h1>
          <p className="hero-lead">Seguro de auto a precios competitivos, explicado claramente y en español.</p>
          <div className="hero-trust">
            <span><BadgeCheck/> 15+ años de experiencia</span>
            <span><Languages/> Atención 100% bilingüe</span>
            <span><Search/> Comparamos 10+ compañías</span>
          </div>
          <div className="actions">
            <a className="btn hero-yellow" href="/#cotizar">Obtén una cotización <ArrowUpRight/></a>
            <a className="btn hero-message" href={agency.messenger} target="_blank" rel="noopener noreferrer"><MessageCircle/> Enviar mensaje</a>
          </div>
        </div>
        <div className="hero-quote-card" id="cotizar"><QuoteForm/></div>
      </div>
    </section>

    <section className="proof-strip" aria-label="Beneficios de Agencia Alamo">
      <div className="wrap proof-grid">
        <div><strong>15+</strong><span>Años sirviendo a nuestra comunidad</span></div>
        <div><strong>10+</strong><span>Compañías para comparar opciones</span></div>
        <div><strong>4</strong><span>VA • MD • DC • DE</span></div>
        <a href={agency.tel}><Phone/><span>Llama hoy<br/><b>703-256-1720</b></span></a>
      </div>
    </section>

    <section id="seguros" className="insurance-reference-section" aria-labelledby="insurance-reference-title">
      <h2 id="insurance-reference-title" className="sr-only">Tipos de seguros que ofrecemos</h2>
      <div className="insurance-reference">
        <img className="insurance-reference-image" src="/seguros-infografia.png" alt="Tipos de seguros que ofrecemos: Auto, Casa, Comercial, Trabajo, Salud y Renters, alrededor del logo de Alamo Seguros." width="1254" height="1254" loading="lazy"/>
        <div className="insurance-reference-logo reveal" aria-hidden="true"><div className="insurance-reference-logo-art"/></div>
        <a className="insurance-hotspot insurance-auto" href="/seguro-auto-annandale" aria-label="Cotizar seguro de auto"/>
        <a className="insurance-hotspot insurance-casa" href="/seguro-casa-condo-renters" aria-label="Cotizar seguro de casa"/>
        <a className="insurance-hotspot insurance-comercial" href="/seguro-comercial-contratistas" aria-label="Cotizar seguro comercial"/>
        <a className="insurance-hotspot insurance-trabajo" href="/seguro-comercial-contratistas" aria-label="Consultar compensación laboral"/>
        <a className="insurance-hotspot insurance-salud" href="/#cotizar" aria-label="Consultar opciones de seguro de salud"/>
        <a className="insurance-hotspot insurance-renters" href="/seguro-casa-condo-renters" aria-label="Cotizar seguro de renters"/>
      </div>
    </section>

    <nav className="wrap insurance-seo-links" aria-label="Opciones de seguros"><h2>Encuentra el seguro que necesitas</h2><div>{[
['Cotiza tu seguro de auto','/cotizar-seguro-auto'],['Auto en Annandale','/seguro-auto-annandale'],['Seguro SR-22 y FR-44','/seguro-sr22-fr44'],['Licencia internacional','/seguro-licencia-internacional'],['Auto en Virginia','/seguro-auto-virginia'],['Auto en Maryland','/seguro-auto-maryland'],['Auto en Washington DC','/seguro-auto-washington-dc'],['Casa, condo y renters','/seguro-casa-condo-renters'],['Seguros para contratistas','/seguro-comercial-contratistas']
].map(([label,href])=><a href={href} key={href}>{label} <ArrowUpRight size={16}/></a>)}</div></nav>

    <section id="nosotros" className="section value-section">
      <div className="wrap">
        <div className="center-heading reveal">
          <div className="eyebrow">¿POR QUÉ ESCOGER AGENCIA ALAMO?</div>
          <h2>Experiencia local. Atención personal.</h2>
          <p>Te ayudamos a entender tus opciones antes de tomar una decisión.</p>
        </div>
        <div className="value-grid">
          <article className="value-card reveal"><span><Users/></span><h3>Un equipo que habla español</h3><p>Haz tus preguntas con confianza. Nuestro equipo bilingüe te explica cada paso de forma sencilla.</p></article>
          <article className="value-card reveal"><span><HeartHandshake/></span><h3>Atención detallada</h3><p>Escuchamos tu situación, revisamos tus necesidades y te acompañamos durante la vigencia de tu póliza.</p></article>
          <article className="value-card reveal"><span><Search/></span><h3>Comparamos 10+ compañías</h3><p>Como agencia independiente, buscamos opciones entre diferentes aseguradoras para encontrar una buena combinación de precio y protección.</p></article>
        </div>
      </div>
    </section>

    <section id="opiniones" className="section reviews-section">
      <div className="wrap">
      <div className="center-heading reveal"><div className="eyebrow">RESEÑAS DE GOOGLE</div><h2>Nuestros clientes hablan por nosotros</h2><p>La confianza se construye con atención constante, respuestas claras y un equipo dispuesto a ayudar.</p></div>
      <div className="google-reviews">
        {[
          ['BS','Ben S.','Great service, efficient, and very professional!'],
          ['RA','Rimy A.','I highly recommend Agencia Alamo.'],
          ['JB','Juan B.','Complacido con el servicio y la amabilidad del equipo.']
        ].map(([initials,name,quote])=><article className="google-review reveal" key={name}><div className="review-head"><span className="review-avatar">{initials}</span><span><b>{name}</b><small><BadgeCheck/> Reseña de Google</small></span></div><div className="stars" aria-label="5 de 5 estrellas">★★★★★</div><blockquote>“{quote}”</blockquote></article>)}
      </div>
      <div className="review-link"><a className="btn blue" href={agency.map} target="_blank" rel="noopener noreferrer">Ver ubicación y reseñas en Google <ArrowUpRight/></a></div>
      </div>
    </section>

    <section className="section service-area-band">
      <div className="wrap">
        <div className="center-heading reveal"><div className="eyebrow">ÁREAS QUE SERVIMOS</div><h2>Seguros en español cerca de ti</h2></div>
        <div className="areas">
          {[
            ['Virginia','Seguro de auto en Annandale y todo Virginia','/seguro-auto-virginia'],
            ['Maryland','Atención bilingüe para conductores en Maryland','/seguro-auto-maryland'],
            ['Washington DC','Cotizaciones para conductores del Distrito','/seguro-auto-washington-dc'],
            ['Delaware','Consulta opciones disponibles con nuestro equipo','/#cotizar']
          ].map(([t,s,u])=><a href={u} className="area" key={t}><span>{t}<small>{s}</small></span><ArrowUpRight/></a>)}
        </div>
      </div>
    </section>

    <FAQ/>

    <section className="cta-v4 reveal">
      <div className="wrap"><div><small>UN AGENTE BILINGÜE ESTÁ LISTO PARA AYUDARTE</small><h2>¿Buscas seguro de auto en español?</h2></div><div className="actions"><a className="btn white" href={agency.tel}>Llamar 703-256-1720</a><a className="btn" href="/#cotizar">Obtener cotización</a></div></div>
    </section>

    <section className="section wrap">
      <div className="section-head"><div><div className="eyebrow">CONSEJOS DE SEGUROS</div><h2>Información para tomar mejores decisiones</h2></div><a href="/blog" className="textlink">Visita el blog <ArrowUpRight/></a></div>
      <div className="blog-grid">{articles.map(a=><a className="blog-card" href={'/blog/'+a.slug} key={a.slug}><small>{a.category}</small><h3>{a.title}</h3><p>{a.summary}</p><span className="textlink">Leer artículo <ArrowUpRight/></span></a>)}</div>
    </section>
  </main>
}
