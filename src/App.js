import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import NotFound from './Components/Shared/NotFound/NotFound';
import Blog from './Components/Pages/Blog/Blog';
import About from './Components/Pages/About/About';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
