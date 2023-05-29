import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import StudenttHeader from './StudenttHeader'
export const Studentcircularhomeinterface = () => {
  return (
    <>
    <StudenttHeader></StudenttHeader>
      <StudentNavbar></StudentNavbar>
      <h1 style={{ background: "white", textAlign: "center", padding: "1%" }}>
        Student Circular Home
      </h1>
      <div className="mainframe">
        <div className="circularsbase">
          <div className="editdelete">
            <div className="internalcircular">
              <div className="internalcircularhead">Internal Circular</div>
              <hr />
              <span>
                <ul>
                  <li>
                    <a herf=""><Link to="/StudentInternalCirculardetails">
                      <div className="circulartagdetailing">
                        Internal Circular 1
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentInternalCirculardetails">
                      <div className="circulartagdetailing">
                        Internal Circular 2
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentInternalCirculardetails">
                      <div className="circulartagdetailing">
                        Internal Circular 3
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentInternalCirculardetails">
                      <div className="circulartagdetailing">
                        Internal Circular 4
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentInternalCirculardetails">
                      <div className="circulartagdetailing">
                        Internal Circular 5
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentInternalCirculardetails">
                      <div className="circulartagdetailing">
                        Internal Circular 6
                      </div>
                    </Link>
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="editdelete">
            <div className="extrnalcircular">
              <div className="externalcircularhead">External Circular</div>
              <hr />
              <span>
                <ul className="list-detailing">
                  <li>
                    <a herf=""><Link to="/StudentExternalCirculardetails">
                      <div className="circulartagdetailing">
                        External Circular 1
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentExternalCirculardetails">
                      <div className="circulartagdetailing">
                        External Circular 2
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentExternalCirculardetails">
                      <div className="circulartagdetailing">
                        External Circular 3
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentExternalCirculardetails">
                      <div className="circulartagdetailing">
                        External Circular 4
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentExternalCirculardetails">
                      <div className="circulartagdetailing">
                        External Circular 5
                      </div>
                    </Link>
                    </a>
                  </li>
                  <li>
                    <a herf=""><Link to="/StudentExternalCirculardetails">
                      <div className="circulartagdetailing">
                        External Circular 6
                      </div>
                    </Link>
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>
  )
}
