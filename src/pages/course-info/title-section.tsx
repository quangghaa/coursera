import React from "react";
import { ArrowRight, CourseInfoStarIcon, GatechImg, InstructorImg, LikeIcon } from "../../utils/course-info";
import { StarIcon } from "../../utils/course-item-img";

function TitleSection(props: any) {
    return (
        <div id="title-section" className="ts-bg">
            <div className="ts-content">
                <div className="ts-content-b">
                    <div className="tsc-item">
                        <div className="nav">
                            <div className="nav-item">
                                <a href="#">Browse</a>
                                <span className="nav-item-icon">
                                    <ArrowRight />
                                </span>
                            </div>

                            <div className="nav-item">
                                <a href="#">Language Learning</a>
                                <span className="nav-item-icon">
                                    <ArrowRight />
                                </span>
                            </div>

                            <div className="nav-item">
                                <a href="#">Learning English</a>
                            </div>
                        </div>

                        <div className="title-name">
                            <h1 className="tn-text">
                            Lesson | Small Talk & Conversational Vocabulary
                            </h1>
                        </div>

                        <div className="rating">
                            <div className="rating-b">
                                <div className="r-star">
                                    <a href="#">
                                        <div className="r-star-b">
                                            <div className="star-row">
                                                <div className="star-icon">
                                                    <CourseInfoStarIcon />
                                                </div>
                                                <div  className="star-icon">
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

                                            <span className="average">
                                                4.6
                                            </span>
                                            
                                            <div className="total">
                                                605 ratings
                                            </div>
                                        </div>

                                    </a>
                                </div>
                                <div className="r-like">
                                    <span className="y-div">|</span>
                                    <div>
                                        <a href="#">
                                            <div className="r-star-b">
                                                <div className="total">
                                                    <LikeIcon />
                                                </div>
                                                <div className="total">
                                                    97%
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ts-instructor">
                            <div className="tsi-box">
                                <a href="#">
                                    <div className="tsi-box-b">
                                        <div className="tsib-img">
                                            <InstructorImg />
                                        </div>

                                        <div className="tsib-text">
                                            Amalia B.Stephens
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="ts-enroll">
                            <div className="tse-main">
                                <div className="">
                                    <button className="tsem-btn">
                                        Go To Course
                                    </button>
                                </div>

                                <div className="tsem-state">
                                    <div className="tsem-state-b">
                                        Aready enrolled
                                    </div>
                                </div>
                            </div>

                            <div className="tse-sub">
                                <span><strong>222,014</strong> already enrolled</span>
                            </div>
                        </div>
                    </div>

                    <div className="tsc-item pdl-8per">
                        <div className="offer-by">
                            <div className="ob-head">
                                Offered By
                            </div>

                            <div className="ob-body">
                                <GatechImg />
                            </div>
                        </div>

                        <div className="something">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TitleSection;