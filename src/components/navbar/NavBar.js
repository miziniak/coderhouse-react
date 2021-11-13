import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <div className="NavBarSection">
        <h3 className="logo">STORE</h3>
        <div className="links">
            <Link to="/"><p>All</p></Link>
            <Link to="/consolas"><p>Lifestyle</p></Link>
            <Link to="/juegos"><p>Gym-Training</p></Link>
            <Link to="/cart"><p>Top-Zapatillas-Nike</p></Link>
        </div>
    </div>
    )
}

export default NavBar
