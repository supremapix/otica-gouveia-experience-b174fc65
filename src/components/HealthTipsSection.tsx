export default function HealthTipsSection() {
  return <section className="visit-guide" aria-labelledby="eye-care-title">
    <div className="visit-heading"><span>INFORMAÇÃO GERAL</span><h2 id="eye-care-title">Cuidados com a saúde dos olhos</h2><p>Conteúdo educativo. A avaliação individual e a prescrição cabem ao profissional de saúde.</p></div>
    <div className="visit-cards">
      <article><h3>Evite a automedicação</h3><p>Não use colírios por conta própria. Tire dúvidas sobre medicamentos com um profissional de saúde.</p></article>
      <article><h3>Observe mudanças na visão</h3><p>Procure atendimento médico ao perceber alterações. A escolha de óculos na ótica não substitui o exame dos olhos.</p></article>
      <article><h3>Acompanhe sua visão</h3><p>Realize consultas para avaliar a saúde ocular e atualizar a receita quando necessário. Combine a frequência com o profissional que acompanha você.</p></article>
    </div>
    <p className="mt-6">Fonte: <a className="underline" href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doencas-oculares" target="_blank" rel="noopener noreferrer">Ministério da Saúde — doenças oculares</a>.</p>
  </section>;
}
