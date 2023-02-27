import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { BigVideoIcon, CalculatorIcon, CompleteIcon, DayIcon, DownIcon, EstimateIcon, LocationIcon, ReadingIcon, UptodateIcon, VerticalDotIcon, VideoIcon } from "../../utils/course-enroll";
import Navigation from "./navigation";
import "./style.css"

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
                                                Lesson | Small Talk & Conversational Vocabulary
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
                                                <strong>4 min</strong>
                                                &nbsp;
                                                of videos left
                                            </p>
                                        </span>
                                        <span>
                                            <div className="mbh-icon-box">
                                                <ReadingIcon />
                                            </div>
                                            <p className="mbh-text-box">
                                                All readings completed
                                            </p>
                                        </span>
                                    </div>
                                    <hr className="mb-hr" />
                                    <div className="mb-des">
                                        <div className="mb-des-content">
                                            This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course. In this lesson, you will review professional conversational vocabulary.
                                        </div>
                                    </div>
                                    <div className="mb-content">
                                        <h2 className="main-head">
                                            <button className="main-head-btn" onClick={(e: any) => itemClick(e)}>
                                                <div id="item-icon-id" className="head-icon-box">
                                                    <DownIcon />
                                                </div>
                                                <div className="head-btn-text-box">
                                                    <div className="head-btn-text">
                                                        Small Talk & Conversational Vocabulary
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="item-body-id" className="mbc-body-box">
                                            <div className="mbc-body">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="mbcb-link">
                                                            <div className="mbcb-item">
                                                                <div className="mbcb-item-a">
                                                                    <div className="mbcb-item-icon">
                                                                        <CompleteIcon />
                                                                    </div>
                                                                    <div className="mbcb-item-info">
                                                                        <p>
                                                                            Small Talk & Conversational Vocabulary
                                                                        </p>

                                                                        <div className="sub-item-info">
                                                                            <div className="sub-item-info-a">
                                                                                Reading
                                                                                <div className="sii-time">
                                                                                    <span className="sii-time-a">
                                                                                        •
                                                                                    </span>
                                                                                    <span className="sii-time-b">
                                                                                        10 min
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="mbcb-link">
                                                            <div className="mbcb-item">
                                                                <div className="mbcb-item-a">
                                                                    <div className="mbcb-item-icon">
                                                                        <CompleteIcon />
                                                                    </div>
                                                                    <div className="mbcb-item-info">
                                                                        <p>
                                                                            Learning objectives
                                                                        </p>

                                                                        <div className="sub-item-info">
                                                                            <div className="sub-item-info-a">
                                                                                Reading
                                                                                <div className="sii-time">
                                                                                    <span className="sii-time-a">
                                                                                        •
                                                                                    </span>
                                                                                    <span className="sii-time-b">
                                                                                        10 min
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="mbcb-link">
                                                            <div className="mbcb-item">
                                                                <div className="mbcb-item-a">
                                                                    <div className="mbcb-item-icon">
                                                                        <BigVideoIcon />
                                                                    </div>
                                                                    <div className="mbcb-item-info">
                                                                        <p>
                                                                            Small Talk & Conversational Vocabulary
                                                                        </p>

                                                                        <div className="sub-item-info">
                                                                            <div className="sub-item-info-a">
                                                                                Reading
                                                                                <div className="sii-time">
                                                                                    <span className="sii-time-a">
                                                                                        •
                                                                                    </span>
                                                                                    <span className="sii-time-b">
                                                                                        10 min
                                                                                    </span>
                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="mbcb-item-b">
                                                                    <button className="mbcb-item-b-btn">
                                                                        Resume
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="mbcb-link">
                                                            <div className="mbcb-item">
                                                                <div className="mbcb-item-a">
                                                                    <div className="mbcb-item-icon">
                                                                        <CompleteIcon />
                                                                    </div>
                                                                    <div className="mbcb-item-info">
                                                                        <p>
                                                                            Review and Practice Small Talk
                                                                        </p>

                                                                        <div className="sub-item-info">
                                                                            <div className="sub-item-info-a">
                                                                                Reading
                                                                                <div className="sii-time">
                                                                                    <span className="sii-time-a">
                                                                                        •
                                                                                    </span>
                                                                                    <span className="sii-time-b">
                                                                                        10 min
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="mbcb-link">
                                                            <div className="mbcb-item">
                                                                <div className="mbcb-item-a">
                                                                    <div className="mbcb-item-icon">
                                                                        <CalculatorIcon />
                                                                    </div>
                                                                    <div className="mbcb-item-info">
                                                                        <p>
                                                                            Check Your Knowledge
                                                                        </p>

                                                                        <div className="sub-item-info">
                                                                            <div className="sub-item-info-a">
                                                                                Reading
                                                                                <div className="sii-time">
                                                                                    <span className="sii-time-a">
                                                                                        •
                                                                                    </span>
                                                                                    <span className="sii-time-b">
                                                                                        10 min
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                                                Start date: February 19, 2023 PST
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
                                                Estimated end date: <strong>March 5, 2023 PST</strong>
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
                                                <h3 className="uptodate-title-text">
                                                You're up to date
                                                </h3>

                                                <p className="uptodate-text">
                                                You have no more upcoming Deadlines
                                                </p>
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
                                            Feb 27 - Mar 5 | Learn 2 days a week
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