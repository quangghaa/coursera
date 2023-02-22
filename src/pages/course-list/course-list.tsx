import React from "react";
import { NextArrowIcon, PreviousArrowIcon } from "../../utils/course-item-img";
import CourseItem from "./course-item";
import "./style.css"

function CourseList(props: any) {
    return (
        <div> 
            <div className="course-item-header">
                4.561 results for "english free"
            </div>
            <div className='course-item-wrapper'>

                <CourseItem />
                <CourseItem des={1} />
                <CourseItem des={1} />
                <CourseItem />


            </div>

            <div className="course-item-footer">
                <div className="cif-text">
                    Searches related to english free
                </div>

                <div className="cif-links">
                    <div className="cifl-item">
                        <a href="#">english/french translator: long short term memory networks</a>
                    </div>

                    <div className="cifl-item">
                        <a href="#">low intermediate english: meet & greet</a>

                    </div>
                </div>
            </div>

            <div className="pagination-wrapper">
                <div className="pagination">
                    <button className="nextNPrevBtn">
                        <PreviousArrowIcon />
                    </button>
                    <button className="numberBtn">
                        1
                    </button>
                    <button className="numberBtn">
                        2
                    </button>
                    <button className="numberBtn">
                        3
                    </button>

                    <span>...</span>

                    <button className="numberBtn">
                        84
                    </button>
                    <button className="nextNPrevBtn">
                        <NextArrowIcon />
                    </button>
                </div>
            </div>

            
        </div>

    )
}

export default CourseList;