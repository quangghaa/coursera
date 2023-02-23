import React from "react";
import About from "./about";
import CINavigation from "./CINavigation";
import Instructor from "./instructor";
import "./style.css";
import TitleSection from "./title-section";

function CourseInfo(props: any) {
    return (
        <div>
            <TitleSection />
            <CINavigation />
            <About />
            <Instructor />
        </div>
    )
} 
export default CourseInfo;