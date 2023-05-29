import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
              <button>Semester 1</button>
              <br />
              <button>Semester 2</button>
            </div>
          </div>
          <div className="thirdyr">
            <input type="text" readOnly="" defaultValue="Third Year " />
            <br />
            <div className="courseallotment-dropdown">
              <button>Semester 1</button>
              <br />
              <button>Semester 2</button>
            </div>
          </div>
          <div className="finalyr">
            <input type="text" readOnly="" defaultValue="Final Year " />
            <br />
            <div className="courseallotment-dropdown">
              <button>Semester 1</button>
              <br />
              <button>Semester 2</button>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>

    </>
  )
}

export default Courseallotmentmain