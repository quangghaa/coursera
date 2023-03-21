import React from "react";
import beforeLecture from "../assets/course-understanding/before-lecture.png";
import keyPoint from "../assets/course-understanding/key-points.png";
import keyWord from "../assets/course-understanding/keywords.png";
import learnMore from "../assets/course-understanding/learn-more.png";

function BreadcrumbArrow() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-309"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 8L4.646 1.354l.708-.708L12.707 8l-7.353 7.354-.708-.707L11.293 8z" fill="currentColor"></path></svg>
    )
}

function BreadcrumbArrowLeft() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-355"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.707 8l6.647-6.646-.707-.708L3.292 8l7.353 7.354.708-.707L4.707 8z" fill="currentColor"></path></svg>
    )
}

function BeforeLectureImg() {
    return (
        <img src={beforeLecture} alt="before-lecture" />
    )
}

function KeyPointsImg() {
    return (
        <img src={keyPoint} alt="key-points" />
    )
}

function KeyWordImg() {
    return (
        <img src={keyWord} alt="key-words" />
    )
}

function LearnMoreImg() {
    return (
        <img src={learnMore} alt="learn-more" />
    )
}

function PdfIcon() {
    return (
        <svg aria-labelledby="cds-react-aria-351-title" fill="none" focusable="false" height="24" role="img" viewBox="0 0 24 24" width="24" id="cds-react-aria-351"><title id="cds-react-aria-351-title">PDF File</title><path fill-rule="evenodd" clip-rule="evenodd" d="M16.04 1.84a4.71 4.71 0 015.168 1.031l.14.13.007.006a4.5 4.5 0 010 6.345l-.008.008-.58.56-.694-.72.576-.556a3.5 3.5 0 00.003-4.925l-.14-.13-.008-.008a3.71 3.71 0 00-5.288 0l-.762.773-9.998 9.997-.002.003-.74.75a3.71 3.71 0 005.108 5.378l.148-.139.676-.697 7.07-7.07a1.621 1.621 0 00-2.29-2.295l-.922.952-6.28 6.3-.708-.706 6.277-6.297.923-.954a2.621 2.621 0 013.708 3.708l-7.068 7.067-.685.706-.176.164a4.71 4.71 0 01-6.49-6.823l.001-.001.74-.75 9.998-9.998.002-.003.758-.767c.438-.445.96-.799 1.537-1.04z" fill="currentColor"></path></svg>
    )
}

function MarkCompleteIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 24 24" width="24" id="cds-react-aria-390"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.775 3.633L9.196 21.475.305 12.868l1.39-1.437 7.33 7.094 13.2-16.158 1.55 1.266z" fill="currentColor"></path></svg>
    )
}

function LikeIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-386"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.2.59v0h.018a1.322 1.322 0 01.135.01 2.393 2.393 0 011.27.532c.692.586 1.09 1.655.664 3.463l-.001.004c-.116.471-.382 1.57-.574 2.381H15.6c1.325 0 2.118.458 2.531 1.163.37.63.37 1.364.369 1.776v.031a.503.503 0 01-.009.093L18 9.95l.491.093-.097.512c-.06.312-.14.737-.228 1.187a68.647 68.647 0 01-.48 2.327c-.052.212-.1.416-.146.612-.127.534-.239 1.002-.35 1.4-.152.541-.32 1.01-.565 1.381a2.052 2.052 0 01-1.052.83c-.434.157-.954.208-1.573.208H8.385a6.5 6.5 0 01-4.183-1.69H2a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h1.6c.7 0 1.181-.18 1.577-.514.417-.352.78-.908 1.17-1.739l.008-.015 2.4-4.68A.5.5 0 019.2.59zm8.3 9.314c-.001-.432-.018-.891-.231-1.255-.187-.317-.594-.669-1.669-.669h-5.52a.5.5 0 01-.487-.613c.17-.732.57-2.39.72-3.004.373-1.58-.028-2.206-.336-2.468a1.31 1.31 0 00-.496-.256L7.249 5.99c-.408.865-.844 1.577-1.426 2.069-.604.51-1.324.75-2.223.75H2.5v7h1.9a.5.5 0 01.348.141 5.5 5.5 0 003.66 1.55H14c.58 0 .963-.052 1.232-.15.249-.09.415-.223.558-.44.157-.237.29-.58.437-1.1.106-.377.21-.816.335-1.341l.152-.637v-.003c.097-.39.294-1.375.47-2.28l.228-1.182.088-.464z" fill="currentColor"></path></svg>
    )
}

function DisLikeIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-387"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.427 1.719C4.86 1.56 5.38 1.51 6 1.51h5.616a6.5 6.5 0 014.183 1.7H18a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-1.6c-.7 0-1.18.181-1.576.518-.417.355-.78.913-1.172 1.745l-.006.013-2.4 4.74a.5.5 0 01-.446.274V19v.5h-.018a1.486 1.486 0 01-.136-.01 2.367 2.367 0 01-1.273-.543c-.688-.593-1.085-1.675-.66-3.51l.001-.006c.116-.471.382-1.57.574-2.381H4.4c-1.324 0-2.116-.458-2.53-1.155-.37-.624-.37-1.346-.37-1.736v-.029c0-.03.003-.06.008-.09l.027-.143a311.478 311.478 0 01.299-1.587c.174-.907.376-1.937.48-2.358l.146-.612c.127-.537.238-1.007.35-1.406.152-.543.32-1.012.565-1.384a2.051 2.051 0 011.052-.831zM2.5 10.176c.001.406.018.852.23 1.209.186.313.594.665 1.67.665h5.52a.5.5 0 01.487.613c-.17.732-.57 2.39-.72 3.003-.374 1.613.028 2.256.34 2.524.16.138.339.216.491.26l2.233-4.41c.408-.865.844-1.58 1.425-2.073.603-.513 1.323-.757 2.224-.757h1.1v-7h-1.9a.5.5 0 01-.349-.142 5.5 5.5 0 00-3.659-1.558H6c-.58 0-.963.051-1.232.149-.248.09-.415.224-.558.441-.157.238-.29.582-.437 1.104-.106.377-.21.818-.335 1.346l-.152.637v.003c-.097.389-.294 1.388-.47 2.308a292.255 292.255 0 00-.298 1.582l-.018.096z" fill="currentColor"></path></svg>
    )
}

function ReportIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" data-testid="unselectedFlagIcon" id="cds-react-aria-388"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5.5h15v10h-14V19h-1V.5zm1 9h13v-8h-13v8z" fill="currentColor"></path></svg>
    )
}

export {BreadcrumbArrow, BreadcrumbArrowLeft, BeforeLectureImg, KeyPointsImg, KeyWordImg, LearnMoreImg,
    PdfIcon, MarkCompleteIcon, LikeIcon, DisLikeIcon, ReportIcon};