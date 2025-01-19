import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import './Footer.css'
import LOGO from "../../assets/header/LOGO 1.svg";
import YOUTUBE from "../../assets/footer/youtube.svg"
import FACEBOOK from "../../assets/footer/facebook.svg"
import INSTAGRAM from "../../assets/footer/instagram.svg"

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-logo'>
        <Link to={ROUTES.HOME}>
          <img src={LOGO}></img>
        </Link>
      </div>
      <div className='medium'>
        Developed by <a href="http://youtube.com/Tomkovich">Tomkovich</a>
      </div>
      <div className='footer-items'>
        <a href="https://youtube.com"><img src={YOUTUBE} alt="youtube" /></a>
        <a href="https://facebook.com"><img src={FACEBOOK} alt="facebook" /></a>
        <a href="htpps://instagram.com"><img src={INSTAGRAM} alt="instagram" /></a>
      </div>
    </section>
  )
}

export default Footer