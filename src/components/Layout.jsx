import { Outlet } from "react-router-dom"
import {Header,Navbar} from "../index"
const Layout = () => {
  return (
    <>
    <Header/>
    <div>
    <Outlet/>
    </div>
    <Navbar/>
    </>
  )
}

export default Layout