import React from "react";
import { SliderImg } from "../../utils/course-info";

function InstructorSlideItem(props: any) {

    return (
        <div className="si-wrapper">
            <div className="si-content">
                <div className="sic-img">
                    <SliderImg />
                </div>
                <div className="sic-content">
                    <p className="sic-text">
                        {props.data.content}
                    </p>
                    <div className="sic-caption-text">
                        {props.data.author}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorSlideItem;