import '../App.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import Loading from './Loading';

function Index() {

    const [receita, setReceita] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposnse = await fetch(`http://127.0.0.1:8000/recipe/`);
                const data = await resposnse.json();
                setReceita(data);
            } catch (error) {
                console.log("Erro: ", error)
            };

        };

        fetchData();
    }, []);

    //useEffect(() => console.log("Receita: ", receita))

    const DisplayReceita = ({ receitas }) => {
        return (
            <>
                {receitas.map((receita) => (
                    <div key={receita.recipe_Id} className='receita-conteudo'>
                        <div className='receita-info-geral'>
                            <p className='titulo-receita'>Receita: {receita.recipe_Name}</p>
                            <p className='data-criacao'>Data criação: {receita.creation_Date}</p>
                        </div>
                        <div className='receita-info-dificuldade-tempo'>
                            <p>Dificuldade: {receita.difficulty_Level}</p>
                            <p>Tempo de preparo: {receita.preparation_Time}</p>
                        </div>
                        <div className='receita-info-descricao'>
                            <p>Descrição: {receita.description}</p>
                        </div>
                        <div className='receita-info-ingredientes'>
                            <p>Ingredientes: {receita.ingredients}</p>
                        </div>
                        <div>
                            {receita.photos.map((foto, fotoIndex) => (
                                <img key={fotoIndex} src={foto.local} alt={`Foto ${fotoIndex + 1}`} />
                            ))}
                        </div>
                        <Link to={`/verReceita/${receita.recipe_Id}`}>Ver Receita</Link>
                        <Link to={`/receita/${receita.recipe_Id}`}>Ver Receita</Link>
                        <hr />
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className="index">
            {receita !== null ? <DisplayReceita receitas={receita} /> : <Loading />}
        </div>
    )
}

export default Index;