/*Deeclara um tipo que séra usado pelas props de componente */
type Props = {
  nome: string;
  classe: string;
};

export default function Saudacao(props: Props) {
  return (
    <>
      <p className={`my-2 rounded text-center ${props.classe}`}>
        Bem-vindo(a) <b>{props.nome}</b>
      </p>
    </>
  );
}
