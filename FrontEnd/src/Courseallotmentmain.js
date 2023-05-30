import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const Courseallotmentmain = () => {
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>


      <div className="baseforeverypage">
        {/* sidebar */}
        {/* sidebar */}
        <div className="mainframe">
          <div className="secondyr">
            <input type="text" readOnly="" defaultValue="Second Year " />
            <br />
            <div className="courseallotment-dropdown">
              <a href="/Courseallotement2yr"><button>Semester 1</button></a>
              <br />
              <a href='/Courseallotement2yr'><button>Semester 2</button></a>
            </div>
          </div>
          <div className="thirdyr">
            <input type="text" readOnly="" defaultValue="Third Year " />
            <br />
            <div className="courseallotment-dropdown">
            <a href="/CourseAllotment3yr"><button>Semester 1</button></a>
              <br />
              <a href='/Courseallotement3yr'><button>Semester 2</button></a>
            </div>
          </div>
          <div className="finalyr">
            <input type="text" readOnly="" defaultValue="Final Year " />
            <br />
            <div className="courseallotment-dropdown">
            <a href="/CourseAllotment4yr"><button>Semester 1</button></a>
              <br />
              <a href='/Courseallotement4yr'><button>Semester 2</button></a>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>

    </>
  )
}

export default Courseallotmentmain