import React, { useEffect } from "react";
import Navigation from "./navigation";
import "./style.css"

function CENote(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    return (
        <div className="course-enroll">
            <Navigation />
            <div>
                Note
            </div>

        </div>
    )
}

export default CENote;