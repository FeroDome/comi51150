import "./Navbar.css"
import CartWidget from "../CartWitget/CartWitget";

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <section className="buttons">
                    <button>Mates</button>
                    <button>Coleccionables</button>
                    <button>Miniaturas</button>
                    <button>A Medida</button>
                    <button>Contacto</button>
                </section>
            <h1 className="navbar-logo">FGL3D</h1>
            <CartWidget className="seeCarrito"/>
            </nav>
            
        </div>
    );
};

export default Navbar;