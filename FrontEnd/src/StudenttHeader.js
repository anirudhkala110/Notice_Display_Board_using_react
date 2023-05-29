import React from 'react'
import Pantnagar_logo from "./Pantnagar_logo.jpg"
export const StudenttHeader = () => {
    return (
        <>

            <div id="headerforeverypage">
                <div className="uninamelogo">
                    <div className="unilogo">
                        <a href="">
                            <img
                                src={Pantnagar_logo}
                                alt=""
                                className="unilogoImage"
                            />
                        </a>
                    </div>
                    <div className="universitynameandlogo">
                        Govind Ballabh Pant University of Agriculture and Technology
                    </div>
                </div>
                <div className="colgname">College of Technology</div>
                <div className="department">..Information Technology..</div>
            </div>
        </>
    )
}

export default StudenttHeader