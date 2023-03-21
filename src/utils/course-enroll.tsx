import React from "react";
import navLogo from "../assets/course-enroll/nav-logo.png"
import noteIcon from "../assets/course-enroll/icon_note.svg"
import highlightIcon from "../assets/course-enroll/icon_highlight.svg"
import ama from "../assets/course-enroll/Amalia_Stephens.png"
import intro1 from "../assets/course-enroll/1_intro.png"

function NavLogo() {
    return (
        <img src={navLogo} alt="nav-logo" className="nav-logo-style" />
    )
}

function DownIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-2"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path></svg>
    )
}

function VideoIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-330"><g clip-path="url(#cds-react-aria-330_0)" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"></path><path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z"></path></g><defs><clipPath id="cds-react-aria-330_0"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>
    )
}

function ReadingIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-331"><g clip-path="url(#cds-react-aria-331_0)" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"></path><path d="M3.5 5h3.518l.018.001a1.58 1.58 0 011.463 1.463l.001.018V12l-1 .03A1.1 1.1 0 006.484 11H3.5V5zm1 1v4H6.53a2.1 2.1 0 01.97.306V6.521A.58.58 0 006.98 6H4.5z"></path><path d="M8.982 5H12.5v6H9.517a1.1 1.1 0 00-1.018 1.03L7.5 12V6.5H8l-.499-.036a1.58 1.58 0 011.463-1.463L8.982 5zM8.5 6.52v3.786a2.1 2.1 0 01.97-.305L9.485 10H11.5V6H9.02a.58.58 0 00-.52.52z"></path></g><defs><clipPath id="cds-react-aria-331_0"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>
    )
}

function BigReadingIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-35"><g clip-path="url(#cds-react-aria-35_0)" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"><path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path><path d="M4.36 6.29h4.366l.015.001A1.88 1.88 0 0110.5 8.035l.001.017v7.088l-1 .03a1.56 1.56 0 00-1.446-1.46H4.36V6.29zm1 1v5.42h2.741c.51.032.997.215 1.399.523V8.09a.88.88 0 00-.807-.8H5.36z"></path><path d="M11.274 6.29h4.366v7.42h-3.695a1.55 1.55 0 00-1.446 1.458L9.5 15.14V8.07h.5l-.499-.035A1.88 1.88 0 0111.26 6.29l.015-.001zm-.774 1.8v5.14a2.55 2.55 0 011.402-.52h2.738V7.29h-3.333a.88.88 0 00-.807.8z"></path></g><defs><clipPath id="cds-react-aria-35_0"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
    )
}

function MessageIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-48"><g clip-path="url(#cds-react-aria-48_0)" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"><path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path><path d="M7.788 5.758A1.19 1.19 0 006.5 6.983v7.363a.15.15 0 00.25.117l1.969-2.023h4.474l.022.002a1.178 1.178 0 001.285-1.215V6.983a1.19 1.19 0 00-1.288-1.225l-.021.002H7.809l-.02-.002zm.062-.998A2.19 2.19 0 005.5 7.008v7.315a1.15 1.15 0 001.946.857l.006-.005 1.69-1.735h4.007a2.182 2.182 0 002.351-2.238V7.008a2.19 2.19 0 00-2.35-2.248h-5.3z"></path></g><defs><clipPath id="cds-react-aria-48_0"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
    )
}

function CompleteIcon() {
    return (
        <svg aria-labelledby="cds-react-aria-613-title" fill="none" focusable="false" height="20" role="img" viewBox="0 0 20 20" width="20" id="cds-react-aria-613"><title id="cds-react-aria-613-title">Completed</title><path d="M10 1a9 9 0 100 18 9 9 0 000-18zM8.36 14.63l-4-4L5.8 9.24l2.56 2.56L14.2 6l1.42 1.42-7.26 7.21z" fill="currentColor"></path></svg>
    )
}

function BigVideoIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-617"><g clip-path="url(#cds-react-aria-617_0)" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"><path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path><path d="M6.93 4.59L15.431 10 6.93 15.41V4.59zm1 1.82v7.18L13.569 10 7.93 6.41z"></path></g><defs><clipPath id="cds-react-aria-617_0"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
    )
}

function CalculatorIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-616"><g clip-path="url(#cds-react-aria-616_0)" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 4.5h9v11h-9v-11zm1 1v9h7v-9h-7z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.98h2.41v1H10v-1zM10 9.39h2.41v1H10v-1zM10 11.8h2.41v1H10v-1z"></path><path d="M8.19 8.08a.6.6 0 100-1.2.6.6 0 000 1.2zM8.19 10.49a.6.6 0 100-1.2.6.6 0 000 1.2zM8.19 12.9a.6.6 0 100-1.2.6.6 0 000 1.2z"></path></g><defs><clipPath id="cds-react-aria-616_0"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
    )
}

function LocationIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 24 24" width="24" id="cds-react-aria-663"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8.5 10a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.993 1.5A8.37 8.37 0 003.5 9.734c0 1.45.524 2.978 1.345 4.474.82 1.494 1.919 2.926 3.029 4.176a38.1 38.1 0 004.058 3.918l.068.056.068-.056a38.096 38.096 0 004.058-3.918c1.11-1.25 2.21-2.682 3.03-4.176.82-1.496 1.343-3.023 1.344-4.474A8.37 8.37 0 0012.007 1.5h-.014zM12 23l-.307.395-.002-.002-.006-.005-.02-.016a15.167 15.167 0 01-.37-.3 39.118 39.118 0 01-4.168-4.024c-1.14-1.283-2.291-2.777-3.16-4.359C3.103 13.111 2.5 11.413 2.5 9.73v-.008A9.37 9.37 0 0112 .5a9.37 9.37 0 019.5 9.222v.008c0 1.683-.602 3.38-1.468 4.96-.868 1.58-2.018 3.075-3.158 4.358a39.126 39.126 0 01-4.46 4.262l-.079.062-.02.017-.006.004-.001.001L12 23zm0 0l.308.394-.308.24-.307-.24L12 23z" fill="currentColor"></path></svg>
    )
}

function VerticalDotIcon() {
    return (
        <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="12" x2="1" y2="-4.37114e-08" stroke="#929599" stroke-width="2" stroke-dasharray="4 4"></line></svg>
    )
}

function EstimateIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 24 24" width="24" id="cds-react-aria-664"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 2.5h23v19H.5v-19zm1 1v17h21v-17h-21z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.43 12.52h1v3.453l1.24-.635 1.24.635V12.52h1v5.087l-2.24-1.145-2.24 1.145V12.52z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.67 7.27a2.63 2.63 0 100 5.26 2.63 2.63 0 000-5.26zM13.04 9.9a3.63 3.63 0 117.26 0 3.63 3.63 0 01-7.26 0z" fill="currentColor"></path></svg>
    )
}

function UptodateIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8099 11.8998C11.6099 13.5598 12.8099 22.7898 10.5399 27.8998C9.8799 29.4398 9.0699 30.9998 9.1999 32.7198C9.3699 35.1198 11.3099 37.0498 13.2999 38.2898C15.6637 39.7925 18.3658 40.6802 21.1602 40.8723C23.9546 41.0645 26.7527 40.5548 29.2999 39.3898C31.4411 38.3836 33.2871 36.843 34.6602 34.9164C36.0333 32.9898 36.8873 30.7421 37.1399 28.3898C37.5499 23.1698 34.6999 17.9598 30.9299 14.3298C27.1599 10.6998 21.9299 8.71984 17.8199 11.9498" fill="#D6EDF6"></path><path d="M17.5801 17.12H24.5201H17.5801ZM30.1201 13.12H27.4601V10.48L30.1201 13.12Z" stroke="black" stroke-width="0.81" stroke-linejoin="round"></path><path d="M17.5703 19.9902L24.5403 20.0202" stroke="black" stroke-width="0.81" stroke-linejoin="round"></path><path d="M17.5601 22.7803L24.5301 22.8103" stroke="black" stroke-width="0.81" stroke-linejoin="round"></path><path d="M17.5503 25.5703L24.5203 25.6003" stroke="black" stroke-width="0.81" stroke-linejoin="round"></path><path d="M17.5503 28.1504L24.5203 28.1804" stroke="black" stroke-width="0.81" stroke-linejoin="round"></path><path d="M26.2202 35.8702C27.0471 36.6011 28.0391 37.1204 29.1109 37.3835C30.1827 37.6466 31.3024 37.6457 32.3738 37.3808C33.4452 37.1159 34.4363 36.5949 35.262 35.8626C36.0877 35.1303 36.7234 34.2085 37.1144 33.1765C37.5055 32.1444 37.6402 31.0329 37.507 29.9373C37.3738 28.8417 36.9768 27.7948 36.3499 26.8864C35.723 25.9781 34.8851 25.2354 33.908 24.7222C32.9309 24.2091 31.8438 23.9407 30.7402 23.9402C30.5302 23.9402 30.3202 23.9402 30.1202 23.9402L26.2202 35.8702ZM23.9202 30.7302C23.9377 29.04 24.5813 27.4165 25.7265 26.1734C26.8717 24.9303 28.4372 24.156 30.1202 24.0002V13.1802L27.5002 10.4802L10.5002 10.4102L10.4102 35.8102L26.1902 35.8702C25.4712 35.228 24.897 34.4403 24.5056 33.5593C24.1143 32.6783 23.9147 31.7241 23.9202 30.7602V30.7302Z" stroke="black" stroke-width="0.81" stroke-linejoin="round"></path><circle cx="30.75" cy="30.75" r="6.5" fill="#D6EDF6"></circle><path d="M34.1501 28.9004L30.6101 32.6504L28.3701 30.7704" stroke="black" stroke-width="0.81" stroke-linejoin="round"></path><path d="M14.9637 16.5352L14.9595 17.8052L16.2295 17.8094L16.2337 16.5394L14.9637 16.5352Z" fill="black"></path><path d="M14.9102 19.2803V20.5503H16.1802V19.2803H14.9102Z" fill="black"></path><path d="M14.9437 22.1436L14.9395 23.4136L16.2094 23.4178L16.2137 22.1478L14.9437 22.1436Z" fill="black"></path><path d="M14.9339 24.9532L14.9297 26.2231L16.1997 26.2274L16.2039 24.9574L14.9339 24.9532Z" fill="black"></path><path d="M14.9424 27.5362L14.9375 28.8062L16.2075 28.811L16.2124 27.541L14.9424 27.5362Z" fill="black"></path></svg>
    )
}

function DayIcon() {
    return (
        <svg width="24" height="24"><circle cy="12" cx="12" fill="#C4C4C4" r="12" stroke="#E5E7E8" stroke-width="1"></circle></svg>
    )
}

function DownIcon2() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" data-testid="chevron-down-icon" id="cds-react-aria-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 14.293L1.354 5.646l-.708.708L10 15.707l9.354-9.353-.707-.708L10 14.293z" fill="currentColor"></path></svg>
    )
}

function NoteIcon() {
    return (
        <img src={noteIcon} alt="note-icon" width={84} height={84}/>
    )
}

function HighlightIcon() {
    return (
        <img src={highlightIcon} alt="highlight-icon" width={84} height={84}/>
    )
}

function SelectedIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-25"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.753 3.658L7.713 17.424.33 10.742l1.342-1.483 5.876 5.317 10.7-12.234 1.506 1.316z" fill="currentColor"></path></svg>
    )
}

function ArrowRightIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-8"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.793 7.5L7.646 2.354l.708-.708L14.707 8l-6.353 6.354-.708-.707L12.793 8.5H2v-1h10.793z" fill="currentColor"></path></svg>
    )
}

function LikeIcon() {
    return (
        <svg className="like-icon-style" viewBox="0 0 48 48" role="img" aria-labelledby="ThumbsUp132695e4-b1a6-4fe3-ef58-038423b92d35 ThumbsUp132695e4-b1a6-4fe3-ef58-038423b92d35Desc" xmlns="http://www.w3.org/2000/svg"><title id="ThumbsUp132695e4-b1a6-4fe3-ef58-038423b92d35">Thumbs Up</title><path d="M4.358,22.274 L6.749,36.715 C7.472,42.179 12.039,46.274 17.378,46.274 L35.43,46.274 C36.741,46.101 43.819,40.689 44.18,32.232 C44.33,28.705 43.587,26.061 41.97,24.374 C40.153,22.479 37.665,22.274 36.679,22.274 L28.179,22.274 C26.538,22.311 25.251,21.716 24.556,20.618 C23.842,19.489 23.876,18.01 24.65,16.452 L26.349,13.401 C27.652,11.144 28.03,8.678 27.394,6.624 C26.88,4.966 25.716,3.58 24.005,2.578 L10.71,22.274 L4.358,22.274 Z M35.43,48.274 L17.378,48.274 C11.04,48.274 5.62,43.431 4.772,37.01 L2,20.274 L9.648,20.274 L23.333,0 L24.11,0.372 C26.753,1.637 28.549,3.594 29.304,6.032 C30.105,8.617 29.662,11.663 28.089,14.388 L26.419,17.384 C25.996,18.237 25.925,19.041 26.247,19.549 C26.553,20.034 27.245,20.274 28.16,20.274 L36.679,20.274 C37.921,20.274 41.065,20.539 43.414,22.991 C45.422,25.086 46.352,28.224 46.178,32.316 C45.78,41.653 37.863,48.274 35.43,48.274 L35.43,48.274 Z" role="presentation"></path></svg>
    )
}

function ReplyIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-76"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.983 1.5h8.034l.017.001a2.65 2.65 0 012.465 2.465l.001.017v5.084l-.001.017a2.65 2.65 0 01-2.465 2.465l-.017.001H6.21l-2.468 2.525c-.372.4-.934.511-1.408.324-.502-.199-.834-.695-.834-1.349V3.983l.001-.017a2.65 2.65 0 012.465-2.465l.017-.001zm.035 1A1.65 1.65 0 002.5 4.018v9.032c0 .296.128.39.201.419a.282.282 0 00.311-.077l.005-.006L5.79 10.55h6.192A1.65 1.65 0 0013.5 9.032V4.018A1.65 1.65 0 0011.982 2.5H4.018z" fill="currentColor"></path></svg>
    )
}

function LinkIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-25"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3.5H6v1H2.5v9h9V10h1v4.5h-11v-11zM13.5 2.5H10v-1h4.5V6h-1V2.5z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.646 8.646l7-7 .708.708-7 7-.708-.708z" fill="currentColor"></path></svg>
    )
}

function TeacherImg() {
    return (
        <img src={ama} className="teacher-style" alt="amalia" />
    )
}

function PaperIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 50 50" role="img" aria-labelledby="StackedFile91ea4bcf-3fd8-46bc-c279-838d62f75437 StackedFile91ea4bcf-3fd8-46bc-c279-838d62f75437Desc" xmlns="http://www.w3.org/2000/svg" style={{fill: "rgb(31, 31, 31)", height: "18px", width: "18px"}}><title id="StackedFile91ea4bcf-3fd8-46bc-c279-838d62f75437">Stacked File</title><g xmlns="http://www.w3.org/2000/svg" role="presentation"><path d="m37 6h6v29c0 7.1797-5.8203 13-13 13h-19v-6h-6v-42h32v6zm-30 34h4v-34h24v-4h-28v38zm34-5v-27h-28v38h17c6.0751 0 11-4.9249 11-11zm-21-17h14v2h-14v-2zm0 8h14v2h-14v-2zm0 8h10v2h-10v-2z"></path></g></svg>
    )
}

function RelatedCourseImg() {
    return (
        <img src={intro1} alt="relatedCourse" className="rc-img-style" />
    )
}

export {NavLogo, DownIcon, VideoIcon, ReadingIcon, CompleteIcon, BigVideoIcon, CalculatorIcon,
    LocationIcon, VerticalDotIcon, EstimateIcon, UptodateIcon, 
    DayIcon, DownIcon2, NoteIcon, HighlightIcon, SelectedIcon, 
    ArrowRightIcon, LikeIcon, ReplyIcon, LinkIcon, TeacherImg,
    PaperIcon, RelatedCourseImg, MessageIcon, BigReadingIcon}