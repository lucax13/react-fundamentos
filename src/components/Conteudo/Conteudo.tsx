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

        <Artigo
          titulo="Front-End"
          texto="Qualquer coisa que se faça no front end"
          numero={1}
        />

        <Artigo titulo="Back-End" texto="sei la o que colocar" numero={2} />

        <Artigo titulo="Mobile" texto="Tanto faz aqui" numero={3} />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
