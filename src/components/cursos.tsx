import { Button } from "./button";


export function Cursos() {

 

  return <div className="flex flex-col justify-center items-center h-screen space-y-16">
      <h1 className="font-bold text-4xl text-[#7C3AFF]">Cursos</h1>
      <div className="flex flex-col justify-center gap-10">
        <div className="w-[420px] border border-[#292929] bg-[#1B1B1B] rounded-lg">
          <div className="px-7 py-4 w-full bg-[#7C3AFF] rounded-tr-lg rounded-tl-lg">
            <h1 className="font-bold">React</h1>
          </div>
          <div>
          <p className="px-7 py-4">Curso: React</p>
          <p className="px-7 py-4">Categoria: Front-end</p>
          <p className="px-7 py-4">Professor: Diego Fernande</p>
          <p className="px-7 py-4">Inicio: Desde 19/01/02</p>
          </div>
        </div>
        <div className="flex justify-between">
        <Button color="primary" size="semiFull" margin="semiMargin">Editar curso</Button>
        <Button color="secondary" size="semiFull" margin="semiMargin">Excluir curso</Button>
        </div>
      </div>
  </div>
}