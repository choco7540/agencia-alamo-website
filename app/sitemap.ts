import {origin} from '@/lib/config';
import {services,articles} from '@/lib/content';
export default function sitemap(){return ['',...services.map(s=>'/'+s.slug),'/cotizar-seguro-auto','/en','/blog',...articles.map(a=>'/blog/'+a.slug),'/privacidad','/accesibilidad'].map(p=>({url:origin+p,...(['','/en'].includes(p)?{alternates:{languages:{es:origin+'/',en:origin+'/en'}}}:{}),changeFrequency:'monthly' as const,priority:p===''?1:p==='/cotizar-seguro-auto'?.9:.7}))}
