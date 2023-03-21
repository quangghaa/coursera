import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import CUBreadcrumb from "../../components/course-understanding/cu-breadcrumb";
import CUDiscussion from "../../components/course-understanding/cu-discussion";
import CUNavigation from "../../components/course-understanding/cu-navigation";
import CUPractice from "../../components/course-understanding/cu-practice";
import CUReading from "../../components/course-understanding/cu-reading";
import CUVideo from "../../components/course-understanding/cu-video";
import { LessonDetail, SubLesson } from "../../type/types";
import "./style.css";


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

function CourseUnderstanding(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    const [selectedLesson, setSelectedLesson] = useState<LessonDetail>()
    
    const navItemClick = (lesson: LessonDetail) => {
        setSelectedLesson(lesson)
    }

    return (
        <div id="course-understanding" className="course-understanding">
            <div className="cu-head">
                <CUBreadcrumb values={""} />
            </div>

            <div className="cu-body">
                <div className="nav-wrapper">
                    <CUNavigation values={""} func={navItemClick} navData={sublessonData} />
                </div>

                <div className="main-body">
                    {selectedLesson?.tipe == 0 && 
                    <CUReading values={""} />}
                    {selectedLesson?.tipe == 1 && 
                    <CUVideo values={""} />}
                    {selectedLesson?.tipe == 2 &&
                    <CUPractice values={""} />}
                    {selectedLesson?.tipe == 3 &&
                    <CUDiscussion values={""} />}
                </div>
            </div>
        </div>
    )
}

export default CourseUnderstanding;