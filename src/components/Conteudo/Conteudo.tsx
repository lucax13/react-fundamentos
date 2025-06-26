import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      <section className={`${estilos.arredondada} ${estilos.sombra}`}>
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>

        <Saudacao nome="Lucas" classe="bg-emerald-400" />
        <Saudacao nome="Noia" classe="bg-red-100" />
        <p>Este é um exemplo de aplicação React.</p>

        <Artigo titulo="Front-End" numero={1} data={new Date()}>
          <p>Front-end e a parte mais facil da Programação</p>
        </Artigo>

        <Artigo titulo="Back-End" numero={2}>
          <p>Importante estudar:</p>
          <ul className="*:list-disc *:ml-7">
            <li>PHP</li>
            <li>SQL</li>
            <li>Orientação Objetos</li>
          </ul>
        </Artigo>

        <Artigo titulo="Mobile" numero={3}>
          <details>
            <summary>conheça as tecnologias mais usadas</summary>
            <ol className="*:list-decimal *:ml-7">
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ol>
          </details>
        </Artigo>
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
