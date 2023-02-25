import React from "react";
import ins from "../assets/course-info/instructor.png";
import gat from "../assets/course-info/gatech.png";
import insRating from "../assets/course-info/ins-rating.png"
import amalia from "../assets/course-info/Amalia_Stephens.png"
import members from "../assets/course-info/SvgMembers.png"
import book from "../assets/course-info/SvgBook.png"
import offeredBy from "../assets/course-info/offerd-by.png"
import pt from "../assets/course-info/Peter_Ward.png"
import adv from "../assets/course-info/adv-img.png"
import tabImg from "../assets/course-info/course-item-img.png"
import cert from "../assets/course-info/cert-img.jpg"
import asu from "../assets/course-info/ASUlogo.jpeg"

function ArrowRight() {
    return (
        <svg aria-hidden="true" focusable="false" style={{fill:"#fff", width:"15px", height:"15px"}} viewBox="0 0 48 48" role="img" aria-labelledby="ChevronRightfb28938e-7aef-4532-cf2f-29278cc7a7ab ChevronRightfb28938e-7aef-4532-cf2f-29278cc7a7abDesc" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)" points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8" role="presentation"></polygon></svg>
    )
}

function CourseInfoStarIcon() {
    return (
        <svg className="ci-star-icon-style" aria-hidden="true" viewBox="0 0 46 44" role="img" aria-labelledby="FilledStarcc471dee-8da5-4a1f-a45f-22ba8f0dfa61 FilledStarcc471dee-8da5-4a1f-a45f-22ba8f0dfa61Desc" xmlns="http://www.w3.org/2000/svg"><title id="FilledStarcc471dee-8da5-4a1f-a45f-22ba8f0dfa61">Filled Star</title><path stroke="#7C6919" stroke-width="3" d="M23 36.5L8.893 43.916l2.694-15.708L.175 17.084l15.772-2.292L23 .5l7.053 14.292 15.772 2.292-11.412 11.124 2.694 15.708z" fill-rule="evenodd" role="presentation"></path></svg>
    )
}

function LikeIcon() {
    return (
        <svg style={{fill:"#F7BB56",height:"14px",width:"14px"}} viewBox="0 0 48 48" role="img" aria-labelledby="ThumbsUpc64ca470-6966-48ef-8d16-30b4a31acbe2 ThumbsUpc64ca470-6966-48ef-8d16-30b4a31acbe2Desc" xmlns="http://www.w3.org/2000/svg"><title id="ThumbsUpc64ca470-6966-48ef-8d16-30b4a31acbe2">Thumbs Up</title><path d="M35.28 48H17.309c-6.31 0-11.705-4.816-12.55-11.2L2 20.159h7.614L23.237 0l.774.37c2.63 1.258 4.419 3.204 5.17 5.628.798 2.57.357 5.599-1.21 8.308l-1.662 2.98c-.42.847-.491 1.647-.17 2.152.304.482.993.72 1.903.72h8.481c1.237 0 4.366.264 6.705 2.703 1.999 2.083 2.925 5.203 2.752 9.272C45.583 41.417 37.702 48 35.28 48z" role="presentation"></path></svg>
    )
}

function InstructorImg() {
    return (
        <img src={ins} alt="instructor" className="ins-style" />
    )
}

function GatechImg() {
    return (
        <img src={gat} alt="gatech" className="gat-style" />
    )
}

function FlexDeadlineIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#B3A369",height:"20px",width:"20px"}} viewBox="0 0 48 48" role="img" aria-labelledby="Flexibledeadlinesfbf8e14c-f5e8-4bae-e900-7c8570cd7ff5 Flexibledeadlinesfbf8e14c-f5e8-4bae-e900-7c8570cd7ff5Desc" xmlns="http://www.w3.org/2000/svg"><title id="Flexibledeadlinesfbf8e14c-f5e8-4bae-e900-7c8570cd7ff5">Flexible deadlines</title><g stroke="none" stroke-width="1" fill-rule="evenodd" role="presentation"><g fill-rule="nonzero"><g><path d="M0,0 L48,0 L48,37 C48,43.0751322 43.0751322,48 37,48 L11,48 C4.92486775,48 0,43.0751322 0,37 L0,0 Z M46,37 L46,2 L2,2 L2,37 C2,41.9705627 6.02943725,46 11,46 L37,46 C41.9705627,46 46,41.9705627 46,37 Z M10,8 L38,8 L38,10 L10,10 L10,8 Z M34,17 L38,17 L38,21 L34,21 L34,17 Z M26,17 L30,17 L30,21 L26,21 L26,17 Z M18,17 L22,17 L22,21 L18,21 L18,17 Z M34,25 L38,25 L38,29 L34,29 L34,25 Z M26,25 L30,25 L30,29 L26,29 L26,25 Z M18,25 L22,25 L22,29 L18,29 L18,25 Z M10,25 L14,25 L14,29 L10,29 L10,25 Z M26,33 L30,33 L30,37 L26,37 L26,33 Z M18,33 L22,33 L22,37 L18,37 L18,33 Z M10,33 L14,33 L14,37 L10,37 L10,33 Z"></path></g></g></g></svg>
    )
}

function OnlineIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#B3A369",height:"20px",width:"20px"}} viewBox="0 0 48 48" role="img" aria-labelledby="100%online2a573ab1-ea85-4e13-e21e-06fd089a3a5f 100%online2a573ab1-ea85-4e13-e21e-06fd089a3a5fDesc" xmlns="http://www.w3.org/2000/svg"><title id="100%online2a573ab1-ea85-4e13-e21e-06fd089a3a5f">100% online</title><path d="M29.144,2.6074 C30.868,4.5654 32.31,7.5324 33.322,11.1824 C36.407,10.4934 38.17,9.4914 39.698,8.6014 C36.855,5.7034 33.218,3.5864 29.144,2.6074 L29.144,2.6074 Z M8.239,8.6654 C9.691,9.5474 11.656,10.5824 15.059,11.2674 C16.093,7.5044 17.581,4.4624 19.364,2.4914 C15.054,3.4194 11.208,5.6144 8.239,8.6654 L8.239,8.6654 Z M17.026,11.5984 C18.939,11.8624 21.228,12.0234 24,12.0234 C27.009,12.0234 29.408,11.8414 31.364,11.5454 C29.704,5.6564 26.962,2.1054 24.321,2.0024 C24.263,2.0014 24.206,2.0014 24.148,2.0004 C21.478,2.0484 18.698,5.6304 17.026,11.5984 L17.026,11.5984 Z M2.022,23.0004 L13.482,23.0004 C13.543,19.4734 13.93,16.1644 14.579,13.2154 C10.664,12.4204 8.499,11.1834 6.891,10.1844 C4.03,13.7214 2.24,18.1604 2.022,23.0004 L2.022,23.0004 Z M15.482,23.0004 L32.923,23.0004 C32.861,19.4734 32.472,16.2744 31.855,13.4984 C29.767,13.8234 27.209,14.0234 24,14.0234 C21.035,14.0234 18.585,13.8444 16.538,13.5524 C15.928,16.3154 15.543,19.4964 15.482,23.0004 L15.482,23.0004 Z M34.923,23.0004 L45.977,23.0004 C45.758,18.1314 43.95,13.6704 41.06,10.1234 C40.978,10.1704 40.896,10.2184 40.813,10.2664 C39.129,11.2484 37.204,12.3704 33.808,13.1304 C34.467,16.1004 34.861,19.4394 34.923,23.0004 L34.923,23.0004 Z M23.915,33.4534 C27.147,33.4534 29.78,33.6774 31.956,34.0364 C32.515,31.3704 32.864,28.3324 32.923,25.0004 L15.482,25.0004 C15.54,28.2944 15.883,31.3024 16.431,33.9474 C18.471,33.6414 20.922,33.4534 23.915,33.4534 L23.915,33.4534 Z M2.022,25.0004 C2.233,29.6894 3.92,34.0034 6.627,37.4834 C6.703,37.4394 6.78,37.3944 6.858,37.3494 C8.586,36.3414 10.707,35.1064 14.475,34.3004 C13.889,31.4754 13.54,28.3354 13.482,25.0004 L2.022,25.0004 Z M33.905,34.4184 C37.597,35.2674 39.727,36.5214 41.338,37.5274 C44.065,34.0394 45.766,29.7094 45.977,25.0004 L34.923,25.0004 C34.864,28.3824 34.506,31.5634 33.905,34.4184 L33.905,34.4184 Z M33.443,36.3704 C32.426,40.2264 30.938,43.3554 29.144,45.3924 C33.373,44.3754 37.132,42.1334 40.02,39.0634 C38.571,38.1704 36.649,37.1104 33.443,36.3704 L33.443,36.3704 Z M7.947,39.0284 C10.955,42.2394 14.911,44.5494 19.364,45.5084 C17.504,43.4524 15.965,40.2294 14.927,36.2404 C11.531,36.9614 9.609,38.0614 7.947,39.0284 L7.947,39.0284 Z M16.888,35.8944 C18.541,42.1664 21.404,45.9494 24.148,45.9994 C24.206,45.9994 24.263,45.9984 24.321,45.9974 C27.031,45.8924 29.847,42.1574 31.492,35.9904 C29.446,35.6594 26.966,35.4534 23.915,35.4534 C21.091,35.4534 18.793,35.6194 16.888,35.8944 L16.888,35.8944 Z M24.203,48.0004 L24,48.0004 C10.767,48.0004 0,37.2334 0,24.0004 C0,10.7664 10.767,0.0004 24,0.0004 L24.203,0.0004 C24.26,0.0004 24.317,0.0014 24.375,0.0034 C37.436,0.2044 48,10.8914 48,24.0004 C48,37.1084 37.436,47.7954 24.375,47.9974 C24.317,47.9994 24.26,48.0004 24.203,48.0004 L24.203,48.0004 Z" role="presentation"></path></svg>
    )
}

function TimeCompleteIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#B3A369",height:"20px",width:"20px" }} viewBox="0 0 48 48" role="img" aria-labelledby="Hourstocomplete3491d3ba-6c1f-41ed-a72c-a931a85cc3a9 Hourstocomplete3491d3ba-6c1f-41ed-a72c-a931a85cc3a9Desc" xmlns="http://www.w3.org/2000/svg"><title id="Hourstocomplete3491d3ba-6c1f-41ed-a72c-a931a85cc3a9">Hours to complete</title><path d="M24 47C11.318375 47 1 36.681625 1 24S11.318375 1 24 1s23 10.318375 23 23-10.318375 23-23 23zM2.91666667 24c0 11.6255417 9.45779163 21.0833333 21.08333333 21.0833333S45.0833333 35.6255417 45.0833333 24 35.6255417 2.91666667 24 2.91666667 2.91666667 12.3744583 2.91666667 24zm19.12500003 1.9166667V6.70833333h2.9166666V23H35.5v2.9166667H22.0416667z" role="presentation"></path></svg>
    )
}

function EnglishIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#B3A369",height:"20px",width:"20px"}} viewBox="0 0 48 48" role="img" aria-labelledby="Availablelanguages867b4a6d-fe83-4c18-96d1-6368535c0936 Availablelanguages867b4a6d-fe83-4c18-96d1-6368535c0936Desc" xmlns="http://www.w3.org/2000/svg"><title id="Availablelanguages867b4a6d-fe83-4c18-96d1-6368535c0936">Available languages</title><path d="M11.4782609,2.03497615 C6.30052174,2.03497615 2.08695652,6.143593 2.08695652,11.1923688 L2.08695652,43.5739269 L15.2556522,32.5596184 L36.5217391,32.5596184 C41.6994783,32.5596184 45.9130435,28.4510016 45.9130435,23.4022258 L45.9130435,11.1923688 C45.9130435,6.143593 41.6994783,2.03497615 36.5217391,2.03497615 L11.4782609,2.03497615 Z M0,48 L0,11.1923688 C0,5.02130366 5.14956522,0 11.4782609,0 L36.5217391,0 C42.8504348,0 48,5.02130366 48,11.1923688 L48,23.4022258 C48,29.5732909 42.8504348,34.5945946 36.5217391,34.5945946 L16.0278261,34.5945946 L0,48 Z M17.7391304,17.2972973 C17.7391304,15.6113196 16.3377391,14.2448331 14.6086957,14.2448331 C12.8796522,14.2448331 11.4782609,15.6113196 11.4782609,17.2972973 C11.4782609,18.983275 12.8796522,20.3497615 14.6086957,20.3497615 C16.3377391,20.3497615 17.7391304,18.983275 17.7391304,17.2972973 Z M27.1304348,17.2972973 C27.1304348,15.6113196 25.7290435,14.2448331 24,14.2448331 C22.2709565,14.2448331 20.8695652,15.6113196 20.8695652,17.2972973 C20.8695652,18.983275 22.2709565,20.3497615 24,20.3497615 C25.7290435,20.3497615 27.1304348,18.983275 27.1304348,17.2972973 Z M36.5217391,17.2972973 C36.5217391,15.6113196 35.1203478,14.2448331 33.3913043,14.2448331 C31.6622609,14.2448331 30.2608696,15.6113196 30.2608696,17.2972973 C30.2608696,18.983275 31.6622609,20.3497615 33.3913043,20.3497615 C35.1203478,20.3497615 36.5217391,18.983275 36.5217391,17.2972973 Z" role="presentation"></path></svg>
    )
}

function VIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.753 3.658L7.713 17.424.33 10.742l1.342-1.483 5.876 5.317 10.7-12.234 1.506 1.316z" fill="currentColor"></path></svg>
    )
}

function ArrowRightLinkIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z" fill="currentColor"></path></svg>
    )
}

function InsRatingIcon() {
    return (
        <img src={insRating} alt="instructor-rating" />
    )
}

function InfoIcon() {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-6"><g clip-path="url(#cds-react-aria-6_0)" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.01 14.93H7.99v-1h4.02v1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8.92H8v-1h2.5v6.5h-1v-5.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path><path d="M10 6.04a.87.87 0 100-1.74.87.87 0 000 1.74z"></path></g><defs><clipPath id="cds-react-aria-6_0"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
    )
}

function AmaliaImg() {
    return (
        <img src={amalia} alt="Amalia-Stephens" />
    )
}

function MembersIcon() {
    return (
        <img src={members} alt="members" />
    )
}

function BookIcon() {
    return (
        <img src={book} alt="book" />
    )
}

function OfferdByImg() {
    return (
        <img src={offeredBy} alt="offered-by" />
    )
}

function SliderImg() {
    return (
        <img src={pt} alt="peter-ward" />
    )
}

function AdvertiseImg() {
    return (
        <img src={adv} alt="advertise" />
    )
}

function TabSlideImg() {
    return (
        <img src={tabImg} alt="tab-slide-img" />
    )
}

function CertImg() {
    return (
        <img src={cert} alt="certificate" className="cert-img-style" />
    )
}

function CertSmallImg() {
    return (
        <img src={asu} alt="svu" />
    )
}

function SylTimeIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#FFF",height:"20px",width:"20px"}} viewBox="0 0 48 48" role="img" aria-labelledby="Hourstocomplete97eb8972-7e52-44e4-bf42-e1d602beaa4e Hourstocomplete97eb8972-7e52-44e4-bf42-e1d602beaa4eDesc" xmlns="http://www.w3.org/2000/svg"><title id="Hourstocomplete97eb8972-7e52-44e4-bf42-e1d602beaa4e">Hours to complete</title><path d="M24 47C11.318375 47 1 36.681625 1 24S11.318375 1 24 1s23 10.318375 23 23-10.318375 23-23 23zM2.91666667 24c0 11.6255417 9.45779163 21.0833333 21.08333333 21.0833333S45.0833333 35.6255417 45.0833333 24 35.6255417 2.91666667 24 2.91666667 2.91666667 12.3744583 2.91666667 24zm19.12500003 1.9166667V6.70833333h2.9166666V23H35.5v2.9166667H22.0416667z" role="presentation"></path></svg>
    )
}

function SylBookIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#FFF",height:"20px",width:"20px"}} viewBox="0 0 48 48" role="img" aria-labelledby="Reading34180784-c774-4a43-d823-f521c3931eda Reading34180784-c774-4a43-d823-f521c3931edaDesc" xmlns="http://www.w3.org/2000/svg"><title id="Reading34180784-c774-4a43-d823-f521c3931eda">Reading</title><path d="M28.67 14H38v19.68h-9.34c-4 0-4.08 2.32-4.08 2.32H23.4s-.05-2.32-4.03-2.32h-9.33l-.04-.53V14h9.34c1.96 0 3.76 1.1 4.66 2.83.9-1.74 2.7-2.83 4.67-2.83zm-.3 18H36V16h-7.64c-1 0-2 .56-2.7 1.25-.73.7-.66 1.6-.66 2.7h-1.98c0-.98.05-2-.67-2.7-.72-.7-1.66-1.26-2.68-1.25h-7.64L12 32h7.67c1.84 0 2.8.1 3.35 1V19.97H25V33c.55-.9 1.5-1 3.36-1zM24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16z" role="presentation"></path></svg>
    )
}

function SylVideoIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#2A73CC",height:"24px",width:"24px"}} viewBox="0 0 48 48" role="img" aria-labelledby="Videodedd1187-beef-4cec-ca66-a7bc6e6b556b Videodedd1187-beef-4cec-ca66-a7bc6e6b556bDesc" xmlns="http://www.w3.org/2000/svg"><title id="Videodedd1187-beef-4cec-ca66-a7bc6e6b556b">Video</title><path d="M19 33.94V15l15 9.47-15 9.47zM24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16z" role="presentation"></path></svg>
    )
}

function SylReadingIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#1F8354",height:"24px",width:"24px"}} viewBox="0 0 48 48" role="img" aria-labelledby="Reading3bfcadb1-8257-4eae-e808-5f51da882ed3 Reading3bfcadb1-8257-4eae-e808-5f51da882ed3Desc" xmlns="http://www.w3.org/2000/svg"><title id="Reading3bfcadb1-8257-4eae-e808-5f51da882ed3">Reading</title><path d="M28.67 14H38v19.68h-9.34c-4 0-4.08 2.32-4.08 2.32H23.4s-.05-2.32-4.03-2.32h-9.33l-.04-.53V14h9.34c1.96 0 3.76 1.1 4.66 2.83.9-1.74 2.7-2.83 4.67-2.83zm-.3 18H36V16h-7.64c-1 0-2 .56-2.7 1.25-.73.7-.66 1.6-.66 2.7h-1.98c0-.98.05-2-.67-2.7-.72-.7-1.66-1.26-2.68-1.25h-7.64L12 32h7.67c1.84 0 2.8.1 3.35 1V19.97H25V33c.55-.9 1.5-1 3.36-1zM24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16z" role="presentation"></path></svg>
    )
}

function SylPraticeIcon() {
    return (
        <svg aria-hidden="true" style={{fill:"#0156B8",height:"24px",width:"24px"}} viewBox="0 0 48 48" role="img" aria-labelledby="Quizf379fdf4-bef9-4e7f-b05f-bf2d8f388cc1 Quizf379fdf4-bef9-4e7f-b05f-bf2d8f388cc1Desc" xmlns="http://www.w3.org/2000/svg"><title id="Quizf379fdf4-bef9-4e7f-b05f-bf2d8f388cc1">Quiz</title><path d="M24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16zM21 17h10v2H21v-2zm0 6h10v2H21v-2zm0 6h10v2H21v-2zm-3-10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-5-21h22v28H13V10zm2 2v24h18V12H15z" role="presentation"></path></svg>
    )
}

function FaqRightIcon() {
    return (
        <svg aria-hidden="true" id="faq-right-icon-id" className="faq-right-icon-style" focusable="false" viewBox="0 0 48 48" role="img" aria-labelledby="ChevronRightbfaa93c1-88dc-41e6-b6f3-9e4e0fec92e9 ChevronRightbfaa93c1-88dc-41e6-b6f3-9e4e0fec92e9Desc" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)" points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8" role="presentation"></polygon></svg>
    )
}

export {ArrowRight, CourseInfoStarIcon, LikeIcon, InstructorImg, GatechImg,
        FlexDeadlineIcon, OnlineIcon, TimeCompleteIcon, EnglishIcon, VIcon,
        ArrowRightLinkIcon, InsRatingIcon, InfoIcon, AmaliaImg,
        MembersIcon, BookIcon, OfferdByImg, SliderImg, AdvertiseImg,
        TabSlideImg, CertImg, CertSmallImg,
        SylTimeIcon, SylBookIcon,SylVideoIcon, SylReadingIcon, SylPraticeIcon,
        FaqRightIcon}