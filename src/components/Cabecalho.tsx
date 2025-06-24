import logo from "../assets/logo-react.png";
import Menu from "./Menu";
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={estilos.topo}>
      <h1>
        <img src={logo} alt="" /> Olá React! 😎
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
