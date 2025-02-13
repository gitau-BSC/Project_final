import { Link } from 'react-router-dom';
import logo from './Assets/logo.jpg';

const Navbar = () => {
    return (
       <div>
           <section className="header">
                <div className="nav-bg">
                        <nav className="navbar navbar-expand-lg">
                           <div className="container-fluid">
                           <img src={ logo } alt="" className="navbar-brand logo" />
                           <h2 className="main-heading">LAYSON HOSTELS</h2>
                           <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                               <span className="navbar-toggler-icon"></span>
                          </button>
                           <div className="nav-links collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                       <Link className="navTxt nav-link" to="/">Home</Link>
                                   </li>
                                    <li className="nav-item">
                                       <Link className="navTxt nav-link" to="/about">ABOUT</Link>
                                  </li>
                                   <li className="nav-item">
                                       <Link className="navTxt nav-link" to="#contact">CONTACT</Link>
                                   </li>
                                   <li className="nav-item">
                                      <Link className="navTxt nav-link" to="/auth">LOGIN</Link>
                                  </li>
                              </ul>
                          </div>
                          </div>
                          </nav>                 
                      </div>
                      <div className="text-box">
                          <h1>Welcome to Layson's</h1>
                          <p>A Serene place where quality is our Top priority.</p>
                          <Link to="#about" className="hero-btn">Visit to know all about us.</Link>
                      </div>
          </section>
      </div>
    )
}

export default Navbar;
