import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AppRoutes from './Routes/routes'
import { useEffect } from 'react'
import { getCategories } from './features/categories/categoriesSlice'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import { getProducts } from './features/products/productsSlice'

function App() {

  const dispatch = useDispatch();

  const {list} = useSelector(({products})=>products)

  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts())
  }, [dispatch])
 
  return (
    <div className='app'>
      <Header />
      
      <div className='container'>
        <Sidebar />
        <Home />
        {/* <AppRoutes /> */}
      </div>

      <div className='wrapper'>
        <Products products={list} amount={5} title="Trending"/>
      </div>

      <Footer />
    </div>
  )
}

export default App
