// import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // };
    return (
        <>
            {/* <!-- Sidebar Navigation Left --> */}
            {/* {isSidebarOpen && */}
                <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left ps ps--active-y">
                    {/* <!-- Logo --> */}
                    <div className="logo-sn ms-d-block-lg">
                        <a className="pl-0 ml-0 text-center" href="/main"><img src="assets/img/logo/weeducate-4.png" alt="logo" />  </a>
                    </div>

                    {/* <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <span className="ms-toggler-bar bg-primary"></span>
                        <span className="ms-toggler-bar bg-primary"></span>
                        <span className="ms-toggler-bar bg-primary"></span>
                    </div> */}

                    {/* <!-- Navigation --> */}
                    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                        {/* <!-- Dashboard --> */}
                        <li className="menu-item">
                            <NavLink to="/main">
                                <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
                            </NavLink>
                            {/* <ul id="dashboard" className="collapse show" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
                                <li> <NavLink to="/main">Weeducate</NavLink> </li>
                            </ul> */}
                        </li>
                        {/* <!-- /Dashboard --> */}

                        {/* <!--Courses Start--> */}
                        <li className="menu-item">
                            <NavLink to="/courses">
                                <i className="fa fa-graduation-cap fs-16"></i>Courses
                            </NavLink>
                        </li>
                        {/* <!-- /Courses End---> */}

                        {/* <!--Student Start--> */}
                        <li className="menu-item">
                            <NavLink to="/students">
                                <i className="fa fa-users fs-16"></i>Students
                            </NavLink>
                        </li>
                        {/* <!-- /Student End---> */}

                        {/* <!--Attendence Start--> */}
                        <li className="menu-item">
                            <NavLink to="/attendences" >
                                <span><i className="fa fa-list-check fs-16"></i>&nbsp; Attendence</span>
                            </NavLink>
                        </li>
                        {/* <!-- /Attendence End---> */}

                        {/* <!--Schedule Start--> */}
                        <li className="menu-item">
                            <NavLink to="/schedules">
                                <span><i className="fa-regular fa-calendar-check fs-16"></i>&nbsp; Schedule</span>
                            </NavLink>
                        </li>
                        {/* <!-- /Schedule End---> */}

                        {/* <!--Fees Start--> */}
                        <li className="menu-item">
                            <NavLink to="/fees">
                                <span><i className="fas fa-indian-rupee-sign fs-16"></i>&nbsp; Fees</span>
                            </NavLink>
                        </li>
                        {/* <!-- /Fees End---> */}

                        {/* <!--Holiday Start--> */}
                        <li className="menu-item">
                            <NavLink to="/holidays">
                                <span><i className="fa-regular fa-calendar fs-16"></i>Holidays</span>
                            </NavLink>
                        </li>
                        {/* <!-- /Holiday End---> */}

                        {/* <!--Transport Start--> */}
                        <li className="menu-item">
                            <NavLink to="/transports">
                                <span><i className="fa-solid fa-bus-simple"></i>Transport</span>
                            </NavLink>
                        </li>
                        {/* <!-- /Transport End---> */}

                        {/* <!--Notice Start--> */}
                        <li className="menu-item">
                            <NavLink to="/notifications">
                                <span><i className="fa-solid fa-bell fs-16"></i>Notifications</span>
                            </NavLink>
                        </li>
                        {/* <!-- /Notice End---> */}
                    </ul>
                </aside>
            {/* } */}

            {/* <!-- Navigation Bar --> */}
            {/* <nav className="navbar ms-navbar">
                <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft" onClick={() => setShowText(!showText)}>
                    <span className="ms-toggler-bar bg-primary"></span>
                    <span className="ms-toggler-bar bg-primary"></span>
                    <span className="ms-toggler-bar bg-primary"></span>
                </div>

                <div className="logo-sn logo-sm ms-d-block-sm">
                    <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="\"><img src="assets/img/logo/weeducate-4.png" alt="logo" /> </Link>
                </div>

                <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                    <li className="ms-nav-item ms-search-form pb-0 py-0">
                        <form className="ms-form" method="post">
                            <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                <input type="search" className="ms-form-input" name="search" placeholder="Search here..." value="" />
                                <i className="flaticon-search text-disabled"></i>
                            </div>
                        </form>
                    </li>
                    <li className="ms-nav-item dropdown">
                        <a href="\" className="text-disabled ms-has-notification" id="mailDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa-regular fa-envelope-open fa-2x"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="mailDropdown">
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Mail</span></h6><span className="badge badge-pill badge-success">3 New</span>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li className="ms-scrollable ms-dropdown-list">
                                <a className="media p-2" href="#">
                                    <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                        <img src="assets/img/new-student-4.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <span>Hey man, looking forward to your new project.</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="ms-chat-status ms-status-online ms-chat-img mr-2 align-self-center">
                                        <img src="assets/img/new-student-3.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <span>Dear John, I was told you bought Weeducate! Send me your feedback</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 28 minutes ago</p>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                        <img src="assets/img/new-student-1.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <span>How many people are we inviting to the dashboard?</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 6 hours ago</p>
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li className="dropdown-menu-footer text-center">
                                <a href="\">Go to Inbox</a>
                            </li>
                        </ul>
                    </li>
                    <li className="ms-nav-item dropdown">
                        <a href="\" className="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa-regular fa-bell fa-2x"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6><span className="badge badge-pill badge-info">4 New</span>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li className="ms-scrollable ms-dropdown-list">
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                        <span>12 ways to improve your crypto dashboard</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                        <span>You have newly registered users</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                        <span>Your account was logged in from an unauthorized IP</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                                    </div>
                                </a>
                                <a className="media p-2" href="#">
                                    <div className="media-body">
                                        <span>An application form has been submitted</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li className="dropdown-menu-footer text-center">
                                <a href="\">View all Notifications</a>
                            </li>
                        </ul>
                    </li>
                    <li className="ms-nav-item">
                        <a href="\" className="text-disabled ms-toggler" data-target="#ms-recent-activity" data-toggle="slideRight"><i className="flaticon-menu"></i></a>
                    </li>
                    <li className="ms-nav-item ms-nav-user dropdown">
                        <a href="\" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img className="ms-user-img ms-img-round float-right" src="assets/img/A003101.jpg" alt="people" /> </a>
                        <ul className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">&nbsp; Welcome, Pawan</span></h6>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li className="ms-dropdown-list">
                                <a className="media fs-14 p-2" href=""> <span><i className="flaticon-user mr-2"></i> Profile</span> </a>
                                <a className="media fs-14 p-2" href=""> <span><i className="flaticon-mail mr-2"></i> Inbox</span> <span className="badge badge-pill badge-info">3</span> </a>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li className="dropdown-menu-footer">
                                <a className="media fs-14 p-2" href="/signin"> <span><i className="flaticon-shut-down mr-2"></i> Logout</span> </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
                    <span className="ms-toggler-bar bg-primary"></span>
                    <span className="ms-toggler-bar bg-primary"></span>
                    <span className="ms-toggler-bar bg-primary"></span>
                </div>
            </nav> */}
        </>
    );
}

export default Sidebar;