import React from "react";
import { ArrowRightLinkIcon, EnglishIcon, FlexDeadlineIcon, OnlineIcon, TimeCompleteIcon, VIcon } from "../../utils/course-info";

function About(props: any) {
    return (
        <div className="about-bg">
            <div className="cin-content">
                <div className="about">
                    <div className="about-b">
                        <div className="ab-left">
                            <h2 className="abl-title">
                                About this Course
                            </h2>

                            <div className="abl-recent-view">
                                218,045 recent views
                            </div>

                            <div className="abl-des">
                                <p className="abld-para">
                                    This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course.
                                </p>

                                <p className="abld-para">
                                    In this lesson, you will review professional conversational vocabulary.
                                </p>
                            </div>
                        </div>

                        <div className="ab-right">
                            <div className="abr-head">
                                <div className="product-glance">
                                    <div className="pg-item">
                                        <div className="pgi-icon">
                                            <FlexDeadlineIcon />
                                        </div>

                                        <div className="pgi-info">
                                            <div className="pgi-head">
                                                Flexible deadlines
                                            </div>
                                            <div className="pgi-body">
                                                Reset deadlines in accordance to your schedule.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pg-item">
                                        <div className="pgi-icon">
                                            <OnlineIcon />
                                        </div>

                                        <div className="pgi-info">
                                            <div className="pgi-head">
                                                100% Online
                                            </div>
                                            <div className="pgi-body">
                                                Start instantly and learn at your own schedule.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pg-item">
                                        <div className="pgi-icon">
                                            <TimeCompleteIcon />
                                        </div>

                                        <div className="pgi-info">
                                            <div className="pgi-head">
                                                Approx. 1 hour to complete
                                            </div>

                                        </div>
                                    </div>

                                    <div className="pg-item">
                                        <div className="pgi-icon">
                                            <EnglishIcon />
                                        </div>

                                        <div className="pgi-info">
                                            <div className="pgi-head">
                                                English
                                            </div>
                                            <div className="pgi-body">
                                                Subtitles: Arabic, French, Bengali, Ukrainian, Portuguese (European), Chinese (Simplified), Italian, Portuguese
                                            </div>
                                            <div className="pgi-show-all">
                                                <span className="pgi-show-all-btn">SHOW ALL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="abr-tail">
                                <div className="pg-item">
                                    <div className="pgi-icon">
                                        <VIcon />
                                    </div>

                                    <div className="pgi-info">
                                        <div className="pgi-head">
                                            Could your company benefit from training employees on in-demand skills?
                                        </div>
                                        <div className="link-btn-box">
                                            <a href="#" className="link-btn">
                                                Try Coursera for Business
                                                &nbsp;
                                                <ArrowRightLinkIcon />
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

export default About;