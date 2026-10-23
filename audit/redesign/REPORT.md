# Reformula��o visual - �tica Gouveia

## Dire��o e escopo

Identidade editorial em vinho, branco quente e carv�o, com a logo original e fotografia real do cat�logo. Novo hero prioriza produto, endere�o e acesso ao cat�logo. Navega��o simplificada, t�tulos com hierarquia, cart�es com enquadramento uniforme e rodap� organizado para leitura e contato. P�ginas internas e regionais compartilham a nova apresenta��o. Os antigos slides permanecem dispon�veis em se��o expans�vel na home.

Marca, dom�nio, endere�o e contatos permanecem os confirmados no relat�rio anterior: �tica Gouveia; www.gouveiacuritiba.com.br; Rua Nicola Pellanda, 1286, Umbar�, Curitiba; telefone (41) 3114-0663; WhatsApp (41) 99161-0663.

## Preserva��o

- 113 declara��es de rota, incluindo wildcard, e 112 URLs expl�citas preservadas.
- 79 arquivos originais de imagem com os mesmos hashes SHA-256.
- Mesmos 15 produtos na vitrine; arquivo do cat�logo de 18 produtos inalterado.
- Contatos, integra��es, conte�do regional e orienta��es de sa�de preservados nesta reformula��o.
- Cr�dito Suprema �nico: logo oficial de 220 px, sem altera��o da imagem, vinculada a https://supremasite.com.br.
- Amplia��o at� 200%, compartilhamento, WhatsApp, galeria e Voltar ao topo mantidos.

## Valida��o local

- Build Vite e TypeScript passaram.
- ESLint: zero erros, 12 avisos em componentes preexistentes; ver lint.txt.
- 112 rotas renderizadas, t�tulos/canonicals presentes e JSON-LD sintaticamente v�lido; nenhum erro JavaScript. Ver browser-report.json.
- 404 renderizada com noindex; links est�ticos internos sem destino desconhecido.
- Home, cat�logo, Umbar� e FAQ sem overflow horizontal em 320, 390 e 1440 px.
- Texto em 200% sem overflow em 320 e 390 px; menu com foco contido, Escape e devolu��o do foco.
- Produto e galeria acionados pelo teclado; Voltar ao topo �nico, vis�vel ap�s rolagem, retorna a zero com reduced-motion.
- Compartilhamento testado com clipboard simulado; nenhum envio a WhatsApp ou formul�rio externo.
- Logo Suprema carregada e medida em 220 px. Fotografias antes/depois dispon�veis no workspace de revis�o.

Persistem avisos de bundle JavaScript acima de 500 kB, Browserslist antigo e duas classes Tailwind amb�guas. N�o impedem a compila��o. A inspe��o de produ��o depende de o dom�nio permitir a leitura, sem contornar prote��o Vercel.
