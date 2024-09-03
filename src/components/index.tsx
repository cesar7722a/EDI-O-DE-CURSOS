import { useNavigate } from "react-router-dom"
import { Button } from "./button"
import { useState } from "react";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

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

  return <div className="flex flex-col justify-center items-center h-screen space-y-16">
    <h1 className="font-bold text-4xl text-[#7C3AFF]">Cursos</h1>
  <div className="flex flex-col justify-center gap-10">
  <div className="border border-[#292929] bg-[#1B1B1B] rounded-lg">
    <table className="w-[508px] h-52">
            <thead className=" bg-[#7C3AFF]">
              <TableRow>
                  <TableHeader rounded="secondary">Curso</TableHeader>
                  <TableHeader>Categoria</TableHeader>
                  <TableHeader>Professor(a)</TableHeader>
                  <TableHeader rounded="terciary">Ativo</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {
                cursos.map(curso => {
                  return(
                    <TableRow key={curso.id} onClick={()=> navigate(`/cursos/${curso.nome}`) }>
                    <TableCell>{curso.nome}</TableCell>
                    <TableCell>{curso.categoria}</TableCell>
                    <TableCell>{curso.professor}</TableCell>
                    <TableCell>
                      {
                        curso.estado? "Sim": "Não"
                      }
                    </TableCell>
                    </TableRow>
                  )
                })
              }
            </tbody>
        </table>
  </div>
  <Button onClick={()=> navigate(`/cadastrarCurso`)} color="primary" size="full">
   Novo curso
  </Button>
  </div>
</div>
}