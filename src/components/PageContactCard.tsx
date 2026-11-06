import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getPageContactContent } from '../data/pageContactContent';
import '../page-contact.css';

export default function PageContactCard() {
  const { pathname } = useLocation();
  const content = getPageContactContent(pathname);
  const whatsappUrl = `https://wa.me/5541991610663?text=${encodeURIComponent(content.message)}`;

  return (
    <section className="gv-page-contact" aria-labelledby="gv-page-contact-title">
      <div className="gv-page-contact-inner">
        <img
          className="gv-page-contact-image"
          src="/images/otica-gouveia-contato-250.webp"
          alt="Ótica Gouveia: óculos e lentes no Umbará, Curitiba. WhatsApp (41) 99161-0663."
          width="250"
          height="250"
          loading="lazy"
          decoding="async"
        />
        <div className="gv-page-contact-copy">
          <p className="gv-page-contact-eyebrow">Ótica Gouveia · loja no Umbará</p>
          <h2 id="gv-page-contact-title">{content.title}</h2>
          <p className="gv-page-contact-description">{content.description}</p>
          <address className="gv-page-contact-details">
            <a href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9" target="_blank" rel="noopener noreferrer">
              <MapPin size={20} aria-hidden="true" />
              <span>Rua Nicola Pellanda, 1286<br />Umbará, Curitiba/PR</span>
            </a>
            <a href="tel:+554131140663">
              <Phone size={19} aria-hidden="true" />
              <span>Telefone: (41) 3114-0663</span>
            </a>
          </address>
          <a className="gv-page-contact-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span>{content.action}</span>
            <ArrowUpRight size={21} aria-hidden="true" />
          </a>
          <p className="gv-page-contact-whatsapp">WhatsApp: (41) 99161-0663</p>
        </div>
      </div>
    </section>
  );
}
