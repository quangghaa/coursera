import React, { useEffect, useState } from "react";
import { idText } from "typescript";
import { PaperIcon, RelatedCourseImg, TeacherImg } from "../../utils/course-enroll";
import { AmaliaImg, CourseInfoStarIcon } from "../../utils/course-info";
import Navigation from "./navigation";
import "./style.css"

function CECourseInfo(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    const [sylShow, setSylShow] = useState(0)
    function sylExpand() {
        if(sylShow == 0) {
            setSylShow(1)
        }
    }

    function sylShowLess() {
        if(sylShow == 1) {
            setSylShow(0)
        }
    }

    useEffect(() => {
        var expandId = (document.getElementById("syl-btn-expand")) as HTMLElement
        var showLessId = (document.getElementById("syl-btn-showless")) as HTMLElement
        var sylListId = (document.getElementById("syl-list")) as HTMLElement

        if(sylShow == 0) {
            if(expandId.classList.contains("syl-hide")) {
                expandId.classList.remove("syl-hide")
            }
            if(showLessId.classList.contains("syl-show")) {
                showLessId.classList.remove("syl-show")
            }
            if(sylListId.classList.contains("syl-show")) {
                sylListId.classList.remove("syl-show")
            }
        } else {
            if(!expandId.classList.contains("syl-hide")) {
                expandId.classList.add("syl-hide")
            }
            if(!showLessId.classList.contains("syl-show")) {
                showLessId.classList.add("syl-show")
            }
            if(!sylListId.classList.contains("syl-show")) {
                sylListId.classList.add("syl-show")
            }
        }
    }, [sylShow])

    const [hiwShow, setHiwShow] = useState(0) 

    function hiwShowClick() {
        if(hiwShow == 0) {
            setHiwShow(1)
        } else {
            setHiwShow(0)
        }
    }

    useEffect(() => {
        var hiwId = (document.getElementById("hiw-body")) as HTMLElement
        if(hiwShow == 0) {
            if(hiwId.classList.contains("hiw-show")) {
                hiwId.classList.remove("hiw-show")
            }
        } else {
            if(!hiwId.classList.contains("hiw-show")) {
                hiwId.classList.add("hiw-show")
            }
        }
    })

    return (
        <div className="course-enroll">
            <Navigation />
            <div className="ci-wrapper">
                <div className="ci-pd">
                    <div className="ci-content">
                        <div className="ci-title">
                            <h1>
                                Lesson | Small Talk & Conversational Vocabulary
                            </h1>
                            <p>
                                by Georgia Institute of Technology
                            </p>
                        </div>

                        <div className="ci-about">
                            <div className="cb-text">
                                <p>
                                    <span>About this Course</span>
                                    <p>
                                        This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course.
                                        <br />
                                        <br />
                                        In this lesson, you will review professional conversational vocabulary.
                                    </p>
                                </p>
                            </div>
                            <div className="cb-btn">
                                <button>
                                    <span>
                                        {/* <i className="cb-s-i"></i> */}
                                        Show less
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="ci-teacher">
                            <hr className="ci-hr" />
                            <ul>
                                <li>
                                    <div className="cit-pd">
                                        <div className="cit-content">
                                            <div className="t-content-a">
                                                <TeacherImg />
                                            </div>
                                            <div className="t-content-b">
                                                <p className="t-content-b-1">
                                                    <strong>
                                                        Taught by:
                                                    </strong>
                                                    <span>
                                                        <a href="#">
                                                            Amalia B. Stephens profile
                                                        </a>
                                                        <span>
                                                            , Lecturer
                                                        </span>
                                                    </span>
                                                </p>
                                                <div className="t-content-b-2">
                                                    Georgia Tech Language Institute
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="ci-basic">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="basic-col-1">
                                            <i></i>
                                            <span>Language</span>
                                        </td>

                                        <td className="basic-col-2">
                                            <div>
                                                <div>
                                                    <span>
                                                        English, Subtitles: Arabic, French, Bengali, Ukrainian, Portuguese (European), Chinese (Simplified), Italian, Portuguese (Brazilian), Vietnamese, Korean, Afrikaans, German, Javanese, Russian, Turkish, Burmese, Slovak, Spanish, Swahili, Japanese, Persian, Polish
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        <a href="#" className="bc-a">
                                                            Volunteer to translate subtitles for this course
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="basic-col-1">
                                            <i></i>
                                            <span>How to pass</span>
                                        </td>

                                        <td className="basic-col-2">
                                            <div>
                                                <div>
                                                    <span>
                                                        Pass all graded assignments to complete the course.
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="basic-col-1">
                                            <i></i>
                                            <span>User Ratings</span>
                                        </td>

                                        <td className="basic-col-2">
                                            <div>
                                                <div className="star-list">
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                </div>
                                                <div className="bc2-text">
                                                    Average User Rating 4.2
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="ci-section">
                            <h2>
                                <span>Syllabus</span>
                            </h2>
                            <div className="ci-section-content">
                                <div className="ci-section-head">
                                    <h3>
                                        <span>
                                            Module 1
                                        </span>
                                    </h3>
                                </div>

                                <div className="ci-section-body-pd">
                                    <div className="ci-section-body">
                                        <div className="csb-1">
                                            Lesson | Small Talk & Conversational Vocabulary
                                        </div>
                                        <div className="csb-2">
                                            <p>
                                                This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course. In this lesson, you will review professional conversational vocabulary.
                                            </p>
                                        </div>
                                        <div className="csb-3">
                                            <div className="csb-3-a">
                                                <span>
                                                    <PaperIcon />
                                                </span>
                                                <div className="csb-3-a-text">
                                                    <span>
                                                        1 video, 3 readings, 1 practice quiz
                                                    </span>
                                                    <span>
                                                        <button id="syl-btn-expand" className="expand-btn" onClick={sylExpand}>
                                                        expand
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="csb-3-b">
                                                <ol id="syl-list" className="csb-3-b-list">
                                                    <li>
                                                        <span>
                                                            <strong>Reading:</strong>
                                                            &nbsp;
                                                            <span>
                                                                Small Talk & Conversational Vocabulary
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <strong>Reading:</strong>
                                                            &nbsp;
                                                            <span>
                                                                Learning Objectives
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span>
                                                                <strong>Video:</strong>
                                                                &nbsp;
                                                                <span>
                                                                    Small Talk & Conversational Vocabulary
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <strong>Reading:</strong>
                                                            &nbsp;
                                                            <span>
                                                                Review and Practice Small Talk
                                                            </span>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <strong>Practice Quiz:</strong>
                                                            &nbsp;
                                                            <span>
                                                                Check Your Knowledge
                                                            </span>
                                                        </span>
                                                    </li>
                                                </ol>
                                            </div>

                                            <div id="syl-btn-showless" className="csb-3-c">
                                                <button onClick={sylShowLess}>
                                                    Show less
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="ci-section">
                            <h2>
                                <span>How It Works</span>
                            </h2>
                            <div className="ci-section-content">
                                <h3 className="hiw-head">
                                    General
                                </h3>
                                <div className="hiw-body-pd">
                                    <div id="hiw-body" className="hiw-body">
                                        <h3 className="no-m-top">
                                            What do start dates and end dates mean?
                                        </h3>
                                        <p>
                                            Once you enroll,
                                            you’ll have access to all videos, readings, quizzes, and programming
                                            assignments (if applicable). If you choose to
                                            explore the content without purchasing, you may not be able to access
                                            certain assignments.  If you don’t finish all graded assignments before
                                            the end of the session, you can reset your deadlines. Your
                                            progress will be saved and you’ll be able to pick up where you left off.
                                        </p>

                                        <h3>
                                            What are due dates? Is there a penalty for submitting my
                                            work after a due date?
                                        </h3>
                                        <p>
                                            Within a course, there are suggested due dates to help you
                                            manage your schedule and keep work from piling up. Quizzes and
                                            programming assignments can be submitted late without consequence.
                                            However, it is possible that you won't receive a grade if you submit
                                            your peer-graded assignment too late because classmates usually review
                                            assignment within three days of the assignment deadline.
                                        </p>

                                        <h3>
                                            Can I re-attempt an assignment?
                                        </h3>

                                        <p>
                                            Yes. If you want to improve your grade, you can always try again.
                                            If you’re re-attempting a peer-graded assignment, re-submit your work
                                            as soon as you can to make sure there’s enough time for your classmates
                                            to review your work. In some cases you may need to wait before
                                            re-submitting a programming assignment or quiz. We encourage you to
                                            review learning material during this delay.
                                        </p>
                                    </div>

                                    <div className="hiw-btn mt-10">
                                        <button onClick={hiwShowClick}>
                                            {hiwShow == 0 ? "More" : "Show less"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <a href="#" className="catalog-link">View the course in catalog</a>
                        
                        <div className="related-course-pd">
                            <div className="related-course">
                                <div>
                                    <h2 className="rc-head">
                                        Related Courses
                                    </h2>
                                </div>

                                <div>
                                    <a href="#" className="rc-a">
                                        <div className="rc-a-pd">
                                            <div className="rc">
                                                <div className="rc-1">
                                                    <RelatedCourseImg />
                                                </div>
                                                <div className="rc-2">
                                                    <div className="rc-2-a">
                                                        <h3>
                                                        Lesson | Business English Skills: Introducing Yourself in Business Settings 
                                                        </h3>
                                                    </div>
                                                    <div className="rc-2-b">
                                                        <span>
                                                        University of Washington
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="rc-a">
                                        <div className="rc-a-pd">
                                            <div className="rc">
                                                <div className="rc-1">
                                                    <RelatedCourseImg />
                                                </div>
                                                <div className="rc-2">
                                                    <div className="rc-2-a">
                                                        <h3>
                                                        Lesson | Business English Skills: Introducing Yourself in Business Settings 
                                                        </h3>
                                                    </div>
                                                    <div className="rc-2-b">
                                                        <span>
                                                        University of Washington
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="rc-a">
                                        <div className="rc-a-pd">
                                            <div className="rc">
                                                <div className="rc-1">
                                                    <RelatedCourseImg />
                                                </div>
                                                <div className="rc-2">
                                                    <div className="rc-2-a">
                                                        <h3>
                                                        Lesson | Business English Skills: Introducing Yourself in Business Settings 
                                                        </h3>
                                                    </div>
                                                    <div className="rc-2-b">
                                                        <span>
                                                        University of Washington
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CECourseInfo;