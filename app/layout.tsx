import type { Metadata } from 'next';
import './globals.css';
import {Analytics} from '@/components/analytics';
import {integrations,origin} from '@/lib/config';
import { Header, Footer, SiteBehavior } from '@/components/alamo';
export const metadata: Metadata = {title:{default:'Seguros de Auto en Español | Agencia Alamo, Annandale VA',template:'%s | Agencia Alamo'},description:'Cotiza tu seguro de auto en español con Agencia Alamo. Atención bilingüe en Annandale para Virginia, Maryland, DC y Delaware. Llama al 703-256-1720.',metadataBase:new URL(origin),verification:{google:integrations.searchConsole||undefined},robots:{index:true,follow:true},openGraph:{siteName:'Agencia Alamo',locale:'es_US',type:'website'},icons:{icon:'/logo.webp'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><a className="skip" href="#contenido">Ir al contenido</a><Header/>{children}<Footer/><SiteBehavior/><Analytics/></body></html>}
