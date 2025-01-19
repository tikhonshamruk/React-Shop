import { useDispatch } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AppRoutes from './Routes/routes'
import { useEffect } from 'react'
import { getCategories } from './features/categories/categoriesSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  }, [dispatch])
 
  return (
    <div className='app'>
      <Header />
      
      <div className='container'>
        <Sidebar />
        {/* <AppRoutes /> */}
      </div>

      <Footer />
    </div>
  )
}

export default App
