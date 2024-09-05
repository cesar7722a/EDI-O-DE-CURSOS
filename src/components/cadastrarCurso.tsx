import { useContext, useState } from "react";
import { Button } from "./button";
import { Inputs } from "./inputs";
import { MyContext } from "./CursoContext";

export function CadastrarCurso() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error(
      "Lista de curso deve ser usada dentro de um MyContextProvider"
    );
  }

  const { addCurso } = context;
  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("");
  const [professor, setProfessor] = useState("");
  const [estado, setEstate] = useState("");

  function handleAddCurso(
    name: string,
    categoria: string,
    estado: string,
    professor: string
  ) {
    addCurso(name, categoria, estado, professor);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-16">
      <h1 className="font-bold text-4xl text-[#7C3AFF]">Cursos</h1>
      <div className="w-[420px] flex flex-col justify-center gap-10">
        <form className="flex flex-col gap-1">
          <Inputs value={name} setName={setName} placeholder="Nome" />
          <Inputs
            value={categoria}
            setName={setCategoria}
            placeholder="Categoria"
          />
          <Inputs
            value={professor}
            setName={setProfessor}
            placeholder="Professor(a)"
          />
          <Inputs value={estado} setName={setEstate} placeholder="Ativo" />
        </form>

        <Button onClick={handleAddCurso} color="primary" size="full">
          Cadastrar
        </Button>
      </div>
    </div>
  );
}
