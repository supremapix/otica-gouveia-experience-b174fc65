import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';

const promotionMessage = encodeURIComponent(
  'Olá! Vi a Black November no site da Ótica Gouveia e gostaria de conhecer os modelos selecionados com descontos de até 70%.'
);

export default function BlackNovemberPromotion() {
  return (
    <section
      id="black-november"
      className="gv-black-november"
      aria-labelledby="black-november-title"
    >
      <div className="gv-promotion-inner">
        <div className="gv-promotion-copy">
          <p className="gv-promotion-eyebrow">Ótica Gouveia · Umbará, Curitiba</p>
          <h2 id="black-november-title">Black<br />November</h2>
          <p className="gv-promotion-discount">
            <span>Descontos de</span>
            <strong><span>até</span> 70<small>%</small></strong>
          </p>
          <p className="gv-promotion-condition">Em modelos selecionados.</p>
          <p className="gv-promotion-invite">Venha conferir!</p>
          <div className="gv-promotion-actions">
            <a
              className="gv-promotion-button"
              href={`https://wa.me/5541991610663?text=${promotionMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={21} aria-hidden="true" />
              <span>Conferir no WhatsApp</span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a
              className="gv-promotion-location"
              href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={20} aria-hidden="true" /> Como chegar
            </a>
          </div>
          <p className="gv-promotion-note">Consulte os modelos participantes e as condições com a equipe.</p>
        </div>
        <figure className="gv-promotion-art">
          <img
            src="/promocoes/black-november-2026.jpeg"
            alt="Arte da Black November da Ótica Gouveia: descontos de até 70% em modelos selecionados. Venha conferir!"
            width="1080"
            height="1350"
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
