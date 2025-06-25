export default function aviso() {
  return (
    <section
      className="bg-yellow-200 border-1-4 border-yellow-600 p-4 mt-4
    rounded"
    >
      <h3 className="font-bold text-2xl text-orange-800">Aviso importante:</h3>
      <p>Alguns alunos e alunas estão perigando reprovação nesta UC.</p>

      <div className="flex justify-around my-3 bg-amber-300">
        <div className="bg-amber-900">UM</div>
        <div className="bg-amber-700">DOIS</div>
        <div className="bg-amber-500">TRES</div>
      </div>
    </section>
  );
}
