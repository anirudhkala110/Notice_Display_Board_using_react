import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const Navbar = () => {

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
                            <a href="/Homepage">
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
                                        <a href=""><Link to="/NoticesHomepage" >Notices</Link></a>
                                    </li>
                                    <li>
                                        <a href="/CircularHomeinterface"><Link to="/Circularhomeinterface">Circulars</Link></a>
                                    </li>
                                    <li>
                                        <a href="/TImeTableMain"><Link to="/TImeTablemain">Time Table</Link></a>
                                    </li>
                                    <li>
                                        <a href="/CourseallotmentMain"><Link to="/Courseallotmentmain">Course Allotment</Link></a>
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

export default Navbar