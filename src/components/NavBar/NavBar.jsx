import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";
import logo from '../../assets/fiorosea.png'

const NavBar = () => {
    return (
        <nav>
            <img src={logo} />
            <div>
                <button>Productos</button>
                <button>Servicios</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar