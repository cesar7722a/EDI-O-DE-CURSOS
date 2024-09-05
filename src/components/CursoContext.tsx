import { createContext, ReactNode, useState } from "react";
let nextId = 10;
interface CursosProps {
  id: number;
  name: string;
  categoria: string;
  professor: string;
  estado: boolean;
}

interface MyContextCusosTypes {
  children: ReactNode;
  cursos: CursosProps[];
  addCurso: (
    name: string,
    categoria: string,
    estado: string,
    professor: string
  ) => void;
  editCurso: (id: number) => void;
  deleteCurso: (id: number) => void;
}

export const MyContext = createContext<MyContextCusosTypes | undefined>(
  undefined
);

interface CursosProviderProps {
  children: ReactNode;
}

export function MyContextProvider({ children }: CursosProviderProps) {
  const [cursos, setCursos] = useState<CursosProps[]>([
    {
      id: 1,
      name: "React",
      categoria: "front-end",
      professor: "Diego Fernandes",
      estado: false,
    },
    {
      id: 2,
      name: "Java",
      categoria: "bank-end",
      professor: "Diego Fernandes",
      estado: false,
    },
    {
      id: 3,
      name: "Go",
      categoria: "bank-end",
      professor: "Diego Fernandes",
      estado: true,
    },
    {
      id: 4,
      name: "React",
      categoria: "front-end",
      professor: "Diego Fernandes",
      estado: true,
    },
  ]);

  function addCurso({ name, categoria, estado, professor }: CursosProps) {
    const novaCurso: CursosProps = {
      id: nextId++,
      name: name,
      estado: estado,
      categoria: categoria,
      professor: professor,
    };
    setCursos([...cursos, novaCurso]);
  }

  return (
    <MyContext.Provider value={{ cursos, addCurso, setCursos }}>
      {children}
    </MyContext.Provider>
  );
}
