/*Deeclara um tipo que séra usado pelas props de componente */
type Props = {
  nome: string;
};

export default function Saudacao(props: Props) {
  return (
    <>
      <h2 className="font-bold text-lg">Fundamentos de React!</h2>

      <p className="my-2">
        Bem-vindo(a) <b>{props.nome}</b>
      </p>
    </>
  );
}
