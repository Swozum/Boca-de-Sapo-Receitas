import '../App.css'
import { Link } from 'react-router-dom';

function Index(props) {
    function mostraUtilizador(users) {
        return users.map((user, index) => (
            <div className="informacao" key={index}>
                <div className="user-info">
                    <img src={user.fotoPerfil} alt="Foto de perfil" />
                    <div className="info-text">
                        <h1>{user.primeiroNome + ' ' + user.ultimoNome}</h1>
                    </div>
                </div>
                <div className="receita">
                    <h2>{user.prato}</h2>
                    <h3 className="ingredientes">Ingredientes: {user.ingredientes}</h3>
                    <p>{user.descricao}</p>
                    <Link to={`/receita/${index}`}>Ver Receita</Link>
                </div>
            </div>
        ));
    };

    return (
        <div className="index">
            {mostraUtilizador(props.utilizadores)}
        </div>
    )
}

export default Index;