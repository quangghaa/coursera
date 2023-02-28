import React, { useEffect, useState } from "react";
import { DownIcon, DownIcon2, HighlightIcon, NoteIcon, SelectedIcon } from "../../utils/course-enroll";
import { DropdownIcon } from "../../utils/header-svg";
import Navigation from "./navigation";
import "./style.css"

function CENote(props: any) {
    const [showSelectList, setShowSelectList] = useState(0)

    function selectClick(e: any) {
        e.stopPropagation()
        if(showSelectList == 0) {
            setShowSelectList(1)
        } else {
            setShowSelectList(0)
        }
    }

    useEffect(() => {   
        var slId = (document.getElementById("select-list-id")) as HTMLElement
        if(showSelectList == 0) {
            if(slId.classList.contains("show-select-list")) {
                slId.classList.remove("show-select-list")
            }
        } else {
            if(!slId.classList.contains("show-select-list")) {
                slId.classList.add("show-select-list")
            }
        }
    }, [showSelectList])

    useEffect(() => {
        props.setPage(2)
    }, [])

    return (
        <div className="course-enroll">
            <Navigation />
            <div className="note-wrapper">
                <div className="note-padding">
                    <div className="note-main">
                        <div className="note">
                            <h1 className="note-title">
                                Notes
                            </h1>
                            <div className="note-filter">
                                <div className="nf">
                                    <label className="nf-label">Filter</label>
                                    <div className="nf-select" onClick={(e: any) => selectClick(e)}>
                                        <div className="nf-select-pd">
                                            <div className="nf-select-content">
                                                All notes
                                            </div>
                                        </div>

                                        <div className="nf-select-icon">
                                            <DownIcon2 />
                                        </div>
                                    </div>

                                    <div id="select-list-id" className="select-list">
                                        <ul>
                                            <li className="mt-0">
                                                <div className="sl-item">
                                                    <div className="sl-item-text">All notes</div>
                                                    <div className="selected-icon">
                                                        <SelectedIcon />
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="sl-item">
                                                    <div className="sl-item-text">Lesson | Small Talk & Conversational Vocabulary </div>
                                                    {/* <div className="selected-icon">
                                                        <SelectedIcon />
                                                    </div> */}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="note-content">
                                <div className="nc-row-1">
                                    <NoteIcon />
                                    <HighlightIcon />
                                </div>
                                <div className="nc-row-2">
                                You have not added any notes yet. Notes can be created from video pages.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CENote;