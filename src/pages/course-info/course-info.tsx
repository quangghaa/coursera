import React, { useEffect } from "react";
import About from "./about";
import CINavigation from "./CINavigation";
import Comment from "./comment";
import DiscoveryLink from "./discovery-link";
import EnrollOption from "./enroll-option";
import Faq from "./faq";
import Instructor from "./instructor";
import "./style.css";
import Syllabus from "./syllabus";
import TitleSection from "./title-section";

function CourseInfo(props: any) {
    useEffect(() => {
        props.setPage(1)
    }, [])

    return (
        <div>
            <TitleSection />
            <CINavigation />
            <About />
            <Instructor />
            <Syllabus />
            <Comment />
            <EnrollOption />
            <Faq />
            <DiscoveryLink />
        </div>
    )
} 
export default CourseInfo;