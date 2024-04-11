import '../styles/App.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Receita() {

    const { index } = useParams();

    return (
        <div className="index">
        

        
            <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} />Voltar</Link>
        </div>
    )
}

export default Receita;