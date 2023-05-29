import React from 'react'
import { Link } from 'react-router-dom'

export const StudentNavbar = () => {
    return (
        <>
            <div className="span">
                <span>
                    <div className="navbar">
                        <div className="tabwithlogo">
                            <div className="homeimage">
                                <a href="index.hbs">
                                    <img src="/images/home.png" className="HomeLogoImage" alt="" />
                                </a>
                            </div>
                            <a href="/StudentHomepage">
                                <button className="homebtn" type="submit">
                                    Home
                                </button>
                            </a>
                        </div>
                        <div className="tabwithlogo">
                            <div className="homeimage ">
                                <img src="/images/circular.png" className="HomeLogoImage" alt="" />
                            </div>
                            <div className="menu-wrap">
                                Student Corner
                                <div className="drop-menu">
                                    <li>
                                        <a href="/StudentNoticehomepage"><Link to="/StudentNoticehomepage" >Notices</Link></a>
                                    </li>
                                    <li>
                                        <a href="/Studentcircularhomeinterface"><Link to="/Studentcircularhomeinterface">Circulars</Link></a>
                                    </li>
                                    <li>
                                        <a href="/StudentTImeTableMain"><Link to="/StudentTImeTableMain">Time Table</Link></a>
                                    </li>
                                    <li>
                                        <a href="/StudentCourseallotmentMain"><Link to="/StudentCourseallotmentMain">Course Allotment</Link></a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}
