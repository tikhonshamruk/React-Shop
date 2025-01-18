import { Route, Routes } from "react-router-dom"
import Home from "../components/Home/Home"

const AppRoutes = () =>{
    return (
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
    )
}

export default AppRoutes