import React, { useState } from 'react'
import axios from "axios"
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'

export const Addplacementrelatednotices = () => {
  const [user, setuser] = useState({
    topic: "",
    detail: "",
    file: "",
    DATE: ""
  })

  // const senddata = async () => {
  //   const x = await axios.post("", {

  //   })
  // }
  const initialValues = {
    heading: "",
    content: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  let placementArr = JSON.parse(localStorage.getItem("placement-notice-data"));
  placementArr.push(values);

  const handleNoticeSubmission = (e) => {
    let dummyplacementnoticeArr = JSON.parse(localStorage.getItem("dummyplacementnoticeArr"));
    let num = dummyplacementnoticeArr[dummyplacementnoticeArr.length - 1];
    dummyplacementnoticeArr.push(++num);
    localStorage.setItem("dummyplacementnoticeArr", JSON.stringify(dummyplacementnoticeArr));
    localStorage.setItem("placement-notice-data", JSON.stringify(placementArr));
  };

  // const senduser = (e) => {
  //   setuser({ ...user, [e.target.name]: e.target.value })
  // }
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>


      <div className="baseforeverypage">
        <div className="mainframe">
          <h3>Add New Department Notice</h3>
          <div className="uploadnotices">
            <form
              action="/Addnotices"
              method="post"
              encType="multipart/form-data"
            >
              <div className="subclass">
                <label htmlFor="">Heading/Topic</label>
                <input
                  type="text"
                  id="noticeheading"
                  name="heading"
                  value={values.heading}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Type-Placement Notice:</label>
                <textarea
                  rows={20}
                  id="textarea"
                  name="content"
                  value={values.content}
                  onChange={handleInputChange}
                  required
                  defaultValue={""}
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Upload PDF file as Proof</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                // onChange={(e) => senduser(e)}
                // required
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Event is on :</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={values.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="subclass" />
            </form>
            <a href="/NoticesHomepage">
              <button
                type="submit"
                className="uploadsubmit"
                onClick={handleNoticeSubmission}
                name="upload"
              >
                Upload
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="baseforeverypage">
        <div className="mainframe">
          <h3>Add New Placement Notices</h3>
          <div className="uploadnotices">
            <form action="" method="post">
              <div className="subclass">
                <label htmlFor="">Heading/Topic</label>
                <input type="text" name='topic' id="noticeheading" onChange={(e)=>senduser(e)} required />
              </div>
              <div className="subclass">
                <label htmlFor="">Type-Placement Notice:</label>
                <textarea
                  name="detail"
                  rows={20}
                  id="textarea"
                  onChange={(e)=>senduser(e)} required
                  defaultValue={""}
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Upload PDF file as Proof</label>
                <input type="file" name='file' id="file" onChange={(e)=>senduser(e)} required />
              </div>
              <div className="subclass">
                <label htmlFor="">Event is on :</label>
                <input type="date" name="DATE" id="date" onChange={(e)=>senduser(e)} required />
              </div>
              <div className="subclass" />
            </form>
            <button className="uploadsubmit">Upload</button>
          </div>
        </div>
      </div> */}


      <Footer></Footer>

    </>
  )
}

export default Addplacementrelatednotices