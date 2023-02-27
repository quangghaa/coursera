import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DownIcon, NavLogo } from "../../utils/course-enroll";

function Navigation(props: any) {
    const [showChild, setShowChild] = useState(0)
    const navKeys = [1, 2, 3, 4, 5]

    function showChildClick(e: any) {
        e.stopPropagation()
        if(showChild == 0) {
            setShowChild(1)
        } else {
            setShowChild(0)
        }
    }

    const navigate = useNavigate()

    function navClick(e: any,id: any) {
        e.stopPropagation()
        switch(id) {
            case 1: {
                navigate("/enroll/module")
                break
            }
            case 2: {
                navigate("/enroll/note")
                break
            }
            case 3: {
                navigate("/enroll/discussion")
                break
            }
            case 4: {
                navigate("/enroll/message")
                break
            }
            case 5: {
                navigate("/enroll/course-info")
                break
            }
        }
    }

    useEffect(() => {
        var btnId = (document.getElementById("cdi-btn-id")) as HTMLElement
        var dropdownId = (document.getElementById("cdi-dropdown-id")) as HTMLElement
        if(showChild == 0) {
            if(btnId.classList.contains("cdi-icon-down")) {
                btnId.classList.remove("cdi-icon-down")
            }
            if(dropdownId.classList.contains("cd-show")) {
                dropdownId.classList.remove("cd-show")
            }
        } else {
            if(!btnId.classList.contains("cdi-icon-down")) {
                btnId.classList.add("cdi-icon-down")
            }
            if(!dropdownId.classList.contains("cd-show")) {
                dropdownId.classList.add("cd-show")
            }
        }
    }, [showChild])

    return (
        <div className="ce-nav">
            <div className="cen-head">
                <div className="cen-head-img-box">
                    <NavLogo />
                </div>
                <h2 className="cen-head-title">
                Lesson | Small Talk & Conversational Vocabulary
                </h2>

                <p className="cen-head-dep">
                Georgia Institute of Technology
                </p>
            </div>
            <nav className="cen-body">
                <ul>
                    <li key={navKeys[0]}>
                        <div className="cenb-dropdown-item">
                            <div className="cdi-box">
                                <div className="cdi-box-b">
                                    <button className="cdi-btn" onClick={(e:any) =>showChildClick(e)}>
                                        <div id="cdi-btn-id" className="cdi-btn-icon">
                                            <DownIcon />
                                        </div>
                                        <div className="cdi-btn-text">
                                            CourseMaterial
                                        </div>
                                    </button>
                                </div>

                                <div id="cdi-dropdown-id" className="cdi-dropdown">
                                    <div className="cdi-dropdown-b">
                                        <ul>
                                            <li key="d1" onClick={(e: any) => navClick(e, 1)}>
                                                <a href="#" className="id-box">
                                                    <div className="id-icon-box">
                                                        <span className="id-icon"></span>
                                                    </div>

                                                    <div className="id-text">
                                                        Module 1
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li key={navKeys[1]}>
                        <a href="#" className="cenb-item" onClick={(e: any) => navClick(e, 2)}>
                            <h2 className="cenb-item-text">
                                Notes
                            </h2>
                        </a>
                    </li>
                    <li key={navKeys[2]}>
                        <a href="#" className="cenb-item" onClick={(e: any) => navClick(e, 3)}>
                            <h2 className="cenb-item-text">
                            Discussion
                            </h2>
                        </a>
                    </li>
                    <li key={navKeys[3]}>
                        <a href="#" className="cenb-item" onClick={(e: any) => navClick(e, 4)}>
                            <h2 className="cenb-item-text">
                            Messages
                            </h2>
                        </a>
                    </li>
                    <li key={navKeys[4]}>
                        <a href="#" className="cenb-item" onClick={(e: any) => navClick(e, 5)}>
                            <h2 className="cenb-item-text">
                            Course Info
                            </h2>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;