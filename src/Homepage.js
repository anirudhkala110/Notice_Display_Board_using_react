import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

export const Homepage = () => {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="baseforeverypage">
                <div className="mainframe">
                    <div className="mainframeinnerdiv">
                        <div className="firstpart">
                            <div className="notice-tab">
                                <a href="/NoticesHomepage">
                                    <button>Notices</button>
                                </a>
                            </div>
                            <div className="courseallotment-tab">
                                <a href="/CourseallotmentMain">
                                    <button>Course Allotment</button>
                                </a>
                            </div>
                        </div>
                        <div className="secondpart">
                            <div className="time-table-tab">
                                <a href="/TImeTableMain">
                                    <button>Time Table</button>
                                </a>
                            </div>
                            <div className="circular-tab">
                                <a href="/CircularHomeinterface">
                                    <button>Circulars</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Homepage