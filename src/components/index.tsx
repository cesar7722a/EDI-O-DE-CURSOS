import { useNavigate } from "react-router-dom"
import { Button } from "./button"
import { useState } from "react";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";

interface Cursos {
  id: number;
  nome: string;
  categoria: string;
  professor: string;
  estado: boolean
} 

export function CreateCurso(){
   const [cursos, setCursos] = useState<Cursos[]>([
    {id:1, nome: "react", categoria: "front-end", professor:"Diego Fernandes", estado:false},
    {id:2, nome: "Java", categoria: "bank-end", professor:"Diego Fernandes", estado:false},
    {id:3, nome: "Go", categoria: "bank-end", professor:"Diego Fernandes", estado:true},
    {id:4, nome: "react", categoria: "front-end", professor:"Diego Fernandes", estado:true},
  ])
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
                  <TableHeader rounded="secondary">Curso</TableHeader>
                  <TableHeader>Categoria</TableHeader>
                  <TableHeader>Professor(a)</TableHeader>
                  <TableHeader rounded="terciary">Ativo</TableHeader>
                </tr>
            </thead>
            <tbody>
                <tr className=" h-14 border border-b-[#292929] border-t-0 border-r-0 border-l-0">
                    <TableCell>React</TableCell>
                    <TableCell>Front-end</TableCell>
                    <TableCell>Diego Fernande</TableCell>
                    <TableCell>Sim</TableCell>
                </tr>
                <tr className=" h-14 border bg-[#212121] border-b-[#292929] border-t-0 border-r-0 border-l-0">
                  <TableCell>Java</TableCell>
                  <TableCell>Back-end</TableCell>
                  <TableCell>Daniele Leão</TableCell>
                  <TableCell>Sim</TableCell>
                </tr>
                <tr className=" h-14">
                  <TableCell>Go</TableCell>
                  <TableCell>Back-en</TableCell>
                  <TableCell>Sem professor</TableCell>
                  <TableCell>Não</TableCell>
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