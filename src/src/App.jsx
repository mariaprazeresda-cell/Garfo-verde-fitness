

import React, { useState } from 'react';

const receitas = [

  { nome: 'Panquecas de aveia e banana', tipo: 'Pequeno-almoço', kcal: 320, proteina: 18, ingredientes: 'Aveia, banana, ovos e canela', objetivo: 'Energia para começar o dia' },

  { nome: 'Bowl de frango e quinoa', tipo: 'Almoço', kcal: 450, proteina: 42, ingredientes: 'Frango, quinoa, tomate e espinafres', objetivo: 'Ganho de massa muscular' },

  { nome: 'Salada mediterrânica', tipo: 'Jantar', kcal: 290, proteina: 16, ingredientes: 'Grão, pepino, tomate e queijo feta', objetivo: 'Refeição equilibrada' },

  { nome: 'Iogurte com frutos vermelhos', tipo: 'Lanche', kcal: 210, proteina: 20, ingredientes: 'Iogurte skyr, morangos e mirtilos', objetivo: 'Lanche rico em proteína' },

  { nome: 'Omelete de espinafres', tipo: 'Jantar', kcal: 280, proteina: 25, ingredientes: 'Ovos, espinafres e cogumelos', objetivo: 'Refeição rica em proteína' },

  { nome: 'Batido tropical', tipo: 'Lanche', kcal: 240, proteina: 22, ingredientes: 'Leite, banana, manga e iogurte', objetivo: 'Energia e recuperação' }

];

export default function App() {

  const [pesquisa, setPesquisa] = useState('');

  const [objetivo, setObjetivo] = useState('Todos');

  const [favoritos, setFavoritos] = useState([]);

  const [idioma, setIdioma] = useState('PT');

  const filtradas = receitas.filter(r =>

    (r.nome + ' ' + r.ingredientes).toLowerCase().includes(pesquisa.toLowerCase()) &&

    (objetivo === 'Todos' || (objetivo === 'Proteína' ? r.proteina >= 20 : objetivo === 'Leve' ? r.kcal <= 300 : true))

  );

  return (

    <main className="app">

      <header className="topo">

        <div className="marca">🥑 GARFO VERDE <span>FITNESS</span></div>

        <select value={idioma} onChange={e => setIdioma(e.target.value)}>

          <option value="PT">PT-PT</option>

          <option value="ES">Español</option>

          <option value="BR">PT-BR</option>

        </select>

      </header>

      <section className="hero">

        <div className="selo">COMER BEM. VIVER MELHOR.</div>

        <h1>O teu bem-estar<br /><span>começa no prato.</span></h1>

        <p>Receitas deliciosas, equilibradas e pensadas para os teus objetivos.</p>

        <a href="#receitas" className="botao">Descobrir receitas ↓</a>

      </section>

      <section className="objetivos">

        <h2>O que procuras hoje?</h2>

        <div className="filtros">

          {['Todos', 'Proteína', 'Leve'].map(o =>

            <button className={objetivo === o ? 'ativo' : ''} onClick={() => setObjetivo(o)} key={o}>{o}</button>

          )}

        </div>

      </section>

      <section className="receitas" id="receitas">

        <div className="titulo">

          <div><span className="selo">INSPIRAÇÃO SAUDÁVEL</span><h2>Receitas para ti</h2></div>

          <span>{filtradas.length} receitas</span>

        </div>

        <input className="pesquisa" placeholder="🔎 Procurar receita ou ingrediente..." value={pesquisa} onChange={e => setPesquisa(e.target.value)} />

        <div className="grelha">

          {filtradas.map((r, i) =>

            <article className="cartao" key={r.nome}>

              <div className="foto">{['🥞', '🥗', '🥑', '🫐', '🍳', '🥭'][receitas.indexOf(r)]}</div>

              <div className="cartao-corpo">

                <span className="categoria">{r.tipo}</span>

                <h3>{r.nome}</h3>

                <p>{r.ingredientes}</p>

                <div className="nutricao"><span>🔥 {r.kcal} kcal</span><span>💪 {r.proteina} g proteína</span></div>

                <button className="favorito" onClick={() => setFavoritos(f => f.includes(r.nome) ? f.filter(x => x !== r.nome) : [...f, r.nome])}>

                  {favoritos.includes(r.nome) ? '♥ Guardado' : '♡ Favorito'}

                </button>

              </div>

            </article>

          )}

        </div>

        {filtradas.length === 0 && <p>Não encontrámos receitas. Experimenta outros ingredientes.</p>}

      </section>

      <section className="destaque">

        <span>🌱 A TUA JORNADA, AO TEU RITMO</span>

        <h2>Pequenas escolhas.<br />Grandes mudanças.</h2>

        <p>Planeia as tuas refeições, descobre novos sabores e acompanha os teus objetivos.</p>

      </section>

      <footer>🥑 Garfo Verde Fitness · Comer bem é cuidar de ti.</footer>

    </main>

  );

}
