import './footer.scss';
import fullyUnderstood from '../../assets/fu-icon.png';
import { ReactComponent as HashnodeLogo } from '../../assets/hashnode.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';
import { ReactComponent as XingLogo } from '../../assets/xing.svg';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import { ReactComponent as StackOverflowLogo } from '../../assets/stack-overflow.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';

const Footer = () => {
  const openLink = (link: string) => {
    window.open(link, '_blank');
  }

  return (
  <div className='footer-container'>
    <div className='footer-social-media'>
      <div className='footer-links'>
        <span onClick={() => openLink('https://hashnode.com/@indrajitbnikam')}>
          <HashnodeLogo className='icon' />
        </span>
        <span onClick={() => openLink('https://fullyunderstood.com/author/indrajitbnikam/')}>
          <img src={fullyUnderstood} alt='Fullyunderstood logo' className='icon'/>
        </span>
        <span onClick={() => openLink('https://github.com/indrajitbnikam')}>
          <GithubLogo className='icon'/>
        </span>
        <span onClick={() => openLink('https://stackoverflow.com/users/9792373/indrajeet?tab=profile')}>
          <StackOverflowLogo className='icon'/>
        </span>
        <span onClick={() => openLink('https://www.linkedin.com/in/indrajeet-nikam-3737a8101/')}>
          <LinkedinLogo className='icon'/>
        </span>
        <span onClick={() => openLink('https://www.xing.com/profile/Indrajeet_Nikam2/cv')}>
          <XingLogo className='icon'/>
        </span>
        <span onClick={() => openLink('https://twitter.com/indrajeet_nikam')}>
          <TwitterLogo className='icon'/>
        </span>
      </div>
    </div>
    <p className='footer-middle-msg'>
      Created using react 💖
    </p>
    <div className='footer-download-resume'>
      <button className='download-button' onClick={() => openLink('https://drive.google.com/file/d/17ysiokCc8iKnTkmsM11yL73U3VkF04ML/view?usp=sharing')}>
        Resumé
      </button>
    </div>
  </div>
)};

export default Footer;