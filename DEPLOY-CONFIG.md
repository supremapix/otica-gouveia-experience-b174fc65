# Configuração de Deploy - Ótica Gouveia

## Arquivos de Configuração por Plataforma

### 📦 Netlify (ATUAL)
**Arquivos utilizados:**
- `netlify.toml` - Configuração principal
- `public/_redirects` - Redirects e SPA routing

**Status:** ✅ Configurado e funcionando

**Como funciona:**
1. Redirects HTTPS e domínio canônico (301!)
2. Redirects legacy de URLs antigas (301)
3. Catch-all SPA routing para React Router (200)

---

### 🔷 Vercel
**Arquivo utilizado:**
- `vercel.json`

**Para usar:**
1. Faça deploy do projeto na Vercel
2. O arquivo `vercel.json` já está configurado
3. Todas as rotas serão automaticamente redirecionadas para o SPA

**Recursos:**
- Rewrites para SPA routing
- Headers de segurança
- Cache de assets estáticos

---

### 🔶 Apache (Servidor próprio)
**Arquivo utilizado:**
- `public/.htaccess`

**Para usar:**
1. Faça upload dos arquivos para seu servidor Apache
2. Certifique-se de que `mod_rewrite` está habilitado
3. O arquivo `.htaccess` já está na pasta `public/`

**Recursos:**
- Force HTTPS
- Force www
- SPA routing
- Cache de assets
- Headers de segurança

---

## Estrutura de Rotas (React Router)

### Rotas Principais:
- `/` - Página inicial
- `/otica-pinheirinho` - Ótica Pinheirinho
- `/loja-de-oculos-no-pinheirinho` - Loja de Óculos Pinheirinho
- `/otica-sitio-cercado` - Ótica Sítio Cercado
- `/otica-umbara` - Ótica Umbará

### Redirects Legacy (301):
- `/loja-oculos-pinheirinho` → `/loja-de-oculos-no-pinheirinho`
- `/oculos-pinheirinho` → `/loja-de-oculos-no-pinheirinho`
- `/otica-pinheirinho-curitiba` → `/otica-pinheirinho`
- `/sitio-cercado-otica` → `/otica-sitio-cercado`
- `/umbara-otica` → `/otica-umbara`

---

## Como Funciona o Roteamento SPA

### Problema:
Quando você acessa `https://www.gouveiacuritiba.com.br/otica-umbara` diretamente, o servidor busca um arquivo físico `/otica-umbara/index.html` que não existe.

### Solução:
Os arquivos de configuração (`_redirects`, `vercel.json`, `.htaccess`) informam ao servidor:
1. Se o arquivo solicitado não existir fisicamente
2. Retorne o `index.html` principal
3. O React Router então assume e renderiza a rota correta no client-side

### Ordem de Prioridade dos Redirects (Netlify):
1. **Redirects forçados (301!)** - HTTPS e domínio canônico
2. **Redirects legacy (301)** - URLs antigas
3. **SPA catch-all (200)** - Todas as outras rotas

---

## Troubleshooting

### ❌ Ainda retorna 404?

**Verifique:**
1. O arquivo de configuração está na raiz do projeto?
2. O deploy incluiu o arquivo de configuração?
3. As rotas estão definidas no `src/App.tsx`?
4. Você fez o deploy após as alterações?

**Para Netlify:**
- Verifique se o arquivo `public/_redirects` foi incluído no build
- Entre em "Deploy settings" e verifique se há conflitos

**Para Vercel:**
- Verifique se o `vercel.json` está na raiz do projeto
- Faça redeploy após adicionar o arquivo

**Para Apache:**
- Verifique se `mod_rewrite` está habilitado: `a2enmod rewrite`
- Verifique as permissões do arquivo `.htaccess`
- Reinicie o Apache: `sudo service apache2 restart`

---

## Arquitetura Atual

- **Framework:** React 18 + Vite
- **Roteamento:** React Router v6 (BrowserRouter)
- **Hospedagem:** Netlify
- **Build:** `npm run build`
- **Deploy:** Automático via Netlify (conectado ao Git)

---

## Comandos Úteis

```bash
# Testar localmente
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Notas Importantes

⚠️ **Não use HashRouter** - Mantém URLs sem `#` para melhor SEO

⚠️ **Ordem dos redirects importa** - Redirects forçados (301!) devem vir primeiro

⚠️ **Catch-all sempre por último** - O redirect `/*` deve ser a última regra

✅ **404 personalizado** - Componente `NotFound.tsx` está configurado

✅ **SEO-friendly** - Todas as URLs são limpas e indexáveis
