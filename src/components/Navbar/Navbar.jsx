import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";


const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-logo">

                <p>Mi Logo</p>

            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Baterias</a>
                    </li>
                    <li>
                        <a href="#">Platillos</a>
                    </li>
                    <li>
                        <a href="#">Redoblantes</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                </ul>


            </div>

            <CartWidget />

        </nav>




    )
}

export default Navbar;
