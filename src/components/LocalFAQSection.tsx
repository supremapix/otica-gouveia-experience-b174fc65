import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

interface LocalFAQSectionProps {
  neighborhoodName: string;
}

const LocalFAQSection = ({ neighborhoodName }: LocalFAQSectionProps) => {
  const faqs = [
    {
      question: `Vocês atendem plano de saúde no ${neighborhoodName}?`,
      answer: `Sim! A Ótica Gouveia atende diversos planos de saúde para moradores do ${neighborhoodName} e região. Entre em contato pelo WhatsApp para verificar se seu plano está na lista de convênios aceitos.`,
    },
    {
      question: `Qual o prazo de entrega para o ${neighborhoodName}?`,
      answer: `Para o ${neighborhoodName}, o prazo médio de entrega dos óculos prontos é de 5 a 7 dias úteis. Para lentes mais complexas (progressivas, multifocais), pode levar de 7 a 10 dias. A entrega é gratuita para compras acima de R$250.`,
    },
    {
      question: `Fazem exame de vista para crianças?`,
      answer: `Sim, realizamos exames de vista para todas as idades, incluindo crianças. Nossos profissionais são qualificados para atender pacientes infantis com paciência e cuidado especial.`,
    },
    {
      question: `Aceitam cartão e PIX?`,
      answer: `Aceitamos todas as formas de pagamento: cartões de crédito (parcelamos em até 12x sem juros), débito, PIX e dinheiro. Oferecemos as melhores condições para você.`,
    },
    {
      question: `Como funciona o exame de vista gratuito?`,
      answer: `O exame de vista é realizado por profissionais qualificados com equipamentos modernos. É totalmente gratuito e sem compromisso. Basta agendar pelo WhatsApp ou comparecer à nossa loja no Pinheirinho.`,
    },
    {
      question: `Vocês trabalham com lentes progressivas?`,
      answer: `Sim! Trabalhamos com todos os tipos de lentes: progressivas, bifocais, multifocais, transitions, antirreflexo, filtro de luz azul e muito mais. Temos opções para todos os bolsos.`,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Dúvidas Frequentes
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Sobre o{' '}
              <span className="text-primary">{neighborhoodName}</span>
            </h2>
            <p className="text-muted-foreground">
              Tire suas principais dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LocalFAQSection;
