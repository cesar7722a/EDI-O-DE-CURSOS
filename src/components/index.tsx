import { useNavigate } from "react-router-dom"
import { Button } from "./button"


export function CreateCurso(){

  const navigate = useNavigate()

  function navigator(){
    navigate(`/cadastrarCurso`)
  }

  return <div className="flex flex-col justify-center items-center h-screen space-y-16">
    <h1 className="font-bold text-4xl text-[#7C3AFF]">Cursos</h1>
  <div className="flex flex-col justify-center gap-10">
  <div className="border border-[#292929] bg-[#1B1B1B] rounded-lg">
    <table className="w-[508px] h-52">
            <thead className=" bg-[#7C3AFF]">
                <tr className=" h-14">
                    <th className="rounded-tl-lg font-bold px-7 py-4 text-left">Curso</th>
                    <th className="font-bold px-7 py-4 text-left">Categoria</th>
                    <th className="font-bold px-7 py-4 text-left">Professor(a)</th>
                    <th className="rounded-tr-lg font-bold px-7 py-4 text-left">Ativo</th>
                </tr>
            </thead>
            <tbody>
                <tr className=" h-14 border border-b-[#292929] border-t-0 border-r-0 border-l-0">
                    <td className="px-7 py-4">React</td>
                    <td className="px-7 py-4">Front-end</td>
                    <td className="px-7 py-4">Diego Fernande</td>
                    <td className="px-7 py-4">Sim</td>
                </tr>
                <tr className=" h-14 border bg-[#212121] border-b-[#292929] border-t-0 border-r-0 border-l-0">
                    <td className="px-7 py-4">Java</td>
                    <td className="px-7 py-4">Back-end</td>
                    <td className="px-7 py-4">Daniele Leã</td>
                    <td className="px-7 py-4">Sim</td>
                </tr>
                <tr className=" h-14">
                    <td className="px-7 py-4">Go</td>
                    <td className="px-7 py-4">Back-en</td>
                    <td className="px-7 py-4">Sem professor</td>
                    <td className="px-7 py-4">Não</td>
                </tr>
            </tbody>
        </table>
  </div>
  <Button onClick={navigator} color="primary" size="full">
   Novo curso
  </Button>
  </div>
</div>
}