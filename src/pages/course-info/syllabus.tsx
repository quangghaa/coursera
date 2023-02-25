import React, { useEffect, useState } from "react";
import { InfoIcon, LikeIcon, SylBookIcon, SylPraticeIcon, SylReadingIcon, SylTimeIcon, SylVideoIcon } from "../../utils/course-info";


interface Lesson {
    tipe:  number,
    name: string,
    time: string,
}

interface Syllabus {
    ratingPercentage: number,
    ratingTotal: number,
    weekCount: number,
    timeToComplete: number,
    name: string,
    description: string,
    lesson: Lesson[],
}

const syllabusData = {
    ratingPercentage: 97,
    ratingTotal: 171,
    weekCount: 1,
    timeToComplete: 1,
    name: "Lesson | Small Talk & Conversational Vocabulary",
    description: "This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course. In this lesson, you will review professional conversational vocabulary.",
    lesson: [
        {
            tipe: 1,
            name: "Small Talk & Conversational Vocabulary",
            time: "4m"
        },
        {
            tipe: 2,
            name: "Small Talk & Conversational Vocabulary",
            time: "4m"
        },
        {
            tipe: 2,
            name: "Small Talk & Conversational Vocabulary",
            time: "4m"
        },{
            tipe: 2,
            name: "Small Talk & Conversational Vocabulary",
            time: "4m"
        },
        {
            tipe: 3,
            name: "Small Talk & Conversational Vocabulary",
            time: "4m"
        }
    ] as Lesson[]
}

function Syllabus(props: any) {
    const [vqState, setVqState] = useState(0)

    function vqClick() {
        if (vqState == 0) {
            setVqState(1)
        } else {
            setVqState(0)
        }
    }

    useEffect(() => {
        var id = (document.getElementById("vq-seeall-id")) as HTMLElement

        if (vqState == 0) {
            if (id.classList.contains("vq-show")) {
                id.classList.remove("vq-show")
            }

        } else {
            if (!id.classList.contains("vq-show")) {
                id.classList.add("vq-show")
            }
        }
    }, [vqState])

    return (
        <div className="about-bg ">
            <div className="cin-content">
                <div className="syl-wrapper">
                    <div className="syl">
                        <div className="syl-head">
                            <h1 className="syl-head-title">
                                Syllabus - What you will learn from this course
                            </h1>
                            <div className="syl-head-body">
                                <div className="inscb-row hb-box">
                                    <span className="ins-rating-text black-font">Instructor rating</span>
                                    <span className="mr-4px">
                                        <LikeIcon />
                                    </span>
                                    <span className="ins-rating-text black-font">
                                        {syllabusData.ratingPercentage}% ({syllabusData.ratingTotal} Ratings)
                                    </span>
                                    <span>
                                        <InfoIcon />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="syl-body">
                            <div className="syl-left">
                                <div className="s-left-text-box">
                                    <div className="sltb-week">
                                        week
                                    </div>
                                    <div className="sltb-number">
                                        {syllabusData.weekCount}
                                    </div>
                                </div>
                            </div>

                            <div className="syl-right">
                                <div className="sr-head-wrapper">
                                    <div className="sr-head">
                                        <div className="srh-icon-box">
                                            <div className="srh-icon">
                                                <div className="srh-icon-2">
                                                    <SylTimeIcon />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="srh-text-box">
                                            {syllabusData.timeToComplete} hour to complete
                                        </div>
                                    </div>

                                    <h3 className="sr-head-2">
                                        {syllabusData.name}
                                    </h3>

                                    <div className="sr-head-des">
                                        <p>
                                            {syllabusData.description}
                                        </p>
                                    </div>

                                    <div className="sr-vq">
                                        <div className="sr-vq-1">
                                            <div className="srh-icon-box">
                                                <div className="srh-icon book-icon-bg">
                                                    <div className="srh-icon-2">
                                                        <SylBookIcon />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="srh-text-box vq-head-text">
                                                1 video (Total 4 min), 3 readings, 1 quiz
                                            </div>
                                        </div>

                                        <div className="sr-vq-2">
                                            <button className="vq-btn" onClick={vqClick}>
                                                {vqState == 0 ? "See All" : "See Less"}
                                            </button>
                                        </div>
                                    </div>

                                    <div id="vq-seeall-id" className="vq-seeall">
                                        <div className="seeall-row">
                                            <div className="seeall-row-head">
                                                <span style={{ transform: "translateY(2px)" }}>
                                                    <SylVideoIcon />
                                                </span>
                                                <span className="srh-text">
                                                    1 video
                                                </span>
                                            </div>

                                            <div className="seeall-row-item">
                                                <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                </a>
                                                <span>
                                                    4m
                                                </span>
                                            </div>
                                        </div>

                                        <div className="seeall-row">
                                            <div className="seeall-row-head">
                                                <span style={{ transform: "translateY(2px)" }}>
                                                    <SylReadingIcon />
                                                </span>
                                                <span className="srh-text">
                                                    3 readings
                                                </span>
                                            </div>

                                            <div className="seeall-row-item">
                                                <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                </a>
                                                <span>
                                                    4m
                                                </span>
                                            </div>

                                            <div className="seeall-row-item">
                                                <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                </a>
                                                <span>
                                                    4m
                                                </span>
                                            </div>

                                            <div className="seeall-row-item">
                                                <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                </a>
                                                <span>
                                                    4m
                                                </span>
                                            </div>
                                        </div>

                                        <div className="seeall-row">
                                            <div className="seeall-row-head">
                                                <span style={{ transform: "translateY(2px)" }}>
                                                    <SylPraticeIcon />
                                                </span>
                                                <span className="srh-text">
                                                    4 pratice exercises
                                                </span>
                                            </div>

                                            <div className="seeall-row-item">
                                                <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                </a>
                                                <span>
                                                    4m
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Syllabus;