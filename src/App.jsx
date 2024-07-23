import Layout from './components/layout/Layout'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import data from './data/data';

function App() {

  console.log(data)


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
