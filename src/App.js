import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';

import Header from './component/Header/Header';
import Register from './component/Register/Register';
import LoGin from './component/LoGin/LoGin';
import Products from './component/Products/Products';
import Orders from './component/Orders/Orders';
import RequirAuth from './component/RequirAuth/RequirAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={

          <RequirAuth>
            <Products></Products>

          </RequirAuth>


        }></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<LoGin></LoGin>}></Route>
        <Route path='/orders' element={
          <RequirAuth>
            <Orders></Orders>
          </RequirAuth>


        }></Route>


      </Routes>

    </div>
  );
}

export default App;
