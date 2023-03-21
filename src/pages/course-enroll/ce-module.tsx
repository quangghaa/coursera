import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { Lesson, LessonDetail, Module, Schedule, SubLesson, WeekGoal } from "../../type/types";
import { BigVideoIcon, CalculatorIcon, CompleteIcon, DayIcon, DownIcon, EstimateIcon, LocationIcon, ReadingIcon, UptodateIcon, VerticalDotIcon, VideoIcon } from "../../utils/course-enroll";
import Navigation from "./navigation";
import "./style.css"


const weekGoalData = [
    {
        totalDays: 75,
        from: "Feb 27",
        to: "Mar 5",
        goal: 2,
        checked: [1, 0, 1, 1, 0, 0, 0]
    }
] as WeekGoal[]

const scheduleData = [
    {
        startTime: "February 19, 2023 PST",
        estimatedTime: "March 5, 2023 PST",
        state: 0, 
        weekGoal: weekGoalData
    }
] as Schedule[]

const lessonDetailData = [
    {
        name: "Small Talk & Conversation Vocabulary",
        tipe: 0,
        effort: 10,
        unit: "min",
        state: 0
    },
    {
        name: "Learning Objectives",
        tipe: 0,
        effort: 10,
        unit: "min",
        state: 0
    },
    {
        name: "Small Talk & Conversation Vocabulary",
        tipe: 1,
        effort: 10,
        unit: "min",
        state: 1
    },
    {
        name: "Review and Pratice Small Talk",
        tipe: 0,
        effort: 10,
        unit: "min",
        state: 0
    },
    {
        name: "Check Your Knowledge",
        tipe: 2,
        effort: 1,
        unit: "question",
        state: 0
    },
] as LessonDetail[]

const introDetail = [
    {
        name: "Meet Your Classes",
        tipe: 3,
        effort: 10,
        unit: "min",
        state: 0
    }
] as LessonDetail[]

const makingPreDetail = [
    {
        name: "Making Predictions Before You Listen ",
        tipe: 1,
        effort: 10,
        unit: "min",
        state: 0
    },
    {
        name: "Prepare For Predicting and Review the Lesson",
        tipe: 0,
        effort: 30,
        unit: "min",
        state: 0
    },
    {
        name: "Making Predictions",
        tipe: 2,
        effort: 2,
        unit: "min",
        state: 0
    }
] as LessonDetail[]

const takingNoteDetail = [
    {
        name: "Note Taking Tutorial",
        tipe: 1,
        effort: 4,
        unit: "min",
        state: 0
    },
    {
        name: "Extend Your Knowledge and Review the Lesson",
        tipe: 0,
        effort: 30,
        unit: "min",
        state: 0
    },
    {
        name: "Listening Praticr #1: Listen and Take Notes",
        tipe: 1,
        effort: 6,
        unit: "min",
        state: 0
    },
    {
        name: "Use Your Notes to Answer These Questions",
        tipe: 2,
        effort: 5,
        unit: "questions",
        state: 0
    }
] as LessonDetail[]

const sublessonData = [
    {
        title: "Small Talk & Conversation Vocabulary",
        details: lessonDetailData
    },
    {
        title: "Introduction",
        details: introDetail
    },
    {
        title: "Making Predictions",
        details: makingPreDetail
    },
    {
        title: "Taking Notes",
        details: takingNoteDetail
    },
    {
        title: "Synthesizing Infomation",
        details: lessonDetailData
    },
    {
        title: "Grammar For Speaking",
        details: lessonDetailData
    },
    {
        title: "Vocabulary Pratice and Listening Resources",
        details: lessonDetailData
    },
    {
        title: "Graded Assignments",
        details: lessonDetailData
    },
] as SubLesson[]

const lessonData = [
    {
        name: "Listen, Speaking and Critical Thinking",
        description: "In this module, we will learn some skills necessary for listening to and speaking about academic topics at the undergraduate level.",
        totalVideoTime: 60,
        totalVideoTimeLeft: 21,
        timeUnit: "min",
        totalReadings: 8,
        totalReadingsCompleted: 6,
        subLessons: sublessonData,
        schedule: scheduleData
    },
    {
        name: "Lesson | Small Talk & Conversation Vocabulary",
        description: "This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course. In this lesson, you will review professional conversational vocabulary.",
        totalVideoTime: 60,
        totalVideoTimeLeft: 4,
        timeUnit: "min",
        totalReadings: 6,
        totalReadingsCompleted: 6,
        subLessons: sublessonData,
        schedule: scheduleData
    }
] as Lesson[]

const moduleData = {
    name: "Module 1",
    lessons: lessonData, 
} as Module

function CEModule(props: any) {
    const [showMainBody, setShowMainBody] = useState(1)
    // const [showItem, setShowItem] = useState(1)

    const [showItem, setShowItem] = useState<Map<number, number>>(new Map<number, number>())

    function itemClick(e: any, id: number) {
        e.stopPropagation()
        console.log("Check click: ", showItem)
        if(showItem.size == 0) return
        let v = showItem.get(id) 
        if(v == undefined) {
            return
        }
        if(v == 0) {
            showItem.set(id, 1)
        } else {
            if(v == 1) {
                showItem.set(id, 0)
            }
        }
        setShowItem(new Map<number, number>(showItem))
    }

    function mainHeadClick(e: any) {
        e.stopPropagation()
        if(showMainBody == 0) {
            setShowMainBody(1)
        } else {
            setShowMainBody(0)
        }
    }

    useEffect(() => {
        // init map
        let newMap = new Map<number, number>()
        for(let i = 0; i < lessonData[0].subLessons.length; i++) {
            newMap.set(i, 0)
        }

        setShowItem(newMap)
    }, [])

    useEffect(() => {
        var headIconId = (document.getElementById("head-icon-id")) as HTMLElement
        var mainBodyId = (document.getElementById("main-body-id")) as HTMLElement

        if(showMainBody == 0) {
            if(headIconId.classList.contains("down-hib")) {
                headIconId.classList.remove("down-hib")
            }
            if(mainBodyId.classList.contains("main-body-show")) {
                mainBodyId.classList.remove("main-body-show")
            }
        } else {
            if(!headIconId.classList.contains("down-hib")) {
                headIconId.classList.add("down-hib")
            }
            if(!mainBodyId.classList.contains("main-body-show")) {
                mainBodyId.classList.add("main-body-show")
            }
        }
    }, [showMainBody])
    useEffect(() => {
        if(showItem.size == 0) return
        for(let i = 0; i < lessonData[0].subLessons.length; i++) {
            var x = showItem.get(i)
            var iconId = "item-icon-" + i
            var contentId = "item-body-" + i
            var itemIconId = (document.getElementById(iconId)) as HTMLElement
            var itemBodyId = (document.getElementById(contentId)) as HTMLElement
            
            if(x == 0) {
                if(itemIconId.classList.contains("down-hib")) {
                    itemIconId.classList.remove("down-hib")
                }
                if(itemBodyId.classList.contains("main-body-show")) {
                    itemBodyId.classList.remove("main-body-show")
                }
            } else {
                if(!itemIconId.classList.contains("down-hib")) {
                    itemIconId.classList.add("down-hib")
                }
                if(!itemBodyId.classList.contains("main-body-show")) {
                    itemBodyId.classList.add("main-body-show")
                }
            }
        }

    }, [showItem])

    useEffect(() => {
        props.setPage(2)
    }, [])

    function mapType(tipeId: number) {
        switch(tipeId) {
            case 0: 
                return "Reading"
            case 1: 
                return "Video"
            case 2: 
                return "Pratice Quiz"
            default:
                return "Unknown"
        }
    }

    return (
        <div className="course-enroll">
            <Navigation />
            <div className="module">
                <div className="m-left">
                    <div className="ml-main-box">
                        <div className="ml-main-pd">
                            <div className="ml-main">
                                <h2 className="main-head">
                                    <button className="main-head-btn" onClick={(e: any) => mainHeadClick(e)}>
                                        <div id="head-icon-id" className="head-icon-box">
                                            <DownIcon />
                                        </div>
                                        <div className="head-btn-text-box">
                                            <div className="head-btn-text">
                                                {lessonData[0].name}
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="main-body-id" className="main-body">
                                    <div className="mb-head">
                                        <span>
                                            <div className="mbh-icon-box">
                                                <VideoIcon />
                                            </div>
                                            <p className="mbh-text-box">
                                                <strong>{lessonData[0].totalVideoTimeLeft}&nbsp;{lessonData[0].timeUnit}</strong>
                                                &nbsp;
                                                of videos left
                                            </p>
                                        </span>
                                        <span>
                                            <div className="mbh-icon-box">
                                                <ReadingIcon />
                                            </div>
                                            <p className="mbh-text-box">
                                                {lessonData[0].totalReadings == lessonData[0].totalReadingsCompleted ? "All readings completed"
                                                : 
                                                `${lessonData[0].totalReadingsCompleted}/${lessonData[0].totalReadings} completed`}
                                            </p>
                                        </span>
                                    </div>
                                    <hr className="mb-hr" />
                                    <div className="mb-des">
                                        <div className="mb-des-content">
                                            {lessonData[0].description}
                                        </div>
                                    </div>
                                    {
                                        lessonData[0].subLessons.map((sl: SubLesson, i: number) => {
                                            return <div className="mb-content">
                                            <h2 className="main-head">
                                                <button className="main-head-btn" onClick={(e: any) => itemClick(e, i)}>
                                                    <div id={"item-icon-" + i} className="head-icon-box">
                                                        <DownIcon />
                                                    </div>
                                                    <div className="head-btn-text-box">
                                                        <div className="head-btn-text">
                                                            {sl.title}
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id={"item-body-" + i} className="mbc-body-box">
                                                <div className="mbc-body">
                                                    <ul>
                                                        {
                                                            sl.details.map((ld: LessonDetail) => {
                                                                return <li>
                                                                <a href="#" className="mbcb-link">
                                                                    <div className="mbcb-item">
                                                                        <div className="mbcb-item-a">
                                                                            <div className="mbcb-item-icon">
                                                                                {ld.state == 2 ? <CompleteIcon /> : <BigVideoIcon />}
                                                                            </div>
                                                                            <div className="mbcb-item-info">
                                                                                <p>
                                                                                    {ld.name}
                                                                                </p>
        
                                                                                <div className="sub-item-info">
                                                                                    <div className="sub-item-info-a">
                                                                                        {mapType(ld.tipe)}
                                                                                        <div className="sii-time">
                                                                                            <span className="sii-time-a">
                                                                                                •
                                                                                            </span>
                                                                                            <span className="sii-time-b">
                                                                                                {ld.effort} {ld.unit}
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
        
                                                                            </div>
                                                                        </div>
                                                                        {ld.tipe == 1 && ld.state == 1 ? 
                                                                        <div className="mbcb-item-b">
                                                                            <button className="mbcb-item-b-btn">
                                                                                Resume
                                                                            </button>
                                                                        </div> : 
                                                                        <></>}
                                                                        {ld.tipe == 0 && ld.state == 0 ? 
                                                                        <div className="mbcb-item-b">
                                                                            <button className="mbcb-item-b-btn">
                                                                                Mark
                                                                            </button>
                                                                        </div> : 
                                                                        <></>}
                                                                    </div>
        
                                                                </a>
                                                            </li>
                                                            })
                                                        }
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-right">
                    <div className="m-right-content">
                        <div className="mr-item">
                            <div className="mri-content">
                                <div>
                                    <div className="mri-schedule">
                                        <div className="sc-title-box">
                                            <h3 className="sc-title">
                                                Schedule
                                            </h3>
                                        </div>

                                        <div className="sc-start-date-box">
                                            <div className="location-icon-box">
                                                <LocationIcon />
                                            </div>
                                            <p>
                                                Start date: {lessonData[0].schedule[0].startTime}
                                            </p>
                                        </div>

                                        <div className="vertical-dot-box">
                                            <VerticalDotIcon />
                                        </div>

                                        <div className="sc-start-date-box">
                                            <div className="location-icon-box">
                                                <EstimateIcon />
                                            </div>
                                            <p>
                                                Estimated end date: <strong>{lessonData[0].schedule[0].estimatedTime}</strong>
                                            </p>   
                                        </div>
                                    </div>
                                    <hr className="mri-hr"/>
                                    <div className="mri-uptodate">
                                        <div className="uptodate-content">
                                            <div className="uptodate-icon-box">
                                                <UptodateIcon />
                                            </div>
                                            <div className="uptodate-info-box">
                                                {lessonData[0].schedule[0].state == 0 ? 
                                                <>
                                                    <h3 className="uptodate-title-text">
                                                    You're up to date
                                                    </h3>

                                                    <p className="uptodate-text">
                                                    You have no more upcoming Deadlines
                                                    </p>
                                                </> : <>Something</>}
                                                
                                            </div>

                                        </div>
                                        <hr className="uptodate-hr"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mr-item">
                            <div className="weekly-goal">
                                <div className="weekly-goal-a">
                                    <div className="wg-left">
                                        <h3>My Weekly Goal</h3>
                                        <div className="wg-time">
                                            <p>
                                                {lessonData[0].schedule[0].weekGoal[0].from} - {lessonData[0].schedule[0].weekGoal[0].to} | Learn {lessonData[0].schedule[0].weekGoal[0].totalDays} per week
                                            </p>
                                        </div>
                                        <div className="wg-days">
                                            <div className="wg-day">
                                                 <div className="wg-day-icon-box">
                                                    <DayIcon />
                                                 </div>

                                                 <div className="wg-day-text-box">
                                                    <p>Mo</p>
                                                 </div>
                                            </div>
                                            <div className="wg-day">
                                                 <div className="wg-day-icon-box">
                                                    <DayIcon />
                                                 </div>

                                                 <div className="wg-day-text-box">
                                                    <p>Tu</p>
                                                 </div>
                                            </div>
                                            <div className="wg-day">
                                                 <div className="wg-day-icon-box">
                                                    <DayIcon />
                                                 </div>

                                                 <div className="wg-day-text-box">
                                                    <p>We</p>
                                                 </div>
                                            </div>
                                            <div className="wg-day">
                                                 <div className="wg-day-icon-box">
                                                    <DayIcon />
                                                 </div>

                                                 <div className="wg-day-text-box">
                                                    <p>Th</p>
                                                 </div>
                                            </div>
                                            <div className="wg-day">
                                                 <div className="wg-day-icon-box">
                                                    <DayIcon />
                                                 </div>

                                                 <div className="wg-day-text-box">
                                                    <p>Fr</p>
                                                 </div>
                                            </div>
                                            <div className="wg-day">
                                                 <div className="wg-day-icon-box">
                                                    <DayIcon />
                                                 </div>

                                                 <div className="wg-day-text-box">
                                                    <p>Sa</p>
                                                 </div>
                                            </div>
                                            <div className="wg-day">
                                                 <div className="wg-day-icon-box">
                                                    <DayIcon />
                                                 </div>

                                                 <div className="wg-day-text-box">
                                                    <p>Su</p>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wg-right">
                                        <Progress width={68} type="circle" percent={75} format={(percent) => `${percent} Days`} />
                                    </div>
                                </div>
                                <div className="wg-btn-box">
                                    <button className="wg-btn">
                                        Edit
                                    </button>
                                </div>
                            </div>
                            <hr className="uptodate-hr"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CEModule;