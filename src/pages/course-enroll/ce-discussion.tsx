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
            <div>
                Discussion
            </div>

        </div>
    )
}

export default CEDiscussion;