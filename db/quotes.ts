import {env} from 'cloudflare:workers';
export function quoteDatabase(){if(!env.DB)throw Error('Database unavailable');return env.DB;}
