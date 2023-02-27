import React, { useEffect } from "react";
import Navigation from "./navigation";
import "./style.css"

function CEMessage(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    return (
        <div className="course-enroll">
            <Navigation />
            <div>
                Message
            </div>

        </div>
    )
}

export default CEMessage;