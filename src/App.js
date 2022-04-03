import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' ></Route>
      </Routes>
    </div>
  );
}

export default App;
