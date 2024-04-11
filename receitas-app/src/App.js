import './styles/App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Header from './pages/Header';
import Index from './pages/Index';
import Receita from './pages/Receita';
import Perfil from './pages/Perfil';

import ProtectedRoute from "./pages/ProtetectRoute"
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function Logout() {
  localStorage.clear();
  return <Navigate to={"/login"} />
}
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {
/* 
      <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='register' element={<RegisterAndLogout />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
 */

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/receita/:index' element={<Receita />} />
        <Route path='/perfil/:index' element={<Perfil />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
