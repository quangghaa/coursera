import React from "react";
import item from "../assets/course-item/course-item-img.png"
import icon from "../assets/course-item/course-item-icon.png"


function CourseItemImg() {
    return (
        <img src={item} alt="course-item" className="course-item-img" />
    )
}

function CourseItemIcon() {
    return (
        <img src={icon} alt="course-item-icon" className="course-item-icon" />
    )
}

function StarIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-3"><path d="M13.63 6.32h-4L8.3 2.22a.33.33 0 00-.547-.143.35.35 0 00-.083.123L6.32 6.32h-4a.34.34 0 00-.32.32.36.36 0 00.12.27L5.5 9.49l-1.3 4.08a.33.33 0 00.23.41.358.358 0 00.3-.05L8 11.39l3.28 2.54a.33.33 0 00.46 0 .3.3 0 00.06-.31l-1.31-4.13 3.37-2.58a.32.32 0 00.08-.45.34.34 0 00-.136-.112c-.055-.024-.063-.034-.123-.028h-.051z" fill="#F2D049"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.723 1.525a.83.83 0 011.054.546L9.993 5.82h3.668a.635.635 0 01.317.058l.02.01.012.005a.84.84 0 01.336.275l.001.002a.82.82 0 01-.191 1.143l-3.083 2.36 1.2 3.786a.8.8 0 01-.166.81l-.009.01-.01.01a.83.83 0 01-1.131.023L8 12.022l-2.975 2.312-.012.008a.86.86 0 01-1.007-.026.832.832 0 01-.286-.885l.003-.013 1.194-3.744L1.8 7.296l-.014-.013a.86.86 0 01-.287-.645V6.61a.84.84 0 01.791-.79l.015-.001h3.652L7.2 2.029l.006-.016a.85.85 0 01.51-.485l.007-.003zM4.298 14.462h-.002l.134-.482-.132.482zM7.98 2.857L6.682 6.82H2.826l3.257 2.486-1.244 3.907 3.16-2.456 3.14 2.431-1.232-3.882 3.248-2.486H9.267L7.98 2.857zm5.75 3.96z" fill="#7C6919"></path></svg>
    )
}

function PreviousArrowIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-14"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.707 8l6.647-6.646-.707-.708L3.292 8l7.353 7.354.708-.707L4.707 8z" fill="currentColor"></path></svg>
    )
}

function NextArrowIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-15"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 8L4.646 1.354l.708-.708L12.707 8l-7.353 7.354-.708-.707L11.293 8z" fill="currentColor"></path></svg>
    )
}

export {CourseItemImg, CourseItemIcon, StarIcon,
    PreviousArrowIcon, NextArrowIcon};