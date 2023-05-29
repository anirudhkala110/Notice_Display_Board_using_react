import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Noticesdetails from './Noticesdetails'
export const Noticeshomepage = () => {
  const [{noticedata,placementdata,placementresultdata}, setData] = useState([]);
  /* Notices */
  let dummyNoticeArr = "";
  if(!localStorage.getItem("isNoticeArraySaved")){
    dummyNoticeArr = [];
    localStorage.setItem("dummynoticeArr",JSON.stringify(dummyNoticeArr));
    localStorage.setItem("isNoticeArraySaved",true);
  }else{
    dummyNoticeArr = JSON.parse(localStorage.getItem("dummynoticeArr"));
  }

  /*Placement Data*/
  let dummyPlacementNoticeArr = "";
  if(!localStorage.getItem("isPlacementNoticeArraySaved")){
    dummyPlacementNoticeArr = [];
    localStorage.setItem("dummyplacementnoticeArr",JSON.stringify(dummyPlacementNoticeArr));
    localStorage.setItem("isPlacementNoticeArraySaved",true);
  }else{
    dummyPlacementNoticeArr = JSON.parse(localStorage.getItem("dummyplacementnoticeArr"));
  }

/* Result of Placement */
  let dummyPlacementResultNoticeArr = "";
  if(!localStorage.getItem("isPlacementResultNoticeArraySaved")){
    dummyPlacementResultNoticeArr = [];
    localStorage.setItem("dummyplacementresultArr",JSON.stringify(dummyPlacementResultNoticeArr));
    localStorage.setItem("isSavedPlacementResultNoticeArraySaved",true);
  }else{
    dummyPlacementResultNoticeArr = JSON.parse(localStorage.getItem("dummyplacementresultArr"));
  }
  useEffect(() => {
    fetch('http://localhost:3001/project_final')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        <div className="mainframe">
          <div className="subtabsNotice">
            <div className="editdelete">
              <div className="departmentnotices">
                <div className="departmentrelatedNoticehead">
                  Notices
                  <hr />
                </div>
                <span className="detailing-of-notices">
                  {dummyNoticeArr.map((val,idx)=>
                    <Link to="/Noticesdetails" state={{index:idx}}><div className="subclassofnotice">Notice {val}</div></Link>
                  )}
                </span>
              </div>
              <div className="editdeletebtns">
                <a href="/Addnotices">
                  <button className="edit">Add</button>
                </a>
                <a href="/Editnotices">
                  <button className="update"> Update</button>
                </a>
                <a href="/Deletenotices">
                  <button className="delete"> Delete</button>
                </a>
              </div>
            </div>
             <div className="editdelete">
              <div className="placementrelatedNotice">
                <div className="placementrelatedNoticehead">
                  Placement Notices
                  <hr />
                </div>
                <span className="detailing-of-notices">
                  {dummyPlacementNoticeArr.map((valu,idxs)=>
                    <Link to="/Placementnoticesdetails" state={{index:idxs}}><div className="subclassofnotice">Notice {valu}</div></Link>
                  )}
                  </span>
              </div>
              <div className="editdeletebtns">
                <a href="/AddPlacementrelatednotices">
                  <button className="edit">Add</button>
                </a>
                <a href="/Editplacementnotices">
                  <button className="update">Update</button>
                </a>
                <a href="/Deleteplacementnotices">
                  <button className="delete">Delete</button>
                </a>
              </div>
            </div>
            
            <div className="editdelete">
              <div className="resultrelatedNotices">
                <div className="resultofplacementNoticehead">
                  Result of Placements <hr />
                </div>
                <span className="detailing-of-notices">
                  {dummyPlacementResultNoticeArr.map((val,idx)=>
                    <Link to="/Placementresultnoticesdetails" state={{index:idx}}><div className="subclassofnotice">Notice {val}</div></Link>
                  )}
                  </span>
              </div>
              <div className="editdeletebtns">
                <a href="/Addresultsofplacementnotices">
                  <button className="edit">Add </button>
                </a>
                <a href="/Editresultsofplacementnotices">
                  <button className="update">Update </button>
                </a>
                <a href="/Deleteresultsofplacementnotices">
                  <button className="delete">Delete</button>
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

export default Noticeshomepage
