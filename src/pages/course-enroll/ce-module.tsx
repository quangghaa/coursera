import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { BigVideoIcon, CalculatorIcon, CompleteIcon, DayIcon, DownIcon, EstimateIcon, LocationIcon, ReadingIcon, UptodateIcon, VerticalDotIcon, VideoIcon } from "../../utils/course-enroll";
import Navigation from "./navigation";
import "./style.css"

interface WeekGoal {
    totalDays: number,
    from: string,
    to: string,
    goal: number, // how many days per week
    checked: number[], // weekly checkin
}

const weekGoalData = [
    {
        totalDays: 75,
        from: "Feb 27",
        to: "Mar 5",
        goal: 2,
        checked: [1, 0, 1, 1, 0, 0, 0]
    }
] as WeekGoal[]

interface Schedule {
    startTime: string,
    estimatedTime: string,
    state: number, // 0- no deadline, 1-deadline remind
    weekGoal: WeekGoal[]
}

const scheduleData = [
    {
        startTime: "February 19, 2023 PST",
        estimatedTime: "March 5, 2023 PST",
        state: 0, 
        weekGoal: weekGoalData
    }
] as Schedule[]

interface LessonDetail {
    name: string,
    tipe: number, // 0-Reading, 1-Video, 2-Quiz
    effort: number,
    unit: string,
    state: number, // 0-not do, 1-doing, 2-done
}

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

interface SubLesson {
    title: string,
    details: LessonDetail[]
}

const sublessonData = [
    {
        title: "Small Talk & Conversation Vocabulary",
        details: lessonDetailData
    }
] as SubLesson[]

interface Lesson {
    name: string,
    description: string,
    totalVideoTime: number,
    totalVideoTimeLeft: number,
    timeUnit: string,
    totalReadings: number,
    totalReadingsCompleted: number,
    subLessons: SubLesson[],
    schedule: Schedule[]
}

const lessonData = [
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

interface Module {
    name: string,
    lessons: Lesson[]
}

const moduleData = {
    name: "Module 1",
    lessons: lessonData, 
} as Module

function CEModule(props: any) {
    const [showMainBody, setShowMainBody] = useState(1)
    const [showItem, setShowItem] = useState(1)

    function itemClick(e: any) {
        e.stopPropagation()
        if(showItem == 0) {
            setShowItem(1)
        } else {
            setShowItem(0)
        }
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
        var itemIconId = (document.getElementById("item-icon-id")) as HTMLElement
        var itemBodyId = (document.getElementById("item-body-id")) as HTMLElement

        if(showItem == 0) {
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
                                        lessonData[0].subLessons.map((sl: SubLesson) => {
                                            return <div className="mb-content">
                                            <h2 className="main-head">
                                                <button className="main-head-btn" onClick={(e: any) => itemClick(e)}>
                                                    <div id="item-icon-id" className="head-icon-box">
                                                        <DownIcon />
                                                    </div>
                                                    <div className="head-btn-text-box">
                                                        <div className="head-btn-text">
                                                            {sl.title}
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id="item-body-id" className="mbc-body-box">
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