import ImageAndi from "../public/images/andi-mcleish.jpg";
import ImageChrono from "../public/images/chronometer-app.jpg";
import ImageSeeker from "../public/images/image-seeker-app.jpg";
import ImageMiPhoto from "../public/images/michael-irvine-design-photo.jpg";
import ImageMiSandbox from "../public/images/michael-irvine-design-sandbox.jpg";


export default function work() {
  return (
    <div className="work _wrapper">
      <div className="work__project-container">
        <ul className="work__header">
          <li className="work__header-item">
            <span>Project</span>
          </li>
          <li className="work__header-item">
            <span>Repository</span>
          </li>
        </ul>
        <ul className="work__list">
          <li className="work__list-item">
            <a href="https://andimcleish.com/" target="_blank" >Andi Mcleish Creative</a>
            <a href="https://github.com/MichaelIrvine/andi-mcleish" target="_blank" >github.com/MichaelIrvine/andi-mcleish</a>
            <img className="work__list-item-image" src={ImageAndi}></img>
          </li>
          <li className="work__list-item">
            <a href="https://stop-watch-timer.now.sh/" target="_blank" >Chronometer App</a>
            <a href="https://github.com/MichaelIrvine/chronometer" target="_blank" >github.com/MichaelIrvine/chronometer</a>
            <img className="work__list-item-image" src={ImageChrono}></img>
          </li>
          <li className="work__list-item">
            <a href="https://michaelirvine.github.io/image-seeker/" target="_blank" >Image Seeker App</a>
            <a href="https://github.com/MichaelIrvine/image-seeker" target="_blank" >github.com/MichaelIrvine/image-seeker</a>
            <img className="work__list-item-image" src={ImageSeeker}></img>
          </li>
          <li className="work__list-item">
            <a href="http://photo.michaelirvinedesign.ca/" target="_blank" >Michael Irvine Photography</a>
            <a href="https://github.com/MichaelIrvine/mfi-portfolio-photo" target="_blank" >github.com/MichaelIrvine/mfi-portfolio-photo</a>
            <img className="work__list-item-image" src={ImageMiPhoto}></img>
          </li>
          <li className="work__list-item">
            <a href="http://sandbox.michaelirvinedesign.ca/" target="_blank" >Michael Irvine Sandbox</a>
            <a href="https://github.com/MichaelIrvine/mid-sandbox" target="_blank" >github.com/MichaelIrvine/mid-sandbox</a>
            <img className="work__list-item-image" src={ImageMiSandbox}></img>
          </li>
        </ul>
      </div>
    </div>
  );
}
