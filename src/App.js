import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Layout from './components/Layout';
import About from './pages/About';
import ProductDetails from "./pages/ProductDetails";



export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />}>
          <Route index element={<p>Выберите продукт слева</p>} />
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}