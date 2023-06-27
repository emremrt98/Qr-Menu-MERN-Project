import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Food from './pages/food/Food';
import Sign from './pages/sign/Sign';
import Order from './pages/order/Order';
import Menu from './pages/menu/Menu';
import './styles/global.scss';
import './styles/main.scss';
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/food' element={<Food />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
      </Routes>
    </div>
  );
}

export default App;
