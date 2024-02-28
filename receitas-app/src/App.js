import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Index from './components/Index';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/preparacao:index'></Route>
      </Routes>
    </div>
  );
}

export default App;
