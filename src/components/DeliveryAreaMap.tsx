import React from 'react';
import { MapPin, Check, Truck } from 'lucide-react';

interface DeliveryAreaMapProps {
  neighborhoodName: string;
}

const DeliveryAreaMap: React.FC<DeliveryAreaMapProps> = ({ neighborhoodName }) => {
  const deliveryAreas = [
    { name: 'CIC', highlight: neighborhoodName === 'CIC' },
    { name: 'Umbará', highlight: neighborhoodName === 'Umbará' },
    { name: 'Pinheirinho', highlight: neighborhoodName === 'Pinheirinho' },
    { name: 'Tatuquara', highlight: neighborhoodName === 'Tatuquara' },
    { name: 'Boqueirão', highlight: neighborhoodName === 'Boqueirão' },
    { name: 'Xaxim', highlight: neighborhoodName === 'Xaxim' },
    { name: 'Hauer', highlight: neighborhoodName === 'Hauer' },
    { name: 'Cajuru', highlight: neighborhoodName === 'Cajuru' },
    { name: 'Capão Raso', highlight: neighborhoodName === 'Capão Raso' },
    { name: 'Sítio Cercado', highlight: neighborhoodName === 'Sítio Cercado' },
    { name: 'Ganchinho', highlight: neighborhoodName === 'Ganchinho' },
    { name: 'Augusta', highlight: neighborhoodName === 'Augusta' },
    { name: 'Fazendinha', highlight: neighborhoodName === 'Fazendinha' },
    { name: 'São José dos Pinhais', highlight: neighborhoodName === 'São José dos Pinhais' },
    { name: 'Fazenda Rio Grande', highlight: neighborhoodName === 'Fazenda Rio Grande' },
    { name: 'Araucária', highlight: neighborhoodName === 'Araucária' },
  ];

  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Truck className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Área de Entrega no {neighborhoodName}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entrega grátis* para todo o bairro {neighborhoodName} em compras acima de R$ 250,00
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map Embed */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.548766935673!2d-49.32!3d-25.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf06f0d87ad5d%3A0x7e2c8f8b8c8c8c8c!2sPinheirinho%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de entrega para ${neighborhoodName}`}
            />
            <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Ótica Gouveia</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Rua Nicola Pellanda, 1286 - Pinheirinho
              </p>
            </div>
          </div>

          {/* Delivery Areas List */}
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-green-500" />
              Áreas com Entrega Grátis*
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {deliveryAreas.map((area, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                    area.highlight
                      ? 'bg-primary/10 border-2 border-primary'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  <Check className={`w-4 h-4 ${area.highlight ? 'text-primary' : 'text-green-500'}`} />
                  <span className={`text-sm ${area.highlight ? 'font-bold text-primary' : 'text-foreground'}`}>
                    {area.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              *Compras acima de R$ 250,00. Consulte condições para outras áreas.
            </p>

            <a
              href="https://wa.me/554199161663?text=Olá! Gostaria de saber se entregam no meu endereço."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Verificar Meu Endereço
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAreaMap;
