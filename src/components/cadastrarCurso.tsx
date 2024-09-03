import { Button } from "./button"
import { Inputs } from "./inputs"

export function CadastrarCurso(){


  return <div className="flex flex-col justify-center items-center h-screen space-y-16">
    <h1 className="font-bold text-4xl text-[#7C3AFF]">Cursos</h1>
    <div className="w-[420px] flex flex-col justify-center gap-10">

      <form className="flex flex-col gap-1">
         <Inputs  placeholder="Nome"/>
         <Inputs  placeholder="Categoria"/>
         <Inputs  placeholder="Professor(a)"/>
         <Inputs  placeholder="Ativo"/>
      </form>

      <Button  color="primary" size="full">Cadastrar</Button>
    </div>
  </div>
}