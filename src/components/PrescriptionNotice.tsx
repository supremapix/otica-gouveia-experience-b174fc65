import { AlertTriangle, Glasses, Sun, Eye } from 'lucide-react';

const PrescriptionNotice = () => {
  return (
    <section className="py-12 md:py-16 bg-accent/10 border-y border-accent/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <AlertTriangle className="w-4 h-4" />
            INFORMAÇÃO IMPORTANTE
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Como Funciona a Compra de Óculos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Óculos com grau */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-primary/30 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Glasses className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Óculos com Lentes de Grau</h3>
            </div>
            <div className="space-y-3 text-muted-foreground text-[15px] leading-relaxed">
              <p>
                Para óculos com <strong className="text-foreground">lentes de grau</strong> (monofocal, multifocal ou progressiva), 
                é <strong className="text-foreground">obrigatório comparecer presencialmente</strong> à nossa loja no Umbará.
              </p>
              <ul className="space-y-2 ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">1.</span>
                  <span>Traga sua <strong className="text-foreground">receita médica</strong> (emitida por oftalmologista)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">2.</span>
                  <span>Realizamos a <strong className="text-foreground">medição com Visioffice 3</strong> no seu rosto (leva apenas 5 minutos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">3.</span>
                  <span>Após a confecção das lentes, <strong className="text-foreground">entregamos via motoboy</strong> no seu bairro</span>
                </li>
              </ul>
              <p className="text-sm bg-primary/5 rounded-lg p-3 border border-primary/10">
                ⚠️ A medição presencial garante que suas lentes fiquem perfeitamente alinhadas aos seus olhos. Não é possível confeccionar lentes de grau sem essa etapa.
              </p>
            </div>
          </div>

          {/* Óculos de sol / sem grau / lentes de contato */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border-2 border-green-500/30 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <Sun className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Óculos de Sol, Sem Grau e Lentes de Contato</h3>
            </div>
            <div className="space-y-3 text-muted-foreground text-[15px] leading-relaxed">
              <p>
                Para <strong className="text-foreground">óculos de sol sem grau</strong>, <strong className="text-foreground">armações sem lentes graduadas</strong> e 
                <strong className="text-foreground"> lentes de contato</strong>, você <strong className="text-foreground">não precisa vir até a loja</strong>!
              </p>
              <ul className="space-y-2 ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Escolha pelo <strong className="text-foreground">WhatsApp</strong> — enviamos fotos e vídeos dos produtos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Pague por <strong className="text-foreground">PIX, cartão ou transferência</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Receba no conforto da sua casa <strong className="text-foreground">via motoboy</strong></span>
                </li>
              </ul>
              <p className="text-sm bg-green-500/5 rounded-lg p-3 border border-green-500/10">
                🏍️ Compras acima de R$ 250 com entrega inclusa em Curitiba e região metropolitana.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          📍 Nossa loja: <strong className="text-foreground">R. Nicola Pellanda, 1286 — Umbará, Curitiba</strong> | 
          Seg a Sex: 9h–18h | Sáb: 9h–13h
        </p>
      </div>
    </section>
  );
};

export default PrescriptionNotice;
