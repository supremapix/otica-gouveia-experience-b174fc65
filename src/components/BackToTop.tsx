import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-28 right-6 z-[9997] w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        backgroundColor: 'hsl(221, 100%, 19%)',
        color: 'hsl(48, 100%, 50%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      <ChevronUp className="w-6 h-6" strokeWidth={3} />
    </button>
  );
};

export default BackToTop;
