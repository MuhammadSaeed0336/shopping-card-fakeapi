import { Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import Header from './component/Header';
import Cart from './component/Cart'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path ='/' element={<Home />}/>
      <Route path ='/cart' element={<Cart />}/>
    </Routes>
    </>
  );
}

export default App;
