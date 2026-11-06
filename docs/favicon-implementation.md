# Ícones da Ótica Gouveia

Conjunto gerado localmente nos formatos atuais documentados pelo RealFaviconGenerator:
https://realfavicongenerator.net/favicon-guides/understanding-favicon-elements

Não depende de serviço externo em tempo de execução. O desenho usa um monograma G branco inspirado no logotipo oficial da Gouveia, sobre o bordô #94182d. O logotipo completo continua preservado no site. O monograma permite leitura nas abas de 16 pixels.

- favicon.svg: vetor mestre sem imagens incorporadas, fontes ou referências externas.
- favicon.ico: formatos 16, 32 e 48 pixels.
- favicon-96x96.png: navegadores e descoberta pelos buscadores.
- apple-touch-icon.png: 180×180, fundo opaco, sem arredondamento prévio.
- web-app-manifest-192x192.png e web-app-manifest-512x512.png: ícones Android/Chromium.
- web-app-manifest-maskable-512x512.png: variante com margem para corte circular.
- site.webmanifest: nome, escopo, abertura na raiz e ícones. Não adiciona service worker, notificações nem funcionamento offline.

O HTML compartilhado declara os caminhos absolutos a partir da raiz, por isso todas as rotas usam os mesmos ícones. A cor de tema no HTML e nos componentes SEO está sincronizada. Imagens de compartilhamento Open Graph existentes foram preservadas.

Verificação local: `node scripts/verify-favicons.mjs`, `npm run build`, TypeScript e lint. Validar novamente o domínio após publicação, incluindo as respostas HTTP dos arquivos. A exibição em resultados de busca depende de atualização do índice do buscador.

As imagens PNG foram exportadas do SVG com Inkscape. O ICO foi empacotado com ImageMagick. A variante maskable usa o mesmo desenho com menor escala. Nenhuma dependência nova foi adicionada à aplicação.
