import React, { useEffect, useState } from "react";
import { AdvertiseImg, AmaliaImg, ArrowRightLinkIcon, BookIcon, CertImg, CertSmallImg, CourseInfoStarIcon, FaqRightIcon, InfoIcon, InsRatingIcon, LikeIcon, MembersIcon, OfferdByImg, SylBookIcon, SylPraticeIcon, SylReadingIcon, SylTimeIcon, SylVideoIcon } from "../../utils/course-info";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";
import InstructorSlideItem from "./instructor-slide-item";
import { Progress, Tabs, TabsProps } from "antd";
import TabSlideItem from "./tab-slide-item";

interface InstructorI {
    average: string,
    totalRating: number,
    name: string,
    tipe: string,
    department: string, 
    learners: string,
    courses: number
}

const instructorData = {
    average: "4.58", 
    totalRating: 171,
    name: "Amalia B.Stephens",
    tipe: "Lecturer",
    department: "Geogia Tech Language Institude",
    learners: "1.206.332",
    courses: 10
} as InstructorI

interface OfferedBy {
    img: string,
    name: string, 
    description: string[],
}

const offeredByData = {
    img: "",
    name: "Georgia Institude of Technology",
    description: ["The Georgia Institute of Technology is one of the nation's top research universities, distinguished by its commitment to improving the human condition through advanced science and technology.", "Georgia Tech's campus occupies 400 acres in the heart of the city of Atlanta, where more than 20,000 undergraduate and graduate students receive a focused, technologically based education."]

} as OfferedBy

interface TopReview {
    img: string,
    content: string,
    author: string
}

const topReviewData = [
    {
        img: "",
        content: "Learning from leading scientists about what's going on in the field right now is so much different than the experience of reading a textbook.",
        author: "_Peter W."
    },
    {
        img: "",
        content: "Learning from leading scientists about what's going on in the field right now is so much different than the experience of reading a textbook.",
        author: "_Peter W."
    },
    {
        img: "",
        content: "Learning from leading scientists about what's going on in the field right now is so much different than the experience of reading a textbook.",
        author: "_Peter W."
    },
    {
        img: "",
        content: "Learning from leading scientists about what's going on in the field right now is so much different than the experience of reading a textbook.",
        author: "_Peter W."
    },
    {
        img: "",
        content: "Learning from leading scientists about what's going on in the field right now is so much different than the experience of reading a textbook.",
        author: "_Peter W."
    }
] as TopReview[]

interface RelatedCourse {
    img: string,
    offeredByImg: string,
    name: string,
    department: string,
    count: number
}

const relatedCourseData = [
    {
        img: "",
        offeredByImg: "",
        name: "Lesson | Express Yourself: Pronunciation",
        department: "Georgia Institude of Technology",
        count: 1
    },
    {
        img: "",
        offeredByImg: "",
        name: "Lesson | Express Yourself: Pronunciation",
        department: "Georgia Institude of Technology",
        count: 1
    },
    {
        img: "",
        offeredByImg: "",
        name: "Lesson | Express Yourself: Pronunciation",
        department: "Georgia Institude of Technology",
        count: 1
    },
    {
        img: "",
        offeredByImg: "",
        name: "Lesson | Express Yourself: Pronunciation",
        department: "Georgia Institude of Technology",
        count: 1
    },
    {
        img: "",
        offeredByImg: "",
        name: "Lesson | Express Yourself: Pronunciation",
        department: "Georgia Institude of Technology",
        count: 1
    },
    {
        img: "",
        offeredByImg: "",
        name: "Lesson | Express Yourself: Pronunciation",
        department: "Georgia Institude of Technology",
        count: 1
    }
] as RelatedCourse[]

interface Certificate {
    img: string,
    name: string,
    from: string,
    tipe: string,
    img2: string
}

const certificateData = {
    img: "",
    name: "English Proficiency for Graduate Studies Certificate",
    from: "from Arizona State University",
    tipe: "100% online",
    img2: ""
} as Certificate

function Instructor(props: any) {
    const onChange = (key: string) => {
        console.log(key);
      };
      
      const items: TabsProps['items'] = [
        {
          key: '1',
          label: `Recommended`,
          children: <>
                <div className="tab-content">
                    <h1 className="tab-title">People interested in this course also viewed</h1>
                    <div id="tab-slide">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={3}
                            pagination={{
                            clickable: true,
                            }}
                            // modules={[Pagination]}
                            className="ts-swiper"
                            breakpoints={{
                                1040: {
                                    slidesPerView: 4
                                },
                                824: {
                                    slidesPerView: 3
                                },
                                608: {
                                    slidesPerView: 2
                                },
                                400: {
                                    slidesPerView: 1
                                }
                            }}
                        >
                            {
                                relatedCourseData.map((r: any) => {
                                    return <SwiperSlide>
                                            <TabSlideItem data={r} />
                                        </SwiperSlide>
                                })
                            }
                            
                        </Swiper>
                    </div>
                </div>
            </>,
        },
        {
          key: '2',
          label: `University Certificates`,
          children: <>
            <div className="tab-content">
                <h1 className="tab-title">
                Earn an affordable, university-issued credential from top schools
                </h1>
                <div className="cert-wrapper">
                    <div className="cert-box">
                        <div className="cert-box-b">
                            <a href="#">
                                <div className="cb-content">
                                    <div className="cbc-img">
                                        <CertImg />
                                    </div>

                                    <div className="cbc-info">
                                        <p className="cbci-text">
                                            <a href="#">
                                                {certificateData.name}

                                            </a>
                                        </p>
                                        <span className="cbci-sub-text gray-font">
                                            {certificateData.from}
                                        </span>
                                    </div>

                                    <div className="cbc-foot">
                                        <div className="hl-1">

                                        </div>
                                        <div className="hl-2">

                                        </div>
                                        <span className="cbcf-text">
                                            {certificateData.tipe}
                                        </span>
                                        <div className="cbcf-img">
                                            <CertSmallImg />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </>,
        }
      ];

    return (
        <>
            <div className="about-bg">
                <div className="cin-content">
                    <div className="ins-content">
                        <div className="insc-title">
                            <h2 className="insc-title-b">
                                Instructor
                            </h2>
                        </div>

                        <div className="insc-body">
                            <div className="inscb-row">
                                <span className="ins-rating-text">Instructor rating</span>
                                <span className="mr-4px">
                                    <InsRatingIcon />
                                </span>
                                <span className="ins-rating-text">
                                    {instructorData.average}/5 ({instructorData.totalRating} Ratings)
                                </span>
                                <span>
                                    <InfoIcon />
                                </span>
                            </div>

                            <div className="inscb-row">
                                <div className="ins-wrapper">
                                    <a href="#" className="ins-link">
                                        <div className="ins-link-b">
                                            <div className="ins-img-box">
                                                <AmaliaImg />
                                            </div>
                                            <div className="ins-info-box">
                                                <h3 className="ins-name">
                                                    {instructorData.name}
                                                </h3>
                                                <span className="ins-title">
                                                    {instructorData.tipe}
                                                </span>
                                                <div className="ins-dep">
                                                    {instructorData.department}
                                                </div>
                                                <div className="ins-exper">
                                                    <div className="ins-exper-row">
                                                        <span className="mr-8px">
                                                            <MembersIcon />
                                                        </span>
                                                        <span>
                                                            <strong>{instructorData.learners}</strong>
                                                            &nbsp;
                                                            Learners
                                                        </span>
                                                    </div>

                                                    <div className="ins-exper-row">
                                                        <span className="mr-8px">
                                                            <BookIcon />
                                                        </span>
                                                        <span>
                                                            <strong>{instructorData.courses}</strong>
                                                            &nbsp;
                                                            Courses
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ins-content pt-0">
                        <div className="insc-title">
                            <h2 className="insc-title-b">
                                Offered by
                            </h2>
                        </div>

                        <div className="insc-body">
                            <div className="inscb-row">
                                <div className="ins-wrapper">
                                    {/* <a href="#" className="ins-link"> */}
                                    <div className="ins-link-b">
                                        <a href="#">
                                            <div className="ins-img-box border-radius-0">
                                                <OfferdByImg />
                                            </div>
                                        </a>
                                        <div className="ins-info-box">
                                            <a href="#">
                                                <h3 className="ins-name offered-by-title">
                                                    {offeredByData.name}
                                                </h3>
                                            </a>
                                            {
                                                offeredByData.description.map((d: any) => {
                                                    return <p className="offered-by-des">
                                                        {d}
                                                    </p>
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="slider-bg">
                <div className="cin-content">
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={60}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >   
                    {
                        topReviewData.map((t: any) => {
                            return <SwiperSlide>
                                    <InstructorSlideItem data={t} />
                                </SwiperSlide>
                        })
                    }
                </Swiper>
                </div>
            </div>

            <div className="about-bg">
                <div className="cin-content p-y-24px">
                    <div className="adv-content">
                            <a href="#" className="adv-border">
                                <div className="adv-left">
                                    <p className="advl-title">
                                    See how employees at top companies are mastering in-demand skills
                                    </p>
                                    <a href="#" className="advl-link">
                                    Learn more about Coursera for Business
                                    &nbsp;
                                    <ArrowRightLinkIcon />
                                    </a>
                                </div>
                                <div className="adv-right">
                                    <AdvertiseImg />
                                </div>
                            </a>
                    </div>
                </div>
            </div>

            <div className="about-bg tab-slide-wrapper">
                <div className="cin-content">
                    <div className="tab-content">
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instructor;
