import React from "react";
import { CourseItemIcon, CourseItemImg, StarIcon } from "../../utils/course-item-img";

function CourseItem(props: any) {

    return (
        <div className="course-item">
            <div className="course-item-b">
                <div className="ci-img">
                    <CourseItemImg />

                </div>
                <div className="ci-info">
                    <div className="ci-head">

                        <div className="ci-additional-info">
                            <div className="cai-icon">
                                <CourseItemIcon />
                            </div>
                            <div className="cai-text">
                                Georgia Institue of Technology
                            </div>
                        </div>

                        <div className="cai-name">
                            Lesson | Small & Conversational Vocabulary
                        </div>

                        {props.des == 1 &&
                            <div className="cai-des small-font">
                                <strong>skills you'll gain:&nbsp;</strong>
                                <span className="gray-font">Communication, Wrting Communication, Wrting Communication, Wrting</span>
                            </div>
                        }

                    </div>

                    <div className="ci-foot">
                        <div className="cai-review">
                            <span className="cai-icon">
                                <StarIcon/>
                            </span>
                            <span className="cair-average small-font mr-4px">4.3</span>
                            <span className="cair-total-view small-font gray-font">(605) reviews</span>
                        </div>

                        <div className="cai-week small-font gray-font">
                            Mixed Course 1-4 Weeks
                        </div>
                    </div>
                </div>


            </div>

            
        </div>
    )
}

export default CourseItem;