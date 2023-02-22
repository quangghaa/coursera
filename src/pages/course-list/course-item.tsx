import Item from "antd/es/list/Item";
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
                                {props.item.university}
                            </div>
                        </div>

                        <div className="cai-name">
                            {props.item.name}
                        </div>

                        {props.item.gainSkills.length != 0 &&
                            <div className="cai-des small-font">
                                <strong>skills you'll gain:&nbsp;</strong>
                                <span className="gray-font">{props.item.gainSkills}</span>
                            </div>
                        }

                    </div>

                    <div className="ci-foot">
                        <div className="cai-review">
                            <span className="cai-icon">
                                <StarIcon/>
                            </span>
                            <span className="cair-average small-font mr-4px">{props.item.average}</span>
                            <span className="cair-total-view small-font gray-font">({props.item.totalReviews}) reviews</span>
                        </div>

                        <div className="cai-week small-font gray-font">
                            {props.item.courseType}
                        </div>
                    </div>
                </div>


            </div>

            
        </div>
    )
}

export default CourseItem;