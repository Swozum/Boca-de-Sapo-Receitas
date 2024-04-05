import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Index from './components/Index';
import Receita from './components/Receita';

function App() {

  const utilizadores = [
    {
      primeiroNome: "João",
      ultimoNome: "Augusto",
      fotoPerfil: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Citroen_2CV_1X7A7979.jpg/1280px-Citroen_2CV_1X7A7979.jpg",
      prato: "Strogonoff de Frango",
      ingredientes: "Frango, Creme de Leite, Champignon, Cebola, Alho, Molho de Tomate",
      descricao: "Um prato delicioso e reconfortante, perfeito para um jantar em família. O strogonoff de frango é fácil de fazer e agrada a todos.",
      preparacao: {
        "1": "Em uma panela, refogue a cebola e o alho até dourarem.",
        "2": "Acrescente o frango cortado em cubos e deixe dourar por completo.",
        "3": "Adicione o champignon e deixe cozinhar por alguns minutos.",
        "4": "Coloque o molho de tomate e deixe apurar por cerca de 10 minutos.",
        "5": "Por último, adicione o creme de leite, misture bem e sirva quente."
      }
    },
    {
      primeiroNome: "Pedro",
      ultimoNome: "Silva",
      fotoPerfil: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Nationale_oldtimerdag_Zandvoort_2010%2C_1981_RENAULT_5_TURBO%2C_JH-VZ-86_pic2.JPG/1280px-Nationale_oldtimerdag_Zandvoort_2010%2C_1981_RENAULT_5_TURBO%2C_JH-VZ-86_pic2.JPG",
      prato: "Peixe Assado",
      ingredientes: "Peixe, Limão, Sal, Pimenta, Azeite",
      descricao: "Uma opção saudável e saborosa para o almoço ou jantar. O peixe assado é fácil de preparar e fica muito gostoso.",
      preparacao: {
        "1": "Tempere o peixe com suco de limão, sal e pimenta a gosto.",
        "2": "Deixe marinar por cerca de 30 minutos.",
        "3": "Pré-aqueça o forno a 180°C.",
        "4": "Coloque o peixe em uma assadeira untada com azeite e leve ao forno por aproximadamente 30 minutos.",
        "5": "Retire do forno e sirva com acompanhamentos de sua preferência."
      }
    },
    {
      primeiroNome: "Maria",
      ultimoNome: "Santos",
      fotoPerfil: "https://www.standvirtual.com/blog/wp-content/uploads/2022/01/Carros-miticos-Rali-Peugeot-205-T16.jpg",
      prato: "Risoto de Cogumelos",
      ingredientes: "Arroz Arbóreo, Cogumelos, Vinho Branco, Caldo de Legumes, Queijo Parmesão",
      descricao: "Um prato sofisticado e saboroso, perfeito para impressionar os convidados. O risoto de cogumelos é cremoso e cheio de sabor.",
      preparacao: {
        "1": "Refogue os cogumelos em azeite até dourarem.",
        "2": "Adicione o arroz arbóreo e refogue por alguns minutos.",
        "3": "Deglaceie com vinho branco e deixe evaporar.",
        "4": "Adicione o caldo de legumes aos poucos, mexendo sempre, até o arroz ficar al dente.",
        "5": "Finalize com queijo parmesão ralado e sirva imediatamente."
      }
    },
    {
      primeiroNome: "Carlos",
      ultimoNome: "Gomes",
      fotoPerfil: "https://www.standvirtual.com/blog/wp-content/uploads/2021/10/Classicos-de-Rali-a-historia-do-Audi-quattro.jpg",
      prato: "Torta de Frango",
      ingredientes: "Frango Desfiado, Massa de Torta, Milho, Ervilha, Creme de Leite",
      descricao: "Uma torta deliciosa e nutritiva, perfeita para um lanche da tarde ou para levar em um piquenique. A torta de frango é fácil de fazer e muito versátil.",
      preparacao: {
        "1": "Refogue o frango desfiado com milho e ervilha.",
        "2": "Forre uma forma com parte da massa de torta.",
        "3": "Coloque o recheio sobre a massa.",
        "4": "Cubra com o restante da massa e pincele com ovo batido.",
        "5": "Leve ao forno preaquecido a 180°C por cerca de 30 minutos, ou até dourar."
      }
    }
  ];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/receita/:index' element={<Receita utilizadores={utilizadores}/>}></Route>
        <Route path='/verReceita/:index' element={<></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
