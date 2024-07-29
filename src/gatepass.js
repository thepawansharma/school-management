import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Footer from "./footer";
import Rightbar from "./rightbar";

function Gatepass() {
    return (
        <>
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">

                {/* <!-- Overlays --> */}
                <div className="ms-aside-overlay ms-overlay-left ms-toggler" data-target="#ms-side-nav" data-toggle="slideLeft"></div>
                <div className="ms-aside-overlay ms-overlay-right ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight"></div>

                {/* <!-- Main Content --> */}
                <main className="body-content">

                    <Sidebar />

                    <Navbar />

                    {/* <!-- Body Content Wrapper --> */}
                    <div className="ms-content-wrapper">

                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="breadcrumb" className="nav-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">
                                                <i className="material-icons">home</i> Home </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Admin</li>
                                        <li className="breadcrumb-item active" aria-current="page">Gate pass</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header">
                                        <h1 className="mb-0">Gate Pass</h1>
                                    </div>
                                    <div className="ms-panel-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="name">Mobile Number</label>
                                                                <input type="text" className="form-control" placeholder="Mobile Number" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="name">Aadhar Number / UID</label>
                                                                <input type="text" className="form-control" placeholder="Mobile Number" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label for="name">Visitor Name</label>
                                                                <input type="text" className="form-control" id="" placeholder="Visitor name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label for="name">Gender</label>
                                                                <select className="form-control" id="exampleSelect">
                                                                    <option value="male">Male</option>
                                                                    <option value="female">Female</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label for="name">Whom to Visit</label>
                                                                <input type="text" className="form-control" id="" placeholder="Visitor name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label for="name">Department</label>
                                                                <input type="text" className="form-control" id="" placeholder="Department name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label for="exampleTextarea">Address</label>
                                                                <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label for="name" className="capture-head">Capture Visitors Photo</label>
                                                        <img src="assets/img/A003101.jpg" className="img-fluid" width={250} alt="" />
                                                        <center><button type="submit" className="btn btn-sm btn-center btn-warning">Capture Photo</button></center>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr></hr>
                                            <center>
                                                <button type="submit" className="btn btn-warning mb-2">Submit</button>
                                                <button type="submit" className="btn btn-outline-warning mb-2 ml-3">Cancel</button>
                                            </center>
                                        </form>
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

export default Gatepass;