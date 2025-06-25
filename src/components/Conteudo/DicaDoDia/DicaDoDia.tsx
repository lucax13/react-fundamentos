import { StyledDicaDoDia } from "./DicaDoDia.styles";

export default function DicaDoDia() {
  return (
    <StyledDicaDoDia>
      <h3>Dica do Dia</h3>
      <p>
        Voce pode combinar diferentes formasSA de estilização em u projeto
        react. neste exemplo, estamos usando <b>styled-components</b>, uma
        famosa biblioteca para css in js.
      </p>
      <p className="site-oficial">
        Site Oficial:{" "}
        <a href="https://styled-components.com/" target="_blank">
          {" "}
          Styled Components
        </a>
      </p>
    </StyledDicaDoDia>
  );
}
