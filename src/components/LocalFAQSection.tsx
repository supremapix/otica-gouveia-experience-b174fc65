import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
export default function LocalFAQSection({ neighborhoodName }: { neighborhoodName: string }) {
  const faqs = [
    ['Existe uma filial na minha região?', `Esta página orienta moradores de ${neighborhoodName}. O endereço da loja é Rua Nicola Pellanda, 1286, Umbará, Curitiba. Não indica uma filial nesta região.`],
    ['O que preciso para comprar óculos de grau?', 'Traga a receita e converse com a equipe sobre as opções de armações e lentes. Confirme as etapas presenciais antes de se deslocar.'],
    ['As medições na ótica substituem o exame de vista?', 'Não. As medições usadas na montagem dos óculos não substituem a avaliação da saúde ocular. Consulte um oftalmologista para avaliação e prescrição.'],
    ['Como confirmar preço, disponibilidade e retirada?', 'Fale pelo WhatsApp (41) 99161-0663 ou telefone (41) 3114-0663. A equipe informa disponibilidade, condições e prazo para o seu pedido.']
  ];
  return <section className="visit-guide"><h2 className="text-2xl font-bold mb-6">Antes de visitar a loja</h2><Accordion type="single" collapsible>{faqs.map(([q,a],i)=><AccordionItem value={String(i)} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></section>;
}
