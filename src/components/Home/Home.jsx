import './Home.css'
import COMPUTER from "../../assets/home/computer.svg"
const Home = () => {
  return (
    <section className='home'>
      <div className='home-sale black'>BIG SALE 20%</div>
      <div className='home-main'>
          <div className='home-aside_title medium16'>THE BESTSELLER OF 2022</div>
          <div className='home-aside_text bold'>LENNON R2D2 WITH NVIDIA 5090 TI</div>
          <button className='btn'>Shop Now</button>
      </div>
      <div className='home-image'>
        <img src={COMPUTER} alt="computer" />
      </div>

    </section>
  )
}

export default Home
