import React from "react";
import { ArrowRightLinkIcon, EnglishIcon, FlexDeadlineIcon, OnlineIcon, TimeCompleteIcon, VIcon } from "../../utils/course-info";

interface AboutItem {
    icon: string,
    title: string,
    description: string
}

interface About {
    recentView: string,
    description: string[],
    deadline: AboutItem,
    tipe: AboutItem,
    timeToComplete: AboutItem,
    english: AboutItem
}

const aboutData = {
    recentView: "217,046",
    description: ["This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course. ", "In this lesson, you will review professional conversational vocabulary."],
    deadline: {icon: "", title: "Flexible deadline", description: "Reset deadlines in accordance to your schedule."} as AboutItem,
    tipe: {icon: "", title: "100% online", description: "Start instantly and learn at your own schedule"} as AboutItem,
    timeToComplete: {icon: "", title: "Approx. 1 hour to complete", description: ""} as AboutItem,
    english: {icon: "", title: "English", description: "Subtitles: Arabic, French, Bengali, Ukrainian, Portuguese (European), Chinese (Simplified), Italian, Portuguese (Brazilian), Vietnamese, Korean, Afrikaans, German, Javanese, Russian, Turkish, Burmese, English, Slovak, Spanish, Swahili, Japanese, Persian, Polish"} as AboutItem,
}

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
                                {aboutData.recentView} recent views
                            </div>

                            <div className="abl-des">
                                {
                                    aboutData.description.map((d: any) => {
                                        return <p className="abld-para">
                                                {d}
                                            </p>
                                    })
                                }
                            
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
                                                {aboutData.deadline.title}
                                            </div>
                                            <div className="pgi-body">
                                                {aboutData.deadline.description}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pg-item">
                                        <div className="pgi-icon">
                                            <OnlineIcon />
                                        </div>

                                        <div className="pgi-info">
                                            <div className="pgi-head">
                                                {aboutData.tipe.title}
                                            </div>
                                            <div className="pgi-body">
                                                {aboutData.tipe.description}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pg-item">
                                        <div className="pgi-icon">
                                            <TimeCompleteIcon />
                                        </div>

                                        <div className="pgi-info">
                                            <div className="pgi-head">
                                                {aboutData.timeToComplete.title}
                                            </div>

                                        </div>
                                    </div>

                                    <div className="pg-item">
                                        <div className="pgi-icon">
                                            <EnglishIcon />
                                        </div>

                                        <div className="pgi-info">
                                            <div className="pgi-head">
                                                {aboutData.english.title}
                                                English
                                            </div>
                                            <div className="pgi-body">
                                                {aboutData.english.description}
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