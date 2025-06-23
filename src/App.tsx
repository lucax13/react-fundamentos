export default function App() {
  // Comentário de uma linha
  /* Comentário de múltiplas linhas */
  return (
    <>
      <header>
        <h1>Olá React! 😎</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Contato</a>
        </nav>
      </header>

      {/* Comentários no meio do JSX: é normal ficar entre {} */}
      {/* Ao usar outros elementos HTML no JSX, é importante
      envolver tudo em um único <> </> (Fragmento React) */}

      <main>
        <section>
          <h2>Seja bem-vindo(a) aos Fundamentos de React!</h2>
          <p>Este é um exemplo de aplicação React.</p>

          <article>
            <h3>Artigo 1 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, et voluptatem dignissimos dolorum necessitatibus sint
              quod consectetur aliquid! Officiis adipisci totam natus dicta
              laborum quisquam fugit corrupti nesciunt, quasi sed?
            </p>
          </article>

          <article>
            <h3>Artigo 2 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, et voluptatem dignissimos dolorum necessitatibus sint
              quod consectetur aliquid! Officiis adipisci totam natus dicta
              laborum quisquam fugit corrupti nesciunt, quasi sed?
            </p>
          </article>

          <article>
            <h3>Artigo 3 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, et voluptatem dignissimos dolorum necessitatibus sint
              quod consectetur aliquid! Officiis adipisci totam natus dicta
              laborum quisquam fugit corrupti nesciunt, quasi sed?
            </p>
          </article>
        </section>
      </main>

      <footer>
        <h2>Pequeno site criado com React</h2>
        <p>
          Desenvolvido por <b>Tiago</b> &copy; 2025
        </p>
      </footer>
    </>
  );
}
