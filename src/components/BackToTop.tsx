import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [inFooter, setInFooter] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > 400);
      const footer = document.querySelector('footer');
      setInFooter(Boolean(footer && footer.getBoundingClientRect().top < window.innerHeight));
    };
    update();
    window.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [pathname]);
  return <button type="button" hidden={!visible} onClick={() => {
    window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    const heading = document.querySelector<HTMLElement>('h1');
    if(heading) { heading.tabIndex = -1; heading.focus({preventScroll:true}); }
  }} aria-label="Voltar ao topo" className="back-to-top" style={{position:inFooter?'absolute':'fixed'}}><ChevronUp aria-hidden="true" size={28}/></button>;
}
