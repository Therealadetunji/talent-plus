import React from 'react';
import './App.css';
import './fonts/Amazing-Kids.ttf';
import './fonts/Satoshi-Regular.ttf';
import img1 from './images/Frame 103.png';
import review from './images/Frame 101.png';
import vector1 from './images/Vector (4).png';
import vector2 from './images/Vector (5).png';
import vector3 from './images/Vector (3).png';
import outward from './images/arrow_outward.png';
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
import img3 from './images/third-image.png';
import icon5 from './images/Frame 131 (1).png';
import icon6 from './images/Frame 131 (2).png';
import icon7 from './images/Frame 131 (3).png';
import icon8 from './images/Frame 131 (4).png';
import star from './images/grade.png';
import time from './images/schedule.png';
import book from './images/menu_book.png';
import profilepic from './images/Frame 165.png';
import profilepic2 from './images/Frame 165 (1).png';
import profilepic3 from './images/Frame 165 (2).png';
import profilepic4 from './images/Frame 165 (3).png';
import profilepic5 from './images/Frame 165 (4).png';
import profilepic6 from './images/Frame 165 (5).png';
import pic1 from './images/picture (1).png';
import pic2 from './images/picture (2).png';
import pic3 from './images/picture (3).png';
import pic4 from './images/picture (4).png';
import pic5 from './images/picture (5).png';
import pic6 from './images/picture (6).png';
import dot from './images/Frame 182.png';
import dot2 from './images/Frame 183.png';
import img4 from './images/Frame 209.png';
import add from './images/add.png';
import facebook from './images/g10.png';
import twitter from './images/Twitter  svg.png';
import instagram from './images/Instagram svg.png';
import youtube from './images/YouTube svg.png';
import discord from './images/Discord svg.png';
import vector9 from './images/Vector (11).png';
import vector10 from './images/Vector (12).png';
import vector11 from './images/Vector (13).png';

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
              <div className="input-group mb-3 gap-4 buttons">
                <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center" type="button" id="button-addon1">
                  Get Started Now
                  <img src={outward} alt="outward" />
                </button>
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
              <div className="input-group mb-3 gap-4 view-button">
                <button className="btn btn-outline-secondary bg-primary d-flex justify-content-center align-items-center" type="button" id="button-addon1">View Courses</button>
              </div>
              <div className="d-flex gap-2 mb-2">
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
            <div className="col-md-6 mt-4">
              <div>
                <img src={reviews2} alt="reviews" className="reviews2" />
              </div>
              <img src={img2} alt="img" className="img2" />
              <i className="vector6">
                <img src={vector6} alt="vector" />
                <img src={vector8} alt="vector" className="vector8" />
              </i>
            </div>
          </div>
        </div>
      </section>

      {/* About Section 2 */}

      <section className="about-section-2">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-md-6">
              <i className="vector9">
                <img src={vector9} alt="vector" />
              </i>
              <h1 className="display-4 reasons">this is why we are best from others</h1>
              <p className="lead third-paragraph">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
              <div>
                <img src={img3} alt="img" className="img3" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-3 mt-5">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <i>
                        <img src={icon5} alt="icon5" />
                      </i>
                      <h3 className="card-title">experienced mentors</h3>
                      <p className="card-text">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <i>
                        <img src={icon6} alt="icon6" />
                      </i>
                      <h3 className="card-title">one-on-one meetings</h3>
                      <p className="card-text">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <i>
                        <img src={icon7} alt="icon7" />
                      </i>
                      <h3 className="card-title">one-on-one meetings</h3>
                      <p className="card-text">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <i>
                        <img src={icon8} alt="icon8" />
                      </i>
                      <h3 className="card-title">affordable prices</h3>
                      <p className="card-text">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                  </div>
                </div>
                <i>
                  <img src={vector10} alt="vector" className="vector10" />
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>

      { /* Courses */}

      <section className="courses">
        <div className="container-fluid p-5">
          <h1 className="display-4 courses-intro">browse our popular courses</h1>
          <p className="lead fourth-paragraph">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          <i>
            <img src={vector11} alt="vector" className="vector11" />
          </i>
          <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link bg-light" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All categories </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Design</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Development</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Marketing</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
                <div className="col">
                  <div className="card">
                    <img src={pic1} className="card-img-top" alt="pic1" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-little-title">Design</h5>
                        <div>
                          <span className="first-num">4.7k</span>
                          <i>
                            <img src={star} alt="star" />
                          </i>
                          <span className="second-num">(32.7k+)</span>
                        </div>
                      </div>
                      <h5 className="card-title mt-3">introduction to user research in ux design</h5>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <i>
                            <img src={time} alt="time" />
                          </i>
                          <span className="third-num">23hrs 50mins</span>
                        </div>
                        <div>
                          <i>
                            <img src={book} alt="book" />
                          </i>
                          <span className="first-words">15 lessons</span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <i>
                            <img src={profilepic} alt="profilepic" />
                          </i>
                          <span className="second-words">leonard victor</span>
                        </div>
                        <span className="fourth-num">
                          $15.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={pic2} className="card-img-top" alt="pic2" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-little-title-long">marketing</h5>
                        <div>
                          <span className="first-num">4.7k</span>
                          <i>
                            <img src={star} alt="star" />
                          </i>
                          <span className="second-num">(8.7k+)</span>
                        </div>
                      </div>
                      <h5 className="card-title mt-3">introduction to new marketing audience</h5>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <i>
                            <img src={time} alt="time" />
                          </i>
                          <span className="third-num">22hrs 30mins</span>
                        </div>
                        <div>
                          <i>
                            <img src={book} alt="book" />
                          </i>
                          <span className="first-words">22 lessons</span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <i>
                            <img src={profilepic2} alt="profilepic2" />
                          </i>
                          <span className="second-words">Jeffrey williams</span>
                        </div>
                        <span className="fourth-num">
                          $32.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={pic3} className="card-img-top" alt="pic3" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-little-title-long">development</h5>
                        <div>
                          <span className="first-num">4.7k</span>
                          <i>
                            <img src={star} alt="star" />
                          </i>
                          <span className="second-num">(12.7k+)</span>
                        </div>
                      </div>
                      <h5 className="card-title mt-3">introduction to html, css & bootstrap</h5>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <i>
                            <img src={time} alt="time" />
                          </i>
                          <span className="third-num">45hrs 50mins</span>
                        </div>
                        <div>
                          <i>
                            <img src={book} alt="book" />
                          </i>
                          <span className="first-words">55 lessons</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <i>
                            <img src={profilepic3} alt="profilepic3" />
                          </i>
                          <span className="second-words">claretta mason</span>
                        </div>
                        <span className="fourth-num">
                          $55.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={pic4} className="card-img-top" alt="pic4" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-little-title-long">development</h5>
                        <div>
                          <span className="first-num">4.7k</span>
                          <i>
                            <img src={star} alt="star" />
                          </i>
                          <span className="second-num">(32.7k+)</span>
                        </div>
                      </div>
                      <h5 className="card-title mt-3">introduction to javascript, git & GitHub</h5>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <i>
                            <img src={time} alt="time" />
                          </i>
                          <span className="third-num">30hrs 50mins</span>
                        </div>
                        <div>
                          <i>
                            <img src={book} alt="book" />
                          </i>
                          <span className="first-words">22 lessons</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <i>
                            <img src={profilepic4} alt="profilepic4" />
                          </i>
                          <span className="second-words">Jessica duke</span>
                        </div>
                        <span className="fourth-num">
                          $45.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={pic5} className="card-img-top" alt="pic5" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-little-title-long">marketing</h5>
                        <div>
                          <span className="first-num">4.7k</span>
                          <i>
                            <img src={star} alt="star" />
                          </i>
                          <span className="second-num">(4.7k+)</span>
                        </div>
                      </div>
                      <h5 className="card-title mt-3">introduction to outroom marketing analysis</h5>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <i>
                            <img src={time} alt="time" />
                          </i>
                          <span className="third-num">33hrs 50mins</span>
                        </div>
                        <div>
                          <i>
                            <img src={book} alt="book" />
                          </i>
                          <span className="first-words">26 lessons</span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <i>
                            <img src={profilepic5} alt="profilepic5" />
                          </i>
                          <span className="second-words">Samuel jacobs</span>
                        </div>
                        <span className="fourth-num">
                          $25.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={pic6} className="card-img-top" alt="pic6" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-little-title-long">marketing</h5>
                        <div>
                          <span className="first-num">4.7k</span>
                          <i>
                            <img src={star} alt="star" />
                          </i>
                          <span className="second-num">(15.7k+)</span>
                        </div>
                      </div>
                      <h5 className="card-title mt-3">introduction to live marketing analysis</h5>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <i>
                            <img src={time} alt="time" />
                          </i>
                          <span className="third-num">10hrs 50mins</span>
                        </div>
                        <div>
                          <i>
                            <img src={book} alt="book" />
                          </i>
                          <span className="first-words">32 lessons</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <div>
                          <i>
                            <img src={profilepic6} alt="profilepic6" />
                          </i>
                          <span className="second-words">adam smith</span>
                        </div>
                        <span className="fourth-num">
                          $25.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group mb-3 mt-5 d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-outline-secondary bg-primary text-light" id="button-addon3">explore all courses</button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}

      <section className="customer-reviews">
        <div className="container fluid p-5">
          <h1 className="display-4 text-center customers-intro">what our clients are saying</h1>
          <p className="lead text-center customers-paragraph">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          <div className="row mt-5">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <div className="card-body">
                    <p className="text">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                    <div className="d-flex">
                      <i>
                        <img src={profilepic2} alt="profilepic2" />
                      </i>
                      <div className="d-flex flex-column">
                        <span className="card-name">samuel fortune</span>
                        <span className="card-role">product designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center slider">
            <i>
              <img src={dot} alt="dot" />
            </i>
            <i>
              <img src={dot2} alt="dot2" />
            </i>
            <i>
              <img src={dot} alt="dot" />
            </i>
            <i>
              <img src={dot} alt="dot" />
            </i>
          </div>
        </div>
      </section>

      {/* Join our Community */}

      <section className="join-our-community">
        <div className="container-fluid p-5">
          <h3 className="text-center lead text-light community-intro">join our community</h3>
          <h1 className="display-4 text-center text-light community-title">Are you  ready to connect with the future talent of the tech world</h1>
          <h4 className="text-center lead text-light community-paragraph">meet up with other techstars and grow together</h4>
          <img src={img4} alt="img4" className="img4" />

          <div className="input-group mt-5 d-flex
          justify-content-center align-items-center
          community-btn-container
          "
          >
            <button className="btn btn-outline-light bg-light text-center community-btn" type="button" id="button-addon4">join our community</button>
          </div>
        </div>
      </section>

      {/* Questions */}

      <section className="questions">
        <div className="container-fluid p-5">
          <h1 className="text-center display-4 questions-intro">frequently asked questions</h1>
          <p className="lead text-center questions-paragraph">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          <div className="d-flex justify-content-start mt-5">
            <h3 className="free-trial lead">
              is there a free trial available?
            </h3>
          </div>
          <div className="d-flex justify-content-center">
            <p className="free-trial-paragraph lead">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.</p>
          </div>

          {/* Accordion */}

          <div className="wrapper mt-5">
            <div className="accordion">
              <div className="border mb-5" />
              <div className="item mb-5">
                <div className="accordion-item-header d-flex text-center">
                  <h3 className="questions-title lead">can i change my plan later?</h3>
                  <i>
                    <img src={add} alt="add" />
                  </i>
                </div>
              </div>
              <div className="border mb-5" />
              <div className="item mb-5">
                <div className="accordion-item-header d-flex text-center">
                  <h3 className="questions-title">are the courses lifetime?</h3>
                  <i>
                    <img src={add} alt="add" />
                  </i>
                </div>
              </div>
              <div className="border mb-5" />
              <div className="item mb-5">
                <div className="accordion-item-header d-flex text-center">
                  <h3 className="questions-title">do i get certified after taking courses?</h3>
                  <i>
                    <img src={add} alt="add" />
                  </i>
                </div>
              </div>
              <div className="border mb-5" />
              <div className="item mb-5">
                <div className="accordion-item-header d-flex text-center">
                  <h3 className="questions-title">how do i reach out to mentors?</h3>
                  <i>
                    <img src={add} alt="add" />
                  </i>
                </div>
              </div>
              <div className="border mb-5" />
              <div className="item mb-5">
                <div className="accordion-item-header d-flex text-center">
                  <h3 className="questions-title">do we get job ready after taking courses?</h3>
                  <i>
                    <img src={add} alt="add" />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="footer">
        <div className="container-fluid p-5">
          <div className="row row-footer">
            <div className="col-md-4">
              <span className="navbar-brand">
                Tech Time
              </span>
              <p className="lead footer-paragraph text-light mt-5">reach out to us on any of our social media networks</p>
              <div className="d-flex social-media-apps">
                <i>
                  <img src={facebook} alt="facebook" />
                </i>
                <i>
                  <img src={twitter} alt="twitter" />
                </i>
                <i>
                  <img src={instagram} alt="instagram" />
                </i>
                <i>
                  <img src={youtube} alt="youtube" />
                </i>
                <i>
                  <img src={discord} alt="discord" />
                </i>
              </div>
            </div>
            <div className="col-md-4 links-communities">
              <h3 className="footer-title display-4">Useful links</h3>
              <div className="links">
                <span className="footer-links lead">Home</span>
                <span className="footer-links lead">About</span>
                <span className="footer-links lead">Our Courses</span>
                <span className="footer-links lead">Our Team</span>
                <span className="footer-links lead">Testimonials</span>
                <span className="footer-links lead">Our community</span>
              </div>
            </div>
            <div className="col-md-4 links-communities">
              <h3 className="footer-title display-4">Community</h3>
              <div className="links">
                <h4 className="footer-links lead">Help centers</h4>
                <h4 className="footer-links lead">partners</h4>
                <h4 className="footer-links lead">suggestions</h4>
                <h4 className="footer-links lead">Blog</h4>
                <h4 className="footer-links lead">Newsletter</h4>
              </div>
            </div>
            <div className="col-md-4 subscribe">
              <h3 className="footer-title display-4">Subscribe Us</h3>
              <div className="d-flex">
                <div className="input-group mt-5 d-flex
                justify-content-center align-items-center
                community-btn-container
                "
                >
                  <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon4" />
                  <button className="btn btn-outline-light bg-primary text-light text-center community-btn" type="button" id="button-addon4">subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
