import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { useEffect } from 'react'
import { getCategories } from './features/categories/categoriesSlice'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import { filterByPrice, getProducts } from './features/products/productsSlice'
import Categories from './components/Categories/Categories'
import AppRoutes from './Routes/routes'
import { Outlet } from 'react-router-dom'

function App() {

  const dispatch = useDispatch();

  const productss = useSelector((state)=> state.products.productss)
  const categories = useSelector((state)=> state.categories.list)
  const filtered = useSelector((state)=> state.products.filtered)
  // const categories = useSelector((state)=> state.categories.value)

  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts())
  }, [dispatch])

  useEffect(()=>{
    if(!productss.length) return;
    dispatch(filterByPrice(30));
  },[productss.length])
 
  return (
    <div className='app'>
      <Header />
      
      <div className='container'>
        <Sidebar />
        <Home />

      </div>

      <div className='wrapper'>
        <Products products={productss} amount={5} title="Trending"/>
        <Categories categories={categories} amount={5} title="Worth seeing"/>
        <Products products={filtered} amount={5} title="Less than 100$"/>
        {/* <Categories /> */}

      </div>

      <Footer />
      <Outlet />
    </div>
  )
}

export default App
