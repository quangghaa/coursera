import { Input } from "antd";
import React, { useEffect } from "react";
import Navigation from "./navigation";
import "./style.css"

function CEDiscussion(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    return (
        <div className="course-enroll">
            <Navigation />
            <div className="discussion-wrapper">
                <div className="discussion">
                    <div className="dis-content">
                        <div className="dc-main">
                            <div className="dcm-title-box">
                                <div className="title-box-pd">
                                    <h1 className="title-box-text">
                                        Forums
                                    </h1>
                                </div>
                            </div>

                            <div className="dcm-content">
                                <div className="dcmc-left">
                                    <div className="search-row">
                                        <div className="search-row-a">
                                            <div className="sr-input-box">
                                                <Input placeholder="Search forum" size="large" />
                                                
                                            </div>
                                            <button className="sr-search-btn">
                                                    Search
                                            </button>
                                        </div>

                                        <div className="search-row-btn">
                                            <button className="create-post-btn">
                                                Create post
                                            </button>
                                        </div>
                                    </div>

                                    <div className="tag-section">

                                    </div>
                                </div>

                                <div className="dcmc-right">
                                    eight
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CEDiscussion;