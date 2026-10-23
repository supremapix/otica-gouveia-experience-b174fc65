import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
interface PageHeroProps{BadgeIcon:LucideIcon;badgeText:string;title:ReactNode;highlight?:string;description:string;children?:ReactNode;}
export default function PageHero({BadgeIcon,badgeText,title,highlight,description,children}:PageHeroProps){return <section className="gv-page-hero"><div><span className="gv-eyebrow"><BadgeIcon size={18}/>{badgeText}</span><h1>{title} {highlight&&<em>{highlight}</em>}</h1><p>{description}</p>{children&&<div className="gv-page-actions">{children}</div>}</div><figure><img src="/lovable-uploads/otica-gouveia-expositor.webp" alt="Arma��es expostas na loja �tica Gouveia" width="382" height="510"/><figcaption>Gouveia � escolhas para o seu dia</figcaption></figure></section>;}
