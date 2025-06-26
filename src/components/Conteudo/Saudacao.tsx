/*Deeclara um tipo que séra usado pelas props de componente */
type SaudacaoProps = {
  nome: string;
  classe: string;
};

export default function Saudacao({
  nome = "visitante",
  classe,
}: SaudacaoProps) {
  return (
    <>
      <p className={`my-2 rounded text-center ${classe}`}>
        Bem-vindo(a) <b>{nome}</b>
      </p>
    </>
  );
}
