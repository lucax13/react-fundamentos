import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.menus}>
      <a className={estilos.menu} href="">
        {" "}
        Home
      </a>
      <a className={estilos.menu} href="">
        {" "}
        Sobre
      </a>
      <a className={estilos.menu} href="">
        {" "}
        Contato
      </a>
    </nav>
  );
}
