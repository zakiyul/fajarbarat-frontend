import {Link} from 'react-router-dom';
import Fb from '../assets/fb.png';
import Tw from '../assets/tw.png';
import Ig from '../assets/ig.png';
import Logo from '../assets/logo.png'

export default function Navbar(){
  return (
    <div id="componentNavbar">
      <section className="diatas-nav container-fluid">
      <div className="d-flex justify-content-between align-item-center p-2">
        <a
          href="https://play.google.com/store/apps/details?id=com.fajar.timur.ftimur"
          style={{color:"black"}}
          className="ml-5"
          >Download Aplikasi Mobile</a
        >
        <span
          >Follow Us On :
          <a href="#">
            <img src={Fb} alt="fb" className="ml-2 mr-3" />
          </a>
          <a href="#">
            <img src={Ig} alt="ig" className="mr-3" />
          </a>
          <a href="#">
            <img src={Tw} alt="tw" />
          </a>
        </span>
      </div>
      <div className="d-flex flex-row-reverse">
        </div>
    </section>

    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand ml-5" to="/">
          <img
            src={Logo}
            width="159.54"
            height="30"
            alt=""
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    </div>
  )
}