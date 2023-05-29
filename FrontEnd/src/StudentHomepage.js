import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import StudenttHeader from './StudenttHeader'
import { StudentNavbar } from './StudentNavbar'
export const StudentHomepage = () => {
  return (
    <>
      <StudenttHeader></StudenttHeader>
      <StudentNavbar></StudentNavbar>
      <div className="baseforeverypage">
        <div className="mainframe">
          <div className="mainframeinnerdiv">
            <div className="firstpart">
              <div className="notice-tab">
                <a href="/StudentNoticehomepage">
                  <Link to="/StudentNoticehomepage"><button>Notices</button></Link>
                </a>
              </div>
              <div className="courseallotment-tab">
                <a href="/StudentCourseallotmentMain">
                  <Link to="/StudentCourseallotmentMain"><button>Course Allotment</button></Link>
                </a>
              </div>
            </div>
            <div className='secondpart'>
              <div className="time-table-tab">
                <a href="/StudentTImeTableMain">
                  <Link to="/StudentTImeTableMain"><button>Time Table</button></Link>
                </a>
              </div>
              <div className="circular-tab">
                <a href="/StudentCircularHomeinterface">
                  <Link to="/StudentCircularHomeinterface"><button>Circulars</button></Link>
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

export default StudentHomepage