import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";
import cursos from "../../data/cursos";
import ListaCursos from "../Lista/ListaCursos";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      <section className={`${estilos.arredondada} ${estilos.sombra}`}>
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>

        <Saudacao nome="Lucas" classe="bg-emerald-400" />
        <p>Este é um exemplo de aplicação React.</p>

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
