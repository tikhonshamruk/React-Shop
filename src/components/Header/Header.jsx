import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import './Header.css'
import LOGO from "../../assets/header/LOGO 1.svg";
import LOGO_QUEST from "../../assets/header/Vector.svg"; 
import LOOP from "../../assets/header/Vector (1).svg"
import HEART from "../../assets/header/Vector (2).svg"
import CART from "../../assets/header/Vector (3).svg"


const Header = () => {
  return (
    <section className="header">
        <div className="logo">
            <Link to={ROUTES.HOME}>
              <img src={LOGO} alt="stuff" />
            </Link>
        </div>
        <div className="logo-guest">
          <div className="logo-guest_pic">
            <img src={LOGO_QUEST} alt="" />
          </div>
          <span className="regular">Yana Tamkovich</span>
        </div>
        
        <form className="header-form">
            <img src={LOOP} alt="loop" />
            <input type="search" className="regular" placeholder="Search for anything..." />
        </form>

        <div className="header-items">
          <Link to={ROUTES.HOME}>
            <img src={HEART} alt="heart" />
          </Link>
          <Link className="header-items_link" to={ROUTES.CART}>
            <img src={CART} alt="carts" />
            <span className="header-items_carts">5</span>
          </Link>
        </div>
    </section>
  )
}

export default Header