import { Link } from 'react-router-dom';
import '../App.css'

function Header() {
    return (
        <div className="header">
            <Link to={"/"} style={{textDecoration: "none"}}>
                <h1>Boca de Sapo - Receitas</h1>
            </Link>
        </div>
    )
}

export default Header;