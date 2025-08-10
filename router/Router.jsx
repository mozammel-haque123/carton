import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLeayout from "../src/component/MainLeayout/MainLeayout";
import Carton from "../src/component/Carton/Carton";
import CartonDitails from "../src/component/CartonDitails/CartonDitails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLeayout></MainLeayout>,
    children:[
    {
    path:'/',
    element:<Carton></Carton>,
    loader: ()=> fetch(`https://rickandmortyapi.com/api/character`)
    },
    {
    path:'/ditails/:id',
   element: <CartonDitails></CartonDitails>,
   loader: ({params})=> fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    }
    ]
  },
]);
export default router;