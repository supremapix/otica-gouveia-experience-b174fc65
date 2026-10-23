# Auditoria de melhoria — Ótica Gouveia

## Identidade verificada antes das alterações

- Marca: Ótica Gouveia.
- Domínio: https://www.gouveiacuritiba.com.br/.
- Loja: Rua Nicola Pellanda, 1286, Umbará, Curitiba/PR.
- Telefone: (41) 3114-0663; WhatsApp: (41) 99161-0663.
- Fontes: código original de Contact/Footer/schema e site público da própria empresa, consultado em 23/10/2026. Contato institucional não foi enviado.
- Instruções lidas: README.md, DEPLOY-CONFIG.md e README-SEO-SYSTEM.md. Não havia AGENTS.md no repositório.

## Entrega

- Leitura ampliável de100% a200%, persistência local, compartilhamento nativo ou cópia do link.
- Menu mobile com estado acessível, fechamento Escape, foco inicial, contenção de Tab e devolução de foco.
- Um único botão Voltar ao topo centralizado em App, incluindo404, alvo56px, teclado e reduced-motion; reserva no rodapé e ações flutuantes ocultadas quando o rodapé entra na tela.
- Crédito Suprema único, logo oficial sem alteração,220px e link supremasite.com.br. Identidade vermelha da ótica preservada.
- Fotos e catálogo originais preservados; object-contain nos produtos, dimensões e decodificação assíncrona. Modais acionáveis pelo teclado e fecháveis com Escape.
- Guia de visita em todas as páginas que usam NeighborhoodPage, com origem no bairro/cidade, destino único e esclarecimento de que regiões não são filiais. Foco editorial no entorno de aproximadamente10km, sem afirmar distância de bairros inteiros nem prazos de trajeto.
- Diretório pesquisável de regiões substitui carrossel contínuo com alegações de filiais e frete. Todas as URLs e regiões existentes preservadas.
- WhatsApp incompleto e telefone fictício de URL antiga corrigidos. Retirados contador artificial, depoimentos sem fonte e avaliações quantitativas sem evidência.
- FAQ e artigo comparativo revisados para informação geral; sem prescrição, promessas de resultado, validade universal de receita ou orientação individual. Fonte oficial: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doencas-oculares.
- Schema de loja único; removidos coordenadas não verificadas, oferta com preço vazio e estoque garantido. OG local e ícone com imagem original da marca.404 client-side com noindex. Rewrites explícitos para rotas existentes na Vercel; desconhecidas deixam de cair no rewrite200. Regras Netlify preservam os redirecionamentos anteriores.

## Evidências

- inventory-before.json, inventory-after.json e preservation-report.json:113 declarações de rota(incluindo wildcard),112 rotas explícitas,79 imagens com SHA256 preservado,15 produtos home e18 catálogo inalterados.
- browser-report.json:112 URLs carregadas, JSON-LD parseável, canonical presente;12 verificações de viewport(320/390/1440 × home/produtos/Umbará/FAQ), sem overflow horizontal;404 e noindex; nenhum pageerror.
- functions-report.json: teclado nos produtos e galeria, Escape, foco do menu/restauração, topo com uma instância e scroll0, cópia simulada sem envio, preferência persistida, logo Suprema carregada e única.
- reflow-report.json e capturas locais: revisão adicional a200% em320px. Cabeçalho mantém botão do menu. Carrossel regional com rótulos truncados foi substituído por diretório após a inspeção.
- Build Vite e TypeScript app passaram. Lint sem erros, com avisos preexistentes de hooks/fast-refresh. Dependências de produção e lockfile preservados.
- Avisos remanescentes: bundle JS acima de500kB, base Browserslist antiga e vulnerabilidades indicadas pelo npm audit do lockfile existente. Não foram feitos upgrades amplos de dependências nesta entrega.

## Limites da verificação

- Testes de WhatsApp e compartilhamento não enviaram mensagens externas. Estoque, condições comerciais e serviços clínicos não foram inventados nem confirmados por contato externo.
- Não há prova independente de todas as alegações históricas em componentes antigos não reescritos. O guia regional melhora a utilidade de planejamento, mas não representa levantamento geográfico individual de cada região.
- CI/deploy e conteúdo efetivo em produção devem ser confirmados pelo status do commit e inspeção do domínio após envio. Status de publicação é registrado na resposta de entrega, não presumido neste documento.
- Nenhuma mudança de DNS, credenciais, permissões ou plano/custos.
