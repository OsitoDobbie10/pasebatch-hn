import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import {Page,AntesPaseNoche,DurantePaseNoche,
        GeneracionLecturas,PostPaseNoche,
        TablaGeneracion,Layout} from "../index"
const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Layout/>,
            children:[
            {
                index:true,
                element:<Page/>
            }
            ]
        },
        {
            path:"/AntesPaseNoche",
            element:<Layout/>,
            children:[
            {
                index:true,
                element:<AntesPaseNoche/>
            }
            ]
        },
        {
            path:"/DurantePaseNoche",
            element:<Layout/>,
            children:[
                {
                   index:true,
                   element:<DurantePaseNoche/> 
                }
            ]
        },
        {
            path:"/GeneracionLecturas",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<GeneracionLecturas/>
                }
            ]
        },
        {
            path:"/PostPaseNoche",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<PostPaseNoche/>
                }
            ]
        },
        {
            path:"/TablaGeneracion",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<TablaGeneracion/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default Router