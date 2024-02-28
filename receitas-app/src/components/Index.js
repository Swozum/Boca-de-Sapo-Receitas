function Index() {

    const utilizadores = [
        {
            primeiroNome: "João",
            ultimoNome: "Augusto",
            fotoPerfil: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Citroen_2CV_1X7A7979.jpg/1280px-Citroen_2CV_1X7A7979.jpg",
            prato: "Arroz de Pato",
            ingredientes: "Arroz, Pato",
            descricao: "Um arroz de pato é sempre uma boa ideia para uma festa ou para um encontro com amigos. Aprenda a fazê-lo com quem sabe. Sai sempre bem.",
            preparacao: {
                "1": "Num tacho, coloque o litro e meio de água, o vinho tinto, metade do chouriço, o toucinho fumado, as folhas de louro, os peitos de pato e o sal.",
                "2": "Deixe cozer durante 40 minutos.",
                "3": "Coe e reserve o caldo da cozedura do pato.",
                "4": "Num tacho, faça um refogado com o azeite, a cebola picada e o alho picado.Deixe alourar 3 minutos e junte a polpa de tomate.",
                "5": "Deixe apurar durante 5 minutos.",
                "6": "Deixe arrefecer as carnes, desfie o pato e corte o chouriço e o toucinho fumado aos cubos.Junte ao tacho do refogado.",
                "7": "Adicione um pouco do caldo e deixe apurar durante 3 minutos.",
                "8": "Junte o arroz e misture bem.Depois adicione 400 ml do caldo da cozedura, a pimenta e o colorau.Quando levantar fervura baixe o lume e deixe cozer durante 10 minutos.",
                "9": "Coloque o arroz num tabuleiro de ir ao forno.Corte o restante chouriço às rodelas e decore por cima do arroz.",
                "10": "Leve ao forno a 170 ºC durante 15 minutos até alourar."
            }
        },
        {
            primeiroNome: "Pedro",
            ultimoNome: "Silva",
            fotoPerfil: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Nationale_oldtimerdag_Zandvoort_2010%2C_1981_RENAULT_5_TURBO%2C_JH-VZ-86_pic2.JPG/1280px-Nationale_oldtimerdag_Zandvoort_2010%2C_1981_RENAULT_5_TURBO%2C_JH-VZ-86_pic2.JPG",
            prato: "Frango Assado",
            ingredientes: "Frango, Sal, Pimenta",
            preparacao: {
                "1": "Tempere o frango com sal e pimenta, leve ao forno por 1 hora."
            }
        },
        {
            primeiroNome: "Maria",
            ultimoNome: "Santos",
            fotoPerfil: "https://www.standvirtual.com/blog/wp-content/uploads/2022/01/Carros-miticos-Rali-Peugeot-205-T16.jpg",
            prato: "Lasanha",
            ingredientes: "Massa, Molho de Tomate, Queijo",
            preparacao: {
                "1": "Cozinhe a massa, monte em camadas com o molho e o queijo, leve ao forno."
            }
        },
        {
            primeiroNome: "Carlos",
            ultimoNome: "Gomes",
            fotoPerfil: "https://www.standvirtual.com/blog/wp-content/uploads/2021/10/Classicos-de-Rali-a-historia-do-Audi-quattro.jpg",
            prato: "Sopa de Legumes",
            ingredientes: "Legumes variados, Água, Sal",
            preparacao: {
                "1": "Cozinhe os legumes em água fervente com sal até ficarem macios."
            }
        }
    ];

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
                    <p className="ingredientes">Ingredientes: {user.ingredientes}</p>
                    <p className="ver-preparacao">Preparação:</p>
                    <p>{mostraPreparacao(user.preparacao)}</p>
                </div>
            </div>
        ));
    };

    //Recebe um Objeto "preparacao"
    function mostraPreparacao(preparacao) {
        //Retorna um 'componente'
        return (
            <div>
                {/* Percorre as 'keys' do objeto 'preparacao' */}
                {Object.keys(preparacao).map((passoNumero, index) => (
                    // Renderiza um parágrafo para cada passo de preparação
                    <p key={index}>Passo {parseInt(passoNumero)}:
                        {/* Exibe o texto correspondente ao passo atual */}
                        {preparacao[passoNumero]}</p>
                ))}
            </div>
        );
    };

    return (
        <div className="index">
            {mostraUtilizador(utilizadores)}
        </div>
    )
}

export default Index;