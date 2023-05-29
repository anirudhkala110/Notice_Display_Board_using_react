import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

export const Deletenotices = () => {
  let dummyArr = JSON.parse(localStorage.getItem("dummynoticeArr"));
  const size = dummyArr.length
  let noticeDataArr = JSON.parse(localStorage.getItem("notice-data"));
  function deleteNotice(index) {
    if (size <= 0) {
      alert("Nothing to Delete ! Please get back to the Notices Home Page")
    }
    else {
      alert(" Deleting Notice ?")
      dummyArr.pop();
      noticeDataArr.splice(index, 1);
      localStorage.setItem("dummynoticeArr", JSON.stringify(dummyArr));
      localStorage.setItem("notice-data", JSON.stringify(noticeDataArr));
    }
    size--;
  }
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        <div className="updation">
          <h3>Delete Department Notices</h3>
          <div className="deletingnotices">
            {dummyArr.map((val, idx) => (
              <div className="deletenotice">
                <div className="info">Notice Info</div>
                <a
                  href=""
                  className="deletenotices"
                  onClick={() => deleteNotice(idx)}
                >
                  {/* <a
                  href="/NoticesHomepage"
                  className="deletenotices"
                  onClick={() => deleteNotice(idx)}
                > */}
                  Delete
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Deletenotices;
