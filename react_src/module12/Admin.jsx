import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row  py-2" style={{ backgroundColor: '#EFF5FF' }}>
                    <div className="col-sm-6 ps-5 ">
                        <i className="fa fa-map-marker text-info me-3"><span className="text-black-50"> 123 Street, New York, USA
                        </span></i>
                        <i className="fa fa-clock-o text-info"><span className="text-black-50"> Mon - Fri : 09.00 AM - 09.00
                            PM</span></i>
                    </div>
                    <div className=" offset-sm-2 col-sm-4  text-center">
                        <i className="fa fa-phone text-info me-2"><span className="text-black-50">+012 345 6789 </span></i>
                        <a href="#" className="rounded-circle btn btn-sm-square bg-white text-info me-1 "><i className="fa fa-facebook-official " /></a>
                        <a href="#" className="rounded-circle btn btn-sm-square bg-white text-info me-1 "><i className="fa fa-twitter-square " /></a>
                        <a href="#" className="rounded-circle btn btn-sm-square bg-white text-info me-1 "><i className="	fa fa-linkedin-square " /></a>
                        <a href="#" className="rounded-circle btn btn-sm-square bg-white text-info me-1 "><i className="fa fa-instagram " /></a>
                    </div>
                </div>
                {/*navbar start*/}
                <div className="row sticky-top bg-white">
                    <div className="col-sm-10 ">
                        <nav className="navbar navbar-expand-sm">
                            <a href="#" className="display-6" style={{ color: '#0463FA' }}><i className="fa fa-hospital-o ">
                                <b>Klinic</b></i></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse  justify-content-end" id="collapsibleNavbar">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">HOME</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/user">ABOUT</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/table">SERVICE</NavLink>
                                    </li>
                                    {/* Dropdown */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">
                                            PAGE LINK
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Link 1</a>
                                            <a className="dropdown-item" href="#">Link 2</a>
                                            <a className="dropdown-item" href="#">Link 3</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-2 d-grid">
                        <button type="button" className="btn btn-primary btn-block">APPOIMMENT</button>
                    </div>
                </div>
                {/*navbar end*/}
                <br />
                {/*mainbar01 start*/}
                <div className="row" style={{ backgroundColor: '#0463FA' }}>
                    <div className="col-sm-6  text-white " style={{ padding: '150px 50px 100px 50px' }}>
                        <h1>Good Health Is The Root Of All Heppiness</h1>
                        <br />
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-sm-4">
                                <h4>123</h4>
                                <p>Expert Doctors</p>
                            </div>
                            <div className="col-sm-4">
                                <h4>1234</h4>
                                <p>Medical Stuffs</p>
                            </div>
                            <div className="col-sm-4">
                                <h4>12345</h4>
                                <p>Total Patients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div id="demo2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="image/carousel-1.jpg" width="100%" />
                                    <div className="carousel-caption text-center">
                                        <h1>Cardiology</h1>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="image/carousel-2.jpg" width="100%" />
                                    <div className="carousel-caption">
                                        <h3>Neurology</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="image/carousel-3.jpg" width="100%" />
                                    <div className="carousel-caption">
                                        <h3>CAROUSEL</h3>
                                    </div>
                                </div>
                            </div>
                            <ul className="carousel-indicators">
                                <li data-bs-target="#demo2" data-bs-slide-to={0} className="active" />
                                <li data-bs-target="#demo2" data-bs-slide-to={1} />
                                <li data-bs-target="#demo2" data-bs-slide-to={2} />
                            </ul>
                            <a className="carousel-control-prev" href="#demo2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" />
                            </a>
                            <a className="carousel-control-next" href="#demo2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                {/*mainbar01 end*/}
                <br />
                <br />
                <div className="container">
                    {/*mainbar02 start*/}
                    <div className="row">
                        <div className="col-sm-6 text-end" style={{ position: 'relative' }}>
                            <img src="image/about-1.jpg" alt width="75%" />
                            <div style={{ position: 'absolute', top: '40%' }} className="text-start ">
                                <img src="image/about-2.jpg" width="50%" className="img-thumbnail" />
                            </div>
                        </div>
                        <div className="col-sm-6 p-5">
                            <h2>Why You Should Trust Us? Get Know About Us!</h2>
                            <br />
                            <div className="text-black-50">
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                                    Clita
                                    erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <br />
                                <p>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam
                                    ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            </div>
                            <br />
                            <i className="	fa fa-check-circle-o text-info"><span className="text-black-50"> Quality health care</span>
                            </i>
                            <br /><br />
                            <i className="	fa fa-check-circle-o text-info"><span className="text-black-50"> Only Qualified
                                Doctors</span>
                            </i>
                            <br /><br />
                            <i className="	fa fa-check-circle-o text-info"><span className="text-black-50"> Medical Research
                                Professionalse</span> </i>
                            <br /><br />
                            <button type="button" className="btn btn-primary ps-4 pe-4">Read More</button>
                        </div>
                    </div>
                    {/*mainbar02 end*/}
                    {/*icon mainbar start*/}
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2>Health Care Solutions</h2>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-4  p-4">
                            <div className="card p-5" style={{ backgroundColor: '#EFF5FF' }}>
                                <div className=" text-start">
                                    <i className="fa fa-heartbeat rounded-circle btn btn-sm-square bg-white" style={{ width: '20%', fontSize: '130%', color: '#0463FA' }} />
                                </div>
                                <br />
                                <h5>Cardiology</h5>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4  p-4">
                            <div className="card p-5" style={{ backgroundColor: '#EFF5FF' }}>
                                <div className=" text-start">
                                    <i className="fa fa-hospital-o rounded-circle btn btn-sm-square bg-white" style={{ width: '20%', fontSize: '130%', color: '#0463FA' }} />
                                </div>
                                <br />
                                <h5>Pulmonary</h5>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4  p-4">
                            <div className="card p-5" style={{ backgroundColor: '#EFF5FF' }}>
                                <div className=" text-start">
                                    <i className="fa fa-wheelchair rounded-circle btn btn-sm-square bg-white" style={{ width: '20%', fontSize: '130%', color: '#0463FA' }} />
                                </div>
                                <br />
                                <h5>Neurology</h5>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4  p-4">
                            <div className="card p-5" style={{ backgroundColor: '#EFF5FF' }}>
                                <div className=" text-start">
                                    <i className="fa fa-heartbeat text-info rounded-circle btn btn-sm-square bg-white" style={{ width: '20%', fontSize: '130%', color: '#0463FA' }} />
                                </div>
                                <br />
                                <h5>Orthopedics</h5>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4  p-4">
                            <div className="card p-5" style={{ backgroundColor: '#EFF5FF' }}>
                                <div className=" text-start">
                                    <i className="fa fa-hospital-o  text-info rounded-circle btn btn-sm-square bg-white" style={{ width: '20%', fontSize: '130%', color: '#0463FA' }} />
                                </div>
                                <br />
                                <h5>Dental Surgery</h5>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4  p-4">
                            <div className="card p-5" style={{ backgroundColor: '#EFF5FF' }}>
                                <div className=" text-start">
                                    <i className="fa fa-wheelchair text-info rounded-circle btn btn-sm-square bg-white" style={{ width: '20%', fontSize: '130%', color: '#0463FA' }} />
                                </div>
                                <br />
                                <h5>Laboratory</h5>
                                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*icon mainbar end*/}
                <br />
                <br />
                {/*icon mainbar02 start*/}
                <div className="row " style={{ backgroundColor: '#0463FA', color: 'white' }}>
                    <div className="col-sm-1 " />
                    <div className="  col-sm-5  p-5">
                        <h3>Why Choose Us</h3>
                        <br />
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                            ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p><br />
                        <div className="row">
                            <div className="col-sm-6 d-flex p-3">
                                <div className="rounded-circle btn btn-sm-square bg-white " style={{ color: '#0463FA', width: '25%', fontSize: '150%', height: '75%' }}>
                                    <i className="fa fa-location-arrow"> </i>
                                </div>
                                <div className="ms-3">
                                    <h5>DOCTOR</h5>
                                    <p>Experience</p>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex p-3">
                                <div className="rounded-circle btn btn-sm-square bg-white " style={{ color: '#0463FA', width: '25%', fontSize: '150%', height: '75%' }}>
                                    <i className="fa fa-commenting-o"> </i>
                                </div>
                                <div className="ms-3">
                                    <h5>Quality</h5>
                                    <p>Services</p>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex p-3">
                                <div className="rounded-circle btn btn-sm-square bg-white " style={{ color: '#0463FA', width: '25%', fontSize: '150%', height: '75%' }}>
                                    <i className="fa fa-check"> </i>
                                </div>
                                <div className="ms-3">
                                    <h5>Positive</h5>
                                    <p>Consultation</p>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex p-3">
                                <div className="rounded-circle btn btn-sm-square bg-white " style={{ color: '#0463FA', width: '25%', fontSize: '150%', height: '75%' }}>
                                    <i className="	fa fa-headphones"> </i>
                                </div>
                                <div className="ms-3">
                                    <h5>24 Hours</h5>
                                    <p>Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src="image/feature.jpg" alt width="100%" />
                    </div>
                </div>
                {/*icon mainbar02 end*/}
                {/*card start*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center p-2">
                            <h2>Our Experience Doctors</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 p-3">
                            <div className="card text-center  ">
                                <img src="image/team-1.jpg" className="card-img-top" width="100%" />
                                <br />
                                <h3 className="card-title">Doctor Name</h3>
                                <p className="card-text">Department</p><br />
                            </div>
                        </div>
                        <div className="col-sm-3 p-3">
                            <div className="card text-center ">
                                <img src="image/team-2.jpg" className="card-img-top" width="100%" />
                                <br />
                                <h3 className="card-title">Doctor Name</h3>
                                <p className="card-text">Department</p><br />
                            </div>
                        </div>
                        <div className="col-sm-3 p-3">
                            <div className="card text-center ">
                                <img src="image/team-3.jpg" className="card-img-top" width="100%" />
                                <br />
                                <h3 className="card-title">Doctor Name</h3>
                                <p className="card-text">Department</p><br />
                            </div>
                        </div>
                        <div className="col-sm-3 p-3">
                            <div className="card text-center ">
                                <img src="image/team-4.jpg" className="card-img-top" width="100%" />
                                <br />
                                <h3 className="card-title">Doctor Name</h3>
                                <p className="card-text">Department</p><br />
                            </div>
                        </div>
                    </div>
                    {/*card end*/}
                    <br />
                    <br />
                    <br />
                    {/*form start*/}
                    <div className="row">
                        <div className="col-sm-6 p-3">
                            <h2>Make An Appointment To Visit Our Doctor</h2>
                            <br />
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                                erat
                                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row p-4">
                                <div className="col-sm-12 d-flex p-5 " style={{ backgroundColor: '#EFF5FF' }}>
                                    <div>
                                        <i className="	fa fa-phone rounded-circle btn btn-sm-square bg-white " style={{ fontSize: '180%', color: '#0463FA' }} />
                                    </div>
                                    <div className=" ms-3">
                                        <p>Call Us Now</p>
                                        <h5>+012 345 6789</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-4">
                                <div className="col-sm-12 p-5 d-flex" style={{ backgroundColor: '#EFF5FF' }}>
                                    <div>
                                        <i className="	fa fa-inbox rounded-circle btn btn-sm-square bg-white " style={{ fontSize: '180%', color: '#0463FA' }} />
                                    </div>
                                    <div className="ms-3">
                                        <p>Mail Us Now</p>
                                        <h4>info@example.com</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 p-3" style={{ backgroundColor: '#EFF5FF' }}>
                            <form>
                                <div className="row p-3">
                                    <div className="col-sm-6 p-1">
                                        <input type="text" className="form-control px-3 py-3" placeholder="Your Name" />
                                    </div>
                                    <div className="col-sm-6 p-1">
                                        <input type="text" className="form-control px-3 py-3" placeholder="Your Email" name="email" />
                                    </div>
                                    <br />
                                    <br />
                                    <div className="col-sm-6 p-1">
                                        <input type="number" className="form-control px-3 py-3" placeholder="Your Mobile" />
                                    </div>
                                    <div className=" col-sm-6 form-group p-1">
                                        <select className="form-select mt-3 px-3 py-3">
                                            <option>Choose Your Doctor</option>
                                            <option>Doctor 1</option>
                                            <option>Doctor 2</option>
                                            <option>Doctor 3</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="col-sm-6 p-1">
                                        <input type="text" className="form-control px-3 py-3" placeholder="Choose Date" />
                                    </div>
                                    <div className="col-sm-6 p-1">
                                        <input type="text" className="form-control px-3 py-3" placeholder="Choose Time" />
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="col-sm-12 p-1 mb-2">
                                        <textarea className="form-control py-4" placeholder="Describe Your Problem" defaultValue={""} />
                                    </div><br />
                                    <div className="d-grid col-sm-12 p-1">
                                        <button type="button" className="btn btn-primary btn-block py-3">Book Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*form end*/}
                    <br />
                    <br />
                    {/* Slideshow start */}
                    <div className="row">
                        <div className="col-sm-12 text-center p-2">
                            <h1>What Say Our Patients!</h1>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="offset-sm-3 col-sm-6">
                            <div id="demo2" className="carousel slide" data-bs-ride="carousel">
                                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active ">
                                            <div className=" text-center">
                                                <img src="image/testimonial-1.jpg" width="25%" className="rounded-circle" />
                                            </div>
                                            <br />
                                            <div className="text-center text-white p-4" style={{ backgroundColor: '#0463FA', borderRadius: 10 }}>
                                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                                    diam
                                                    et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                                    magna dolore erat amet</p>
                                                <h4>Patient Name</h4>
                                                <i>profession</i>
                                            </div>
                                        </div>
                                        <div className="carousel-item  ">
                                            <div className=" text-center">
                                                <img src="image/testimonial-2.jpg" width="25%" className="rounded-circle" />
                                            </div>
                                            <br />
                                            <div className="text-center  text-white p-4" style={{ backgroundColor: '#0463FA', borderRadius: 10 }}>
                                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                                    diam
                                                    et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                                    magna dolore erat amet</p>
                                                <h4>Patient Name</h4>
                                                <i>profession</i>
                                            </div>
                                        </div>
                                        <div className="carousel-item active ">
                                            <div className=" text-center">
                                                <img src="image/testimonial-3.jpg" width="25%" className="rounded-circle" />
                                            </div>
                                            <br />
                                            <div className="text-center text-white p-4" style={{ backgroundColor: '#0463FA', borderRadius: 10 }}>
                                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                                    diam
                                                    et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                                    magna dolore erat amet</p>
                                                <h4>Patient Name</h4>
                                                <i>profession</i>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#demo" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" />
                                    </a>
                                    <a className="carousel-control-next" href="#demo" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slideshow end*/}
                <br />
                <br />
                {/*footer start*/}
                <div className="row ">
                    <div className="col-sm-3 text-start p-5 footer">
                        <h5>Address</h5>
                        <i className="fa fa-map-marker"> 123 Street, New York, USA</i><br />
                        <i className="fa fa-phone"> +012 345 67890</i><br />
                        <i className="fa fa-envelope"> info@example.com </i><br />
                        <br />
                        <i className="	fa fa-youtube-play rounded-circle btn btn-sm-square me-1 border border-white text-white" />
                        <i className="fa fa-twitter-square rounded-circle btn btn-sm-square me-1 border border-white text-white" />
                        <i className="fa fa-linkedin-square rounded-circle btn btn-sm-square me-1 border border-white text-white" />
                        <i className="fa fa-instagram rounded-circle btn btn-sm-square me-1 border border-white text-white" />
                    </div>
                    <div className="col-sm-3  text-start p-5 footer">
                        <h5>Services</h5>
                        <a href className="btn text-white">&gt;Cardiology</a><br />
                        <a href className="btn text-white">&gt;Pulmonary</a><br />
                        <a href className="btn text-white">&gt;Neurology</a><br />
                        <a href className="btn text-white">&gt;Orthopedics</a><br />
                        <a href className="btn text-white">&gt;Laboratory</a>
                    </div>
                    <div className="col-sm-3 text-start p-5 footer">
                        <h5>Quick Links</h5>
                        <a href className="btn text-white">&gt;About Us</a><br />
                        <a href className="btn text-white">&gt;Contact Us</a><br />
                        <a href className="btn text-white">&gt;Our Services</a><br />
                        <a href className="btn text-white">&gt;Terms &amp; Condition</a><br />
                        <a href className="btn text-white"> &gt;Support</a><br />
                    </div>
                    <div className="col-sm-3 text-start p-5 footer">
                        <h5>Newsletter</h5><br />
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div style={{ position: 'relative' }}>
                            <input type="text" className="form-control py-3 ps-4 pe-5" placeholder="Your Email" />
                            <br />
                            <button className=" btn btn-primary position-absolute top-0 end-0 mt-2 me-1">sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Admin