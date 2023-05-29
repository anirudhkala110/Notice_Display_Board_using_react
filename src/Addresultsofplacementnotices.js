import React, { useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import axios from "axios"
import placementresultdata from './dummyDataforPlacementResult'

export const Addresultsofplacementnotices = () => {
  const [user, setuser] = useState({
    topic: "",
    detail: "",
    file: "",
    DATE: ""
  })
  const initialValues = {
    heading: "",
    content: "",
    date: ""
  }
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }
  // const senddata = async () => {
  //   const x = await axios.post("", {

  //   })
  // }

  let placementresultArr = JSON.parse(localStorage.getItem("placement-result-data"));
  placementresultArr.push(values);

  const handlePlacementresultSubmmision = (e) => {
    let dummyPlacementResultNoticeArr = JSON.parse(localStorage.getItem("dummyplacementresultArr"));
    let num = dummyPlacementResultNoticeArr[dummyPlacementResultNoticeArr.length - 1];
    dummyPlacementResultNoticeArr.push(++num);
    localStorage.setItem("dummyplacementresultArr", JSON.stringify(dummyPlacementResultNoticeArr));
    localStorage.setItem("placement-result-data", JSON.stringify(placementresultArr))
  }

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
                onClick={handlePlacementresultSubmmision}
                name="upload"
              >
                Upload
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default Addresultsofplacementnotices