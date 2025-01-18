import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import './Footer.css'
import LOGO from "../../assets/header/LOGO 1.svg";

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-logo'>
        <Link to={ROUTES.HOME}>
          <img src={LOGO}></img>
        </Link>
      </div>
    </section>
  )
}

export default Footer