import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import Page from './pages/ConsertoOculosSitioCercado';
export function render() { const context: { helmet?: HelmetServerState } = {}; const body = renderToString(<HelmetProvider context={context}><StaticRouter location='/conserto-oculos-sitio-cercado'><Page /></StaticRouter></HelmetProvider>); const h = context.helmet; if (!h) throw new Error('Helmet SSR missing'); return { body, head: h.title.toString() + h.meta.toString() + h.link.toString() + h.script.toString() }; }
