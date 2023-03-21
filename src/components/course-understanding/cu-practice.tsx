import { Button } from "antd";
import React from "react";
import { PracticeQuiz } from "../../type/types";
import { LikeIcon, DisLikeIcon, ReportIcon } from "../../utils/course-understanding";

const praticeQuiz = {
    title: "Making Predictions",
    sub: "Practice Quiz",
    timeRequire: 30,
    unit: "min",
    receiveGrade: "80% or higher"
} as PracticeQuiz

interface Props {
    values: unknown
}

const CUPractice: React.FC<Props> = ({values}) => {
    return (
        <div id="practice-sec" className="practice-sec">
            <div className="prac-head">
                <h1>{praticeQuiz.title}</h1>
                <p>
                    {praticeQuiz.sub} • {praticeQuiz.timeRequire} {praticeQuiz.unit}
                </p>
                <button>Review Learning Objectives</button>
            </div>

            <div className="">
                <div className="assignment">
                    <p>
                        <strong>Submit your assignment</strong>
                    </p>

                    <button className="complete-btn">Resume assignment</button>
                </div>

                <div className="grade">
                    <div>
                        <p className="grade-title"><strong>Receive grade</strong></p>
                        <p className="grade-require">
                            <span>To Pass</span>
                            <span>{praticeQuiz.receiveGrade}</span>
                        </p>
                    </div>

                    <div>
                        <p className="grade-title"><strong>Your grade</strong></p>
                        {praticeQuiz.yourGrade ? <p className="your-grade"><strong>{praticeQuiz.yourGrade}</strong></p> : <p className="your-grade"><strong>-</strong></p>}
                    </div>
                </div>
            </div>

            <div className="react-row no-border">
                <button>
                    <span className="react-icon">
                        <LikeIcon />
                    </span>
                    <span>Like</span>
                </button>
                <button>
                    <span className="react-icon">
                        <DisLikeIcon />
                    </span>
                    <span>Dislike</span>
                </button>
                <button>
                    <span className="react-icon">
                        <ReportIcon />
                    </span>
                    <span>Report an issue</span>
                </button>
            </div>

        </div>
    )
}

export default CUPractice;