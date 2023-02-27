import React, { useEffect } from "react";
import Navigation from "./navigation";
import "./style.css"

function CECourseInfo(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    return (
        <div className="course-enroll">
            <Navigation />
            <div>
                Course info
            </div>

        </div>
    )
}

export default CECourseInfo;