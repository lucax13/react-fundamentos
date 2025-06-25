import styled from "styled-components";

let tema: boolean = true;

const StyledDicaDoDia = styled.section`
  background-color: ${tema ? "#7091ad" : "ligthblue"};
  border-left: 5px solid darkblue;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 4px;

  h3 {
    color: darkblue;
  }

  p {
    color: #034986;
    font-size: 1.1rem;
  }

  .site-oficial {
    background-color: white;
    text-align: center;
    padding: 0.4rem;

    a {
      text-decoration: none;
      color: #7091ad;
      font-weight: bold;

      &:hover,
      &focus {
        text-decoration: underline;
      }
    }
  }
`;

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
