
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Reviews/Reviews';
import Dashboard from './Dashboard/Dashboard';
import Blogs from './Blogs/Blogs';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
