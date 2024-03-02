import '../App.css'
import { Link, useParams } from 'react-router-dom';

function Receita(props) {

    const { index } = useParams();

    function mostraReceita(utilizadores) {
        // Certifique-se de que o índice é convertido para um número
        const userIndex = parseInt(index);
        // Acesse o usuário correspondente pelo índice
        const informacao = utilizadores[userIndex];

        return (
            <div className='informacao'>
                <h1>{informacao.prato} por {informacao.primeiroNome} {informacao.ultimoNome}</h1>
                <h3>Ingredientes necessários para esta receita:</h3>
                <h4>{informacao.ingredientes}</h4>
                {mostraPreparacao(informacao.preparacao)}
                <Link to='/'>Voltar</Link>
            </div>
        )
    }

    function mostraPreparacao(preparacao) {
        return (
            <div>
                {/* Percorre as 'keys' do objeto 'preparacao' */}
                {Object.keys(preparacao).map((passoNumero, index) => (
                    // Renderiza um parágrafo para cada passo de preparação
                    <p key={index}>Passo {parseInt(passoNumero)}: {preparacao[passoNumero]}</p>
                    /* Exibe o texto correspondente ao passo atual */
                ))}
            </div>
        )
    };

    return (
        <div className="index">
            {mostraReceita(props.utilizadores)}
        </div>
    )
}

export default Receita;