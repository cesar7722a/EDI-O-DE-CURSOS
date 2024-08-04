import { useNavigate } from "react-router-dom"
import { Button } from "./button"

export function CadastrarCurso(){


  const navigate = useNavigate()

  return <div className="flex flex-col justify-center items-center h-screen space-y-16">
    <h1 className="font-bold text-4xl text-[#7C3AFF]">Cursos</h1>
    <div className="w-[420px] flex flex-col justify-center gap-10">
      <form className="flex flex-col gap-1">
        <input 
        className="px-3 hover:border-[#808080] focus:border-[#4412A5] outline-none 
        py-4 w-full rounded-lg bg-[#141414] border border-[#292929]"
         type="text" 
         placeholder="Nome"
         />

        <input 
        className="px-3  hover:border-[#808080] py-4 w-full focus:border-[#4412A5] outline-none
        rounded-lg bg-[#141414] border border-[#292929]" 
        type="text" 
        placeholder="Categoria"
        />
        <input 
        className="px-3  hover:border-[#808080] focus:border-[#4412A5] outline-none
        py-4 w-full rounded-lg bg-[#141414] border border-[#292929]" 
        type="text" 
        placeholder="Professor(a)"
        />
        <input  
        className="px-3 hover:border-[#808080] focus:border-[#4412A5] outline-none  
        py-4 w-full rounded-lg bg-[#141414] border border-[#292929]"
        type="text" 
        placeholder="Ativo"
        />
      </form>
      <Button onClick={()=> navigate(`/cursos`)} color="primary" size="full">Cadastrar</Button>
    </div>
  </div>
}