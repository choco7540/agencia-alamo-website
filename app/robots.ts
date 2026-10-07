import {origin} from '@/lib/config';
export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:['/api/','/signin-with-chatgpt','/signout-with-chatgpt','/callback']},sitemap:origin+'/sitemap.xml'}}
