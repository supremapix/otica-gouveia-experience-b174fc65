import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { useDialogFocus } from '../hooks/useDialogFocus';
const links=[['In�cio','/'],['Sobre a Gouveia','/sobre'],['Produtos','/produtos'],['Servi�os','/servicos'],['Contato','/contato'],['D�vidas','/faq']];
export default function Navbar(){
 const [open,setOpen]=useState(false);const close=useCallback(()=>setOpen(false),[]);const {pathname}=useLocation();
 useDialogFocus(open,'#mobile-menu',close);
 useEffect(()=>{setOpen(false);},[pathname]);
 useEffect(()=>{if(open)document.body.style.overflow='hidden';return()=>{document.body.style.overflow='';};},[open]);
 return <header className="gv-header">
 <a className="gv-skip" href="#main-content" onClick={e=>{const el=document.querySelector<HTMLElement>('main, h1');if(el){e.preventDefault();el.tabIndex=-1;el.focus();el.scrollIntoView();}}}>Ir para o conte�do</a>
 <div className="gv-nav">
 <Link to="/" className="gv-brand" aria-label="�tica Gouveia - in�cio"><img src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.webp" alt="�tica Gouveia" width="150" height="52"/></Link>
 <nav className="gv-desktop-links" aria-label="Navega��o principal">{links.map(([label,path])=><Link key={path} to={path} aria-current={pathname===path?'page':undefined}>{label}</Link>)}</nav>
 <a className="gv-phone" href="tel:+554131140663" aria-label="Ligar para (41) 3114-0663"><Phone size={18}/><span>(41) 3114-0663</span></a>
 <button className="gv-menu-toggle" onClick={()=>setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menu de navega��o"><Menu size={24}/><span>Menu</span></button>
 </div>
 <div id="mobile-menu" className="gv-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navega��o" hidden={!open}>
 <div className="gv-menu-heading"><span>�tica Gouveia</span><button onClick={close} aria-label="Fechar menu"><X size={24}/> Fechar</button></div>
 <nav aria-label="Menu mobile">{links.map(([label,path],i)=><Link key={path} onClick={close} to={path}><small>0{i+1}</small>{label}<ArrowUpRight size={22}/></Link>)}</nav>
 <div className="gv-menu-contact"><p>Rua Nicola Pellanda, 1286<br/>Umbar�, Curitiba</p><a href="tel:+554131140663">Ligar: (41) 3114-0663</a><a href="https://wa.me/5541991610663" target="_blank" rel="noopener noreferrer">Conversar no WhatsApp ?</a></div>
 </div></header>;
}
