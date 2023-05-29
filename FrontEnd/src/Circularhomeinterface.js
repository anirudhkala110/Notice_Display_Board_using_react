import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export const Circularhomeinterface = () => {
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="mainframe">
        <div className="circularsbase">
          <div className="editdelete">
            <div className="internalcircular">
              <div className="internalcircularhead">Internal Circular</div>
              <hr />
              <span>
                <ul>
                  <li>
                    <a href="/Internalcirculardetails"> <Link to="/Internalcirculardetails">
                      <div className="circulartagdetailing">Internal Circular 1</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Internalcirculardetails"><Link to="/Internalcirculardetails">
                      <div className="circulartagdetailing">Internal Circular 2</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Internalcirculardetails"><Link to="/Internalcirculardetails">
                      <div className="circulartagdetailing">Internal Circular 3</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Internalcirculardetails"><Link to="/Internalcirculardetails">
                      <div className="circulartagdetailing">Internal Circular 4</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Internalcirculardetails"><Link to="/Internalcirculardetails">
                      <div className="circulartagdetailing">Internal Circular 5</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Internalcirculardetails"><Link to="/Internalcirculardetails">
                      <div className="circulartagdetailing">Internal Circular 6</div></Link>
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div className="editdeletebtns">
              <a href="/Addinternalcircular"><Link to="/Addinternalcircular">
                <button className="edit">Add</button></Link>
              </a>
              <a href="/Editinternalcircular">
                <button className="update">Update </button>
              </a>
              <a href="/Deleteinternalcirculars">
                <button className="delete"> Delete</button>
              </a>
            </div>
          </div>
          <div className="editdelete">
            <div className="extrnalcircular">
              <div className="externalcircularhead">External Circular</div>
              <hr />
              <span>
                <ul className="list-detailing">
                  <li>
                    <a href="/Externalcirculardetails"><Link to="/Externalcirculardetails">
                      <div className="circulartagdetailing">External Circular 1</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Externalcirculardetails"><Link to="/Externalcirculardetails">
                      <div className="circulartagdetailing">External Circular 2</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Externalcirculardetails"><Link to="/Externalcirculardetails">
                      <div className="circulartagdetailing">External Circular 3</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Externalcirculardetails"><Link to="/Externalcirculardetails">
                      <div className="circulartagdetailing">External Circular 4</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Externalcirculardetails"><Link to="/Externalcirculardetails">
                      <div className="circulartagdetailing">External Circular 5</div></Link>
                    </a>
                  </li>
                  <li>
                    <a href="/Externalcirculardetails"><Link to="/Externalcirculardetails">
                      <div className="circulartagdetailing">External Circular 6</div></Link>
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div className="editdeletebtns">
              <a href="/Addexternalcircular">
                <button className="edit">Add</button>
              </a>
              <a href="/Editexternalcircular">
                <button className="update">Update </button>
              </a>
              <a href="/Deleteexternalcircular">
                <button className="delete"> Delete</button>
              </a>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>

    </>
  )
}

export default Circularhomeinterface