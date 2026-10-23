import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export function useFooterVisible() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const update = () => {
      const footer = document.querySelector('footer');
      setVisible(Boolean(footer && footer.getBoundingClientRect().top < innerHeight));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [pathname]);
  return visible;
}
