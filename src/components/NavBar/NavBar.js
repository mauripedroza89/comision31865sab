import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Rock Clothes</div>
     
     <ul className="nav-links">
       
       
       <div className="menu">
         <li><a href="/">Inicio</a></li>
         <li><a href="/">Nosotros</a></li>
         <li className="services">
           <a href="/">Servicios</a>
           
           <ul className="dropdown">
             <li><a href="/">Servicio 1 </a></li>
             <li><a href="/">Servicio 2</a></li>
             <li><a href="/">Servicio 2</a></li>
           </ul>
         </li>
         <li><a href="/">Costos</a></li>
         <li><a href="/">Contacto</a></li>
         <CartWidget/>
       </div>
     </ul>


            </nav>
        
    )
}

export default NavBar;