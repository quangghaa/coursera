import React, { useEffect } from "react";
import Navigation from "./navigation";
import "./style.css"

function CEMessage(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    return (
        <div className="course-enroll">
            <Navigation />
            <div className="message-wrapper">
                <div className="message-pd">
                    <div className="message">
                        <div className="message-content">
                            <h1 className="mc-head">
                                Messages
                            </h1>
                            <div>
                                <div className="mc-sec">
                                    <div className="mc-icon-sec">
                                        <div className="mc-icon">
                                            Icon
                                        </div>
                                    </div>

                                    <div className="mc-content-sec">
                                        <div className="cs-1">
                                            <div className="cs-1-a">

                                            </div>
                                            <div className="cs-1-b">
                                                <p>13 days ago</p>
                                            </div>
                                        </div>

                                        <div className="cs-2">
                                            <p>
                                            Welcome to Lesson | Small Talk & Conversational Vocabulary! You’re joining thousands of learners currently enrolled in the course. I'm excited to have you in the class and look forward to your contributions to the learning community.
                                            </p>
                                            <p>
                                            To begin, I recommend taking a few minutes to explore the course site. Review the material we’ll cover each week, and preview the assignments you’ll need to complete to pass the course. Click Discussions to see forums where you can discuss the course material with fellow students taking the class.
                                            </p>
                                            <p>
                                            If you have questions about course content, please post them in the forums to get help from others in the course community. For technical problems with the Coursera platform, visit the Learner Help Center.
                                            </p>
                                            <p>
                                            Good luck as you get started, and I hope you enjoy the course!
                                            </p>
                                        </div>

                                        <div className="cs-3">
                                            <a href="#">
                                                <span>Go to course</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mc-sec">
                                    <div className="mc-icon-sec">
                                        <div className="mc-icon">
                                            Icon
                                        </div>
                                    </div>

                                    <div className="mc-content-sec">
                                        <div className="cs-1">
                                            <div className="cs-1-a">
                                            <h2>
                                            Welcome to Lesson | Small Talk & Conversational Vocabulary
                                            </h2>
                                            </div>
                                            <div className="cs-1-b">
                                                <p>13 days ago</p>
                                            </div>
                                        </div>

                                        <div className="cs-2">
                                            <p>
                                            Welcome to Lesson | Small Talk & Conversational Vocabulary! You’re joining thousands of learners currently enrolled in the course. I'm excited to have you in the class and look forward to your contributions to the learning community.
                                            </p>
                                            
                                        </div>

                                        <div className="cs-3">
                                            <a href="#">
                                                <span>Go to course</span>
                                            </a>
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

export default CEMessage;