import { useEffect, useState } from 'react';
export default function ReadingTools() {
  const [size, setSize] = useState(() => {
    try { return Math.min(200, Math.max(100, Number(localStorage.getItem('gouveia-text-size')) || 100)); } catch { return 100; }
  });
  const [message, setMessage] = useState('');
  useEffect(() => {
    document.documentElement.style.fontSize = `${size}%`;
    document.documentElement.dataset.largeText = String(size > 100);
    try { localStorage.setItem('gouveia-text-size', String(size)); } catch { /* Private browsing */ }
  }, [size]);
  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: document.title, url: location.href });
      else { await navigator.clipboard.writeText(location.href); setMessage('Link copiado. Cole onde quiser compartilhar.'); }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) setMessage('Copie o endereço desta página na barra do navegador.');
    }
  };
  return <section className="reading-tools" aria-label="Leitura e compartilhamento">
    <div><h2>Leia com conforto</h2><p>Ajuste o tamanho do texto deste site.</p></div>
    <div className="flex flex-wrap gap-3">
      <button type="button" onClick={() => setSize(s => Math.max(100, s - 25))} disabled={size === 100} aria-label="Diminuir texto">A−</button>
      <button type="button" onClick={() => setSize(s => Math.min(200, s + 25))} disabled={size === 200} aria-label="Ampliar texto">A+</button>
      <button type="button" onClick={() => setSize(100)}>Restaurar texto</button>
      <button type="button" onClick={share}>Compartilhar página</button>
    </div>
    <p role="status">Texto: {size}%. {message}</p>
  </section>;
}
