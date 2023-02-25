import { Progress } from "antd";
import React, { useState } from "react";
import { CourseInfoStarIcon } from "../../utils/course-info";


interface Star {
    tipe: string,
    percentage: number,
}

interface TopComment {
    star: number[],
    by: string,
    time: string,
    content: string,
}

interface Comment {
    average: number,
    totalReview: number,
    totalStarList: number[],
    starList: Star[],
    comments: TopComment[]
}

const commentData = {
    average: 4.9,
    totalReview: 100,
    totalStarList: [1, 1, 1, 1, 1],
    starList: [
        {
            tipe: "5 stars",
            percentage: 80
        },
        {
            tipe: "4 stars",
            percentage: 70
        },
        {
            tipe: "3 stars",
            percentage: 60
        },
        {
            tipe: "2 stars",
            percentage: 50
        },
        {
            tipe: "1 stars",
            percentage: 40
        },
    ] as Star[],
    comments: [
        {
            star: [1, 1, 1, 1, 1],
            by: "PC",
            time: "Sep 14, 2022",
            content: "hi! I did everything, is that all? how can i be completed?"
        },
        {
            star: [1, 1, 1, 1, 1],
            by: "PC",
            time: "Sep 14, 2022",
            content: "hi! I did everything, is that all? how can i be completed?"
        },
        {
            star: [1, 1, 1, 1, 1],
            by: "PC",
            time: "Sep 14, 2022",
            content: "hi! I did everything, is that all? how can i be completed?"
        },
        {
            star: [1, 1, 1, 1, 1],
            by: "PC",
            time: "Sep 14, 2022",
            content: "hi! I did everything, is that all? how can i be completed?"
        },
        {
            star: [1, 1, 1, 1, 1],
            by: "PC",
            time: "Sep 14, 2022",
            content: "hi! I did everything, is that all? how can i be completed?"
        },
        {
            star: [1, 1, 1, 1, 1],
            by: "PC",
            time: "Sep 14, 2022",
            content: "hi! I did everything, is that all? how can i be completed?"
        }
    ] as TopComment[]
} as Comment

function Comment(props: any) {
    const [reviews, setReviews] = useState([1, 2, 3, 4, 5])

    return (
        <div className="about-bg bg-gray">
                <div className="cin-content">
                    <div className="review-wrapper">
                        <div className="review">
                             <h2 className="review-head">
                                Reivews
                             </h2>

                             <div className="review-body">
                                <div className="rb-left">
                                    <div className="rbl-box">
                                        <div className="rbl-head">
                                            <div className="rblh-number">
                                                {commentData.average}
                                            </div>
                                            <div>
                                                <div className="star-row">
                                                    {
                                                        commentData.totalStarList.map((s: any) => {
                                                            return <div className="star-icon">
                                                                    <CourseInfoStarIcon />
                                                                </div>
                                                        })
                                                    }
                                                    
                                                </div>
                                                <a href="#" className="custom-a">
                                                    {commentData.totalReview} reviews
                                                </a>
                                            </div>
                                        </div>

                                        <div className="rbl-body">
                                            <div className="rblb-list">
                                                {
                                                    commentData.starList.map((s: Star) => {
                                                        return <div className="rblb-item">
                                                            <div className="ri-label">
                                                                {s.tipe}
                                                            </div>
                                                            <div className="ri-progress">
                                                                <Progress percent={s.percentage} size="small" status="active" />
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rb-right">
                                    <div className="rbr-content">
                                        <h3 className="rbrc-head">
                                        TOP REVIEWS FROM LESSON | SMALL TALK & CONVERSATIONAL VOCABULARY
                                        </h3>

                                        {
                                            commentData.comments.map((c: TopComment) => {
                                                return <div className="top-review">
                                                <div className="tr-star-row-box">
                                                    <div className="star-row">
                                                        {
                                                            c.star.map((s: any) => {
                                                                return <div className="star-icon">
                                                                        <CourseInfoStarIcon />
                                                                    </div>
                                                            })
                                                        }
                                                        
                                                    </div>
    
                                                </div>
    
                                                <div className="tr-author">
                                                    by {c.by} {c.time}
                                                </div>
    
                                                <p className="tr-text">
                                                    {c.content}
                                                </p>
                                            </div>
                                            })
                                        }

                                        <div className="mt-35px">
                                            <a href="#" className="tr-a-btn">
                                                View all reviews
                                            </a>
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

export default Comment;