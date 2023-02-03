import "../styles/sobre.css";
import React from "react";
import imgLado from "../assets/images/sobre_lado_Clemzillu.jpg";
import iconIdealizadora from "../assets/images/iconIdealizadora.png";

function Sobre() {
  return (
    <main>
      <section className="sobre-section"></section>
      <p className="float-end src-name">img src: Emily Garfield</p>
      <section className="container mt-3 mb-5">
        <p className="sobreH1">Sobre</p>
        <section className="d-flex mt-5 justify-content-evenly align-items-center mediaQSobre">
          <h2 className="sobreH2Urb">URBANA</h2>
        </section>
        <section className="d-flex mt-3 justify-content-evenly align-items-center mediaQSobre">
          <ol className="ol-css">
            <li>é aquela [mulher] que pertence à cidade</li>
            <li>própria da cidade</li>
            <li>que tem características de cidade</li>
            <li>dotada de urbanidade</li>
          </ol>
        </section>
        <section className="d-flex align-items-center marginSpec mediaQSobre">
          <img src={imgLado} alt="foto de Clemzillu" className="img-sobre-1" />
          <p className="infoSobre msSpec">
            A{" "}
            <strong>
              <u>urbana</u>
            </strong>{" "}
            é uma consultoria que busca juntar esforços com outros movimentos e
            organizações, colidindo e construindo agendas de compromissos às
            políticas de igualdade de gênero. Visa a articulação com o setor
            público e privado, na premissa da construção de um objetivo social
            comum. Atua em quatro eixos que se interrelacionam e se fortalecem
            entre si, por meio da adoção de metodologias fundamentais para a
            aplicação e compreensão da perspectiva de gênero no planejamento
            urbano e no urbanismo, embasadas em referências nacionais e
            internacionais.
          </p>
        </section>
        <section className="mt-5 mediaQSobre">
          <h2 className="sobreH2">Idealizadora</h2>
        </section>
        <section className="d-flex align-items-center mediaQSobre">
          <p className="infoSobre">
            Arquiteta, urbanista e pesquisadora formada pelo Centro
            Universitário Belas Artes de São Paulo, <u>Júlia Solér Marconi</u>{" "}
            atuou profissionalmente com políticas urbanas, planejamento urbano e
            projetos de urbanismo. Idealizou a urbana durante o Mestrado
            Profissional, onde pesquisou sobre metodologias internacionais e
            nacionais, a fim de definir os fundamentos e estratégias que compõem
            uma metodologia de planejamento urbano e urbanismo aliada
            integralmente a perspectiva de gênero, que considera as demandas e
            necessidades da mulher e suas diversas esferas e
            interseccionalidades na produção social do espaço urbano, bem como
            sua inclusão como atrizes públicas e políticas.
          </p>
          <img
            src={iconIdealizadora}
            alt="icon-idealizadora"
            className="img-sobre-2 msSpec"
          />
        </section>
      </section>
    </main>
  );
}

export default Sobre;