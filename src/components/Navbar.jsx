
import {itemsNavbar,TransitionComponent} from "../index"
import { NavLink,useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
  return (
    <TransitionComponent position='right' className='fixed z-40 flex flex-col items-center justify-center w-full mt-auto bottom-10'>
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm" >
        {
            itemsNavbar.map((items)=>{
                return <div key={items.id} 
                       className={`px-3 py-2 transition duration-150 
                                   rounded-full cursor-pointer
                                   hover:bg-secondary ${location.pathname === items.link && `bg-secondary`}`}>
                       <NavLink to={items.link}>
                       {items.icon}
                       </NavLink>
                      </div>
            })
        }
        </div>
      </nav>
    </TransitionComponent>
  )
}

export default Navbar;
