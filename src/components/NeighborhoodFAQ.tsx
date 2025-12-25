import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface NeighborhoodFAQProps {
  neighborhoodName: string;
}

const NeighborhoodFAQ: React.FC<NeighborhoodFAQProps> = ({ neighborhoodName }) => {
  const faqs: FAQItem[] = [
    {
      question: `Qual o prazo de entrega no ${neighborhoodName}?`,
      answer: `Entregamos em 24 a 48 horas úteis após a finalização dos seus óculos. O tempo de confecção das lentes varia de 3 a 7 dias úteis dependendo do tipo de lente escolhida. Para o ${neighborhoodName}, a entrega é gratuita em compras acima de R$ 250,00.`
    },
    {
      question: 'Posso pagar na entrega?',
      answer: 'Sim! Aceitamos pagamento na entrega em dinheiro, PIX ou cartão de crédito/débito através de maquininha móvel. Também parcelamos em até 12x sem juros no cartão de crédito.'
    },
    {
      question: 'E se os óculos não ficarem bons?',
      answer: 'Oferecemos ajustes gratuitos. Se houver problema com o grau das lentes (erro de laboratório), fazemos a troca sem custo. Garantimos sua satisfação total com 30 dias de garantia de adaptação para lentes multifocais.'
    },
    {
      question: `Atendem outros bairros além do ${neighborhoodName}?`,
      answer: 'Sim! Fazemos entrega grátis* em diversos bairros de Curitiba e região metropolitana, incluindo: Pinheirinho, Umbará, CIC, Sítio Cercado, Tatuquara, Boqueirão, Xaxim, Hauer, Capão Raso, e cidades como São José dos Pinhais, Fazenda Rio Grande e Araucária. *Compras acima de R$ 250,00.'
    },
    {
      question: 'Como agendar um exame de vista?',
      answer: 'Você pode agendar seu exame de vista gratuito pelo WhatsApp (41) 99161-0663 ou pelo telefone fixo (41) 3114-0663. Atendemos de segunda a sexta das 8h às 18h e sábados das 8h às 16h. O exame é rápido, com duração média de 15 a 20 minutos.'
    },
    {
      question: 'Vocês trabalham com convênios?',
      answer: 'Sim, trabalhamos com diversos convênios empresariais e sindicatos. Entre em contato conosco para verificar se o seu convênio é aceito e quais são as condições especiais disponíveis para você.'
    },
    {
      question: 'Qual a garantia dos produtos?',
      answer: 'Oferecemos garantia de 12 meses para armações contra defeitos de fabricação e 6 meses para lentes. Lentes multifocais têm garantia de adaptação de 30 dias. Além disso, oferecemos ajustes e pequenos reparos gratuitos durante toda a vida útil do produto.'
    },
    {
      question: 'Posso levar minha própria armação para trocar as lentes?',
      answer: 'Sim! Trocamos as lentes da sua armação atual. Basta trazer o óculos para avaliarmos as condições da armação e verificar a compatibilidade com as novas lentes. Oferecemos as mesmas opções de lentes e tratamentos disponíveis para armações novas.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes - Entrega no {neighborhoodName}
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços e entregas para o {neighborhoodName}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale conosco pelo WhatsApp!
          </p>
          <a
            href="https://wa.me/554199161663?text=Olá! Tenho uma dúvida sobre os serviços da Ótica Gouveia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodFAQ;
