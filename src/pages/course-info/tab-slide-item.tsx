import React from "react";
import { TabSlideImg } from "../../utils/course-info";

function TabSlideItem(props: any) {
    return (
        <div className="tsi-wrapper">
            <div className="tsi-content">
                <a href="#" className="tsic-a">
                    <div className="tsi-content-b">
                        <div className="tsicb-img">
                            <TabSlideImg />
                        </div>
                        <div className="tsicb-small-img">
                            <div className="small-img-bg"></div>
                        </div>
                        <div className="tsicb-info">
                            <div className="t-info-title">
                                Lesson | Express Yourself: Pronunciation
                            </div>
                            <div className="t-info-des">
                                Georgia Institude of Technology
                            </div>
                        </div>

                        <div className="tsicb-course">
                            <div className="course-box">1 course</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default TabSlideItem;