import { MapPin } from 'lucide-react';
import PageHero from './PageHero';
interface Props{neighborhoodName:string;isMainUnit?:boolean;address?:string;whatsappUrl:string;phoneNumber?:string;}
export default function ModernHeroSection({neighborhoodName,whatsappUrl,phoneNumber='+554131140663'}:Props){return <PageHero BadgeIcon={MapPin} badgeText="UMA LOJA NO UMBARÁ" title="Ótica Gouveia para" highlight={neighborhoodName} description="Traga sua receita, conheça as armações e escolha com calma. Nossa equipe recebe você na Rua Nicola Pellanda, 1286, em Curitiba."><a className="gv-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar no WhatsApp ↗</a><a className="gv-text-link" href={`tel:${phoneNumber}`}>Ligar: (41) 3114-0663</a></PageHero>;}
