import React from 'react';
import './App.css';
import './fonts/Amazing-Kids.ttf';
import './fonts/Satoshi-Regular.ttf';
import img1 from './images/Frame 103.png';
import review from './images/Frame 101.png';
import vector1 from './images/Vector (4).png';
import vector2 from './images/Vector (5).png';
import vector3 from './images/Vector (3).png';
import vector4 from './images/Vector (6).png';
import partners from './images/Frame 126.png';
import img2 from './images/Frame 122.png';
import vector5 from './images/Vector (7).png';
import reviews2 from './images/Frame 113.png';
import vector6 from './images/Vector (8).png';
import vector7 from './images/Vector (9).png';
import vector8 from './images/Vector (10).png';
import icon from './images/Frame 110.png';
import icon2 from './images/Frame 110 (1).png';
import icon3 from './images/Frame 110 (2).png';
import icon4 from './images/Frame 110 (3).png';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid m-4">
          <span className="navbar-brand mb-0 h2">Tech Time</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Community</a>
              </li>
              <button type="button" className="btn btn-outline-light bg-light">Enroll Now</button>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container-fluid p-5">
          <i className="vector1">
            <img src={vector1} alt="vector" />
          </i>
          <i className="vector2 ">
            <img src={vector2} alt="vector" />
          </i>
          <i className="vector3">
            <img src={vector3} alt="vector" />
          </i>
          <div className="row">
            <div className="col-md-6 intro">
              <h1 className="display-4 first-intro">Grow your skills to advance your career path</h1>
              <p className="lead first-paragraph">build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
              <div className="input-group mb-3 gap-4">
                <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center" type="button" id="button-addon1">Get Started Now</button>
                <button className="btn btn-outline-light bg-light d-flex justify-content-center align-items-center" type="button" id="button-addon2">Enroll Now</button>
              </div>
              <div className="mb-5">
                <img src={review} alt="reviews" />
              </div>
              <i className="vector4 d-flex justify-content-end">
                <img src={vector4} alt="vector" />
              </i>
            </div>
            <div className="col-md-6">
              <img src={img1} alt="img" className="img1" />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="partnership">
        <div className="container-fluid">
          <img src={partners} alt="partners" className="partnership" />
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <div className="container-fluid p-5">
          <div className="row">
            <i className="vector7 d-flex justify-content-end">
              <img src={vector7} alt="vector" />
            </i>
            <i className="vector5">
              <img src={vector5} alt="vector" />
            </i>
            <div className="col-md-6">
              <h1 className="display-4 about-intro">high quality video, audio & live classes</h1>
              <p className="lead second-paragraph">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
              <div className="input-group mb-3 gap-4">
                <button className="btn btn-outline-secondary bg-primary d-flex justify-content-center align-items-center" type="button" id="button-addon1">View Courses</button>
              </div>
              <div className="d-flex gap-2 mb-2 ">
                <div className="card card-1">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <i className="icons">
                      <img src={icon} alt="icon" />
                    </i>
                    Audio Classes
                  </div>
                </div>
                <div className="card card-2 d-flex justify-content-center align-items-center">
                  <div className="card-body">
                    <i>
                      <img src={icon2} alt="icon" />
                    </i>
                    Live Classes
                  </div>
                </div>
              </div>

              <div className="d-flex gap-4">
                <div className="card card-3">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <i>
                      <img src={icon3} alt="icon" />
                    </i>
                    Recorded Classes
                  </div>
                </div>
                <div className="card card-4">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <i>
                      <img src={icon4} alt="icon" />
                    </i>
                    50+ Classes
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-2">
              <div>
                <img src={reviews2} alt="reviews" className="reviews2" />
              </div>
              <img src={img2} alt="img" className="img2" />
              <i className="vector6">
                <img src={vector6} alt="vector" />
              </i>
            </div>
            <i className="vector8 d-flex justify-content-end">
              <img src={vector8} alt="vector" className="vector8" />
            </i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
