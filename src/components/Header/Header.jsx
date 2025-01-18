import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <Link to={ROUTES.HOME}></Link>
        </div>
        Header
    </div>
  )
}

export default Header