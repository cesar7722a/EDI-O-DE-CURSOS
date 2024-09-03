import { createContext, ReactNode, useState } from "react";

export const MyContext = createContext([]);

interface Cursos {
  id: number;
  nome: string;
  categoria: string;
  professor: string;
  estado: boolean;
}

interface MyContextProviderProps {
  children: ReactNode;
}

export function MyContextProvider({ Children }: MyContextProviderProps) {
  const [cursos, setCursos] = useState<Cursos[]>([
    {
      id: 1,
      nome: "react",
      categoria: "front-end",
      professor: "Diego Fernandes",
      estado: false,
    },
    {
      id: 2,
      nome: "Java",
      categoria: "bank-end",
      professor: "Diego Fernandes",
      estado: false,
    },
    {
      id: 3,
      nome: "Go",
      categoria: "bank-end",
      professor: "Diego Fernandes",
      estado: true,
    },
    {
      id: 4,
      nome: "react",
      categoria: "front-end",
      professor: "Diego Fernandes",
      estado: true,
    },
  ]);

  return (
    <MyContext.Provider value={{ cursos, setCursos }}>
      {Children}
    </MyContext.Provider>
  );
}
