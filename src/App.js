import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';
import Login from './Pages/Login';
import './App.css';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={handleLogin}>{login ? 'Logout' : 'Login'}</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post loggedIn={login} />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={<Profile login={login} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
