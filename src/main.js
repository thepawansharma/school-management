import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Footer from "./footer";
import Rightbar from "./rightbar";
import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                {/* <!-- Preloader --> */}
                {/* <div id="preloader-wrap">
                    <div className="spinner spinner-8">
                        <div className="ms-circle1 ms-child"></div>
                        <div className="ms-circle2 ms-child"></div>
                        <div className="ms-circle3 ms-child"></div>
                        <div className="ms-circle4 ms-child"></div>
                        <div className="ms-circle5 ms-child"></div>
                        <div className="ms-circle6 ms-child"></div>
                        <div className="ms-circle7 ms-child"></div>
                        <div className="ms-circle8 ms-child"></div>
                        <div className="ms-circle9 ms-child"></div>
                        <div className="ms-circle10 ms-child"></div>
                        <div className="ms-circle11 ms-child"></div>
                        <div className="ms-circle12 ms-child"></div>
                    </div>
                </div> */}

                {/* <!-- Overlays --> */}
                <div className="ms-aside-overlay ms-overlay-left ms-toggler" data-target="#ms-side-nav" data-toggle="slideLeft"></div>
                <div className="ms-aside-overlay ms-overlay-right ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight"></div>

                {/* <!-- Main Content --> */}
                <main className="body-content">

                <Sidebar />

                    <Navbar />

                    {/* <!-- Body Content Wrapper --> */}
                    <div className="ms-content-wrapper">

                        {/* <!-- Icon cards Widget --> */}
                        <div className="row mt-4">
                            <div className="col-xl-4 col-md-6">
                                <div className="ms-card card-gradient-success ms-widget ms-infographics-widget">
                                    <div className="ms-card-body media">
                                        <div className="media-body">
                                            <h6>Notifications</h6>
                                            <p className="ms-card-change"> 25</p>
                                            <Link to="/notifications" className="fs-12 text-white">View More <i className="material-icons">arrow_forward</i></Link>
                                        </div>
                                    </div>
                                    <i className="fa-solid fa-bell"></i>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="ms-card card-gradient-secondary ms-widget ms-infographics-widget">
                                    <div className="ms-card-body media">
                                        <div className="media-body">
                                            <h6>Total Fees</h6>
                                            <p className="ms-card-change"> 30,950</p>
                                            <Link to="/fees" className="fs-12 text-white">View More <i className="material-icons">arrow_forward</i></Link>
                                        </div>
                                    </div>
                                    <i className="fas fa-indian-rupee-sign"></i>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="ms-card card-gradient-warning ms-widget ms-infographics-widget">
                                    <div className="ms-card-body media">
                                        <div className="media-body">
                                            <h6>Attendance</h6>
                                            <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 90%</p>
                                            <Link to="/attendences" className="fs-12 text-white">View More <i className="material-icons">arrow_forward</i></Link>
                                        </div>
                                    </div>
                                    <i className="fa fa-list-check"></i>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-md-12 ">
                                <div className="ms-panel ">
                                    <div className="ms-panel-header">
                                        <h1 className="mb- d-inline">Student Details</h1>
                                        <img src="assets/img/A003101.jpg" className="profile-img" alt="" />
                                        <a href="/"className="fa fa-chevron-down float-right" data-toggle="collapse" data-target="#list" aria-expanded="false" aria-controls="popups" style={{ top: '25px', position: 'relative' }}> </a>
                                    </div>
                                    <div className="ms-panel-body" id="list">
                                        <div className="table-responsive">
                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td className="font-weight-bold"> Name </td>
                                                        <td>:</td>
                                                        <td>Pawan Sharma</td>
                                                        <td className="font-weight-bold">Gender</td>
                                                        <td>:</td>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Father Name </td>
                                                        <td>:</td>
                                                        <td>Shiv Sharma</td>
                                                        <td className="font-weight-bold">Mother Name</td>
                                                        <td>:</td>
                                                        <td>Deepika Sharma</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold"> Date of Birth </td>
                                                        <td>:</td>
                                                        <td>10.09.1994</td>
                                                        <td className="font-weight-bold">Email</td>
                                                        <td>:</td>
                                                        <td>pawan.sharma@info.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold"> Class </td>
                                                        <td>:</td>
                                                        <td>10<sup>th</sup></td>
                                                        <td className="font-weight-bold">Section</td>
                                                        <td>:</td>
                                                        <td>A</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold"> Roll No. </td>
                                                        <td>:</td>
                                                        <td>10005</td>
                                                        <td className="font-weight-bold">Address</td>
                                                        <td>:</td>
                                                        <td>A-16, Jangpura, New Delhi - 110014</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-md-12 ">
                                <div className="ms-panel">
                                    <div className="ms-panel-header ">
                                        <h6>University Results</h6>
                                        <a href="/" className=" fa fa-chevron-down float-right" data-toggle="collapse" data-target="#graph" aria-expanded="false" aria-controls="popups"> </a>
                                    </div>
                                    <div className="ms-panel-body " id="graph">
                                        <canvas id="bar-chart"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="ms-panel  height-84 ">
                                    <div className="ms-panel-header">
                                        <h6>Excellent Toppers</h6>
                                    </div>
                                    <div className="ms-panel-body" >
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Rank</th>
                                                        <th scope="col">Persentage</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="ms-table-f-w">  Chihoo Hwang </td>
                                                        <td>1</td>
                                                        <td>99.9%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ms-table-f-w">  Ajay Suryavanash </td>
                                                        <td>2</td>
                                                        <td>98%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ms-table-f-w"> Johnson </td>
                                                        <td>3</td>
                                                        <td>97%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ms-table-f-w">  Kalvish </td>
                                                        <td>4</td>
                                                        <td>96%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />

                    </div>
                </main>

                {/* <!--   Quick bar --> */}
                <Rightbar />
            </div>
        </>
    );
}

export default Main;