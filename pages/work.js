import ImageAndi from '../public/images/andi-mcleish.jpg';
import ImageChrono from '../public/images/chronometer-app.jpg';
import ImageSeeker from '../public/images/image-seeker-app.jpg';
import ImageEast29 from '../public/images/east-29th.jpg';
import ImageFocusWP from '../public/images/focus-wp-gatsby.theme.jpg';

export default function work() {
  return (
    <div className='work _wrapper'>
      <div className='work__project-container'>
        <ul className='work__header'>
          <li className='work__header-item'>
            <span>Project</span>
          </li>
          <li className='work__header-item'>
            <span>Repository</span>
          </li>
        </ul>
        <ul className='work__list'>
          <li className='work__list-item'>
            <a href='https://www.focus-wp-gatsby-theme.com/' target='_blank'>
              Focus - Headless Wordpress Gatsby Theme
            </a>
            <a
              href='https://github.com/MichaelIrvine/focus-worpress-gatsby-theme'
              target='_blank'
            >
              github.com/MichaelIrvine/focus-worpress-gatsby-theme
            </a>
            <img className='work__list-item-image' src={ImageFocusWP}></img>
          </li>
          <li className='work__list-item'>
            <a href='https://east29th.com/' target='_blank'>
              East 29th
            </a>
            <a href='https://github.com/MichaelIrvine/East29th' target='_blank'>
              github.com/MichaelIrvine/East29th
            </a>
            <img className='work__list-item-image' src={ImageEast29}></img>
          </li>
          <li className='work__list-item'>
            <a href='https://andimcleish.com/' target='_blank'>
              Andi Mcleish Creative
            </a>
            <a
              href='https://github.com/MichaelIrvine/andi-mcleish'
              target='_blank'
            >
              github.com/MichaelIrvine/andi-mcleish
            </a>
            <img className='work__list-item-image' src={ImageAndi}></img>
          </li>
          <li className='work__list-item'>
            <a href='https://stop-watch-timer.now.sh/' target='_blank'>
              Chronometer App
            </a>
            <a
              href='https://github.com/MichaelIrvine/chronometer'
              target='_blank'
            >
              github.com/MichaelIrvine/chronometer
            </a>
            <img className='work__list-item-image' src={ImageChrono}></img>
          </li>
          <li className='work__list-item'>
            <a
              href='https://michaelirvine.github.io/image-seeker/'
              target='_blank'
            >
              Image Seeker App
            </a>
            <a
              href='https://github.com/MichaelIrvine/image-seeker'
              target='_blank'
            >
              github.com/MichaelIrvine/image-seeker
            </a>
            <img className='work__list-item-image' src={ImageSeeker}></img>
          </li>
        </ul>
      </div>
    </div>
  );
}
