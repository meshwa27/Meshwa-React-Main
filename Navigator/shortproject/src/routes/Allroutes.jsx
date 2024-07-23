import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../component/Login";
import Addproduct from "../component/Addproduct";
import Home from '../component/Home';
import Product from '../component/Product';
import Description from '../component/Description';
import Privatepage from '../component/privatepage'

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={
         <Privatepage>
          <Product/>
          </Privatepage>
          
          
          }></Route>
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/singlepage/:id' element={<Description />}></Route>
        <Route path='*' element={<h1>Not a found page</h1>} ></Route>

      </Routes>
    </div>
  )
}

export default Allroutes;