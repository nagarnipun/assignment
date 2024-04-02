import React from 'react'
import { NavLink } from 'react-router-dom'



function User() {
    return (
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
            {/*mainbar start*/}
            <div className="row  headerpage">
                <div className="col-sm-6 text-white " style={{ padding: 100 }}>
                    <h1 className="display-1">About Us</h1>
                    <ul type="none">
                        <a href className="btn btn-white">
                            <li>Home</li>
                        </a>
                        <a href className="btn btn-white">
                            <li>Page</li>
                        </a>
                        <a href className="btn btn-white">
                            <li>About</li>
                        </a>
                    </ul>
                </div>
                <div className="col-sm-6" />
            </div>
            {/*mainbar end*/}
            <br />
            <br />
            <br />
            {/*mainbar01 start*/}
            <div className="container">
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
            </div>
            {/*mainbar01 end*/}
            <br />
            <br />
            {/*mainbar02 start*/}
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
            {/*mainbar02 end*/}
            <br />
            <br />
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
            </div>
            {/*card end*/}
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

    )
}

export default User