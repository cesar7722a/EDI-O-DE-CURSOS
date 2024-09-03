import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { CreateCurso } from "./components";
import { CadastrarCurso } from "./components/cadastrarCurso";
import { Cursos } from "./components/cursos";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateCurso/>,
  },
  {
    path: "/cadastrarCurso",
    element: <CadastrarCurso/>,
  },
  {
    path: "/cursos/:cursoId",
    element: <Cursos/>,
  },
 
]);

export default function App() {
  return <RouterProvider router={router} />
}
