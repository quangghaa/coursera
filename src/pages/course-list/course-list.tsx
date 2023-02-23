import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NextArrowIcon, PreviousArrowIcon } from "../../utils/course-item-img";
import CourseItem from "./course-item";
import "./style.css"

interface Item {
    icon: string,
    university: string, 
    name: string,
    gainSkills: string, 
    average: number,
    totalReviews: number,
    courseType: string
}

function CourseList(props: any) {
    const [data, setData] = useState([
        {
            icon:"",
            university: "University of London",
            name: "Lesson | Small & Conversational Vocabulary",
            gainSkills: "Communication",
            average: 4.6,
            totalReviews: 605,
            courseType: "Mixed Course 1-4 weeks"
        },
        {
            icon:"",
            university: "University of London",
            name: "Data engineering",
            gainSkills: "Design, Coding",
            average: 4.6,
            totalReviews: 305,
            courseType: "Mixed Course 1-4 weeks"
        },
        {
            icon:"",
            university: "University of London",
            name: "Lesson | Small & Conversational Vocabulary",
            gainSkills: "",
            average: 4.6,
            totalReviews: 605,
            courseType: "Mixed Course 1-4 weeks"
        },
        {
            icon:"",
            university: "University of London",
            name: "Data engineering",
            gainSkills: "",
            average: 4.6,
            totalReviews: 305,
            courseType: "Mixed Course 1-4 weeks"
        },
        {
            icon:"",
            university: "University of London",
            name: "Lesson | Small & Conversational Vocabulary",
            gainSkills: "",
            average: 4.6,
            totalReviews: 605,
            courseType: "Mixed Course 1-4 weeks"
        },
        {
            icon:"",
            university: "University of London",
            name: "Data engineering",
            gainSkills: "Design, Coding",
            average: 4.6,
            totalReviews: 305,
            courseType: "Mixed Course 1-4 weeks"
        }
    ] as Item[])

    const navigate = useNavigate()
    function itemClick() {
        navigate("/learn/something")
    }
 
    return (
        <div className="app-body"> 
            <div className="course-item-header">
                4.561 results for "english free"
            </div>
            <div className='course-item-wrapper'>
                {
                    data.map((d: any) => {
                        return <>
                            <CourseItem onClick={itemClick} item={d}/>
                        </>
                    })
                }

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