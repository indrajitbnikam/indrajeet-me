import './home.scss';
import indrajeetImage from '../../assets/images/indrajeet_pic.jpg';

const HomePage = () => (
  <>
    <div className='intro section'>
      <div className='intro-image'>
        <div className='image-container'>
          <img src={indrajeetImage} alt='' />
        </div>
      </div>
      <div className='intro-description'>
        <div className='description-container'>
          <h2 className='description-title'>Namaste,</h2>
          <p className='description-text'>I am a Passionate Full-Stack Developer with experience in following technologies.</p>
          <div className='description-logos'>
            <span><img src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/html5.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/css3.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/sass-1.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/nodejs-1.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/aws-2.svg' alt='' /></span>
            <span><img src='https://cdn.worldvectorlogo.com/logos/firebase-1.svg' alt='' /></span>
          </div>
          <p className='description-text'>I am also huge fan of beautifully designed products and hence go extra mile to achieve the same.</p>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;