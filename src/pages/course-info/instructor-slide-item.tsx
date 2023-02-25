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
                    Learning from leading scientists about what's going on in the field right now is so much different than the experience of reading a textbook.
                    </p>
                    <div className="sic-caption-text">
                        _Peter W.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorSlideItem;