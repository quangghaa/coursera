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
                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>

                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TabSlideItem />
                            </SwiperSlide>
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
                                            English Proficiency for Graduate Studies Certificate
                                            </a>
                                        </p>
                                        <span className="cbci-sub-text gray-font">
                                            from Arizona State University
                                        </span>
                                    </div>

                                    <div className="cbc-foot">
                                        <div className="hl-1">

                                        </div>
                                        <div className="hl-2">

                                        </div>
                                        <span className="cbcf-text">
                                            100% ONLINE
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

      const [vqState, setVqState] = useState(0)

      function vqClick() {
        if(vqState == 0) {
            setVqState(1)
        } else {
            setVqState(0)
        }
      }

      const [reviews, setReviews] = useState([1, 2, 3, 4, 5])

      useEffect(() => {
        var id = (document.getElementById("vq-seeall-id")) as HTMLElement

        if(vqState == 0) {
            if(id.classList.contains("vq-show")) {
                id.classList.remove("vq-show")
            }

        } else {
            if(!id.classList.contains("vq-show")) {
                id.classList.add("vq-show")
            }
        }
      },[vqState])

      const [faqExtra, setFaqExtra] = useState(0)

      function faqExtraClick() {
        if(faqExtra == 0) {
            setFaqExtra(1)
        } else {
            setFaqExtra(0)
        }
      }

      useEffect(() => {
        var iconId = (document.getElementById("faq-right-icon-id")) as HTMLElement
        var id = (document.getElementById("faqc-extra-id")) as HTMLElement
        if(faqExtra == 1) {
            if(!id.classList.contains("extra-show")) {
                id.classList.add("extra-show")
            }

            if(!iconId.classList.contains("faq-icon-down")) {
                iconId.classList.add("faq-icon-down")
            }
        } else {
            if(id.classList.contains("extra-show")) {
                id.classList.remove("extra-show")
            }

            if(iconId.classList.contains("faq-icon-down")) {
                iconId.classList.remove("faq-icon-down")
            }
        }


      }, [faqExtra])

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
                                    4.58/5 (171 Ratings)
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
                                                    Amalia B.Stephens
                                                </h3>
                                                <span className="ins-title">
                                                    Lecturer
                                                </span>
                                                <div className="ins-dep">
                                                    Georgia Tech Language Institute
                                                </div>
                                                <div className="ins-exper">
                                                    <div className="ins-exper-row">
                                                        <span className="mr-8px">
                                                            <MembersIcon />
                                                        </span>
                                                        <span>
                                                            <strong>1.206.332</strong>
                                                            &nbsp;
                                                            Learners
                                                        </span>
                                                    </div>

                                                    <div className="ins-exper-row">
                                                        <span className="mr-8px">
                                                            <BookIcon />
                                                        </span>
                                                        <span>
                                                            <strong>10</strong>
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
                                                    Georgia Institude of Technology
                                                </h3>
                                            </a>
                                            <p className="offered-by-des">
                                                The Georgia Institute of Technology is one of the nation's top research universities, distinguished by its commitment to improving the human condition through advanced science and technology.
                                            </p>

                                            <p className="offered-by-des">
                                                Georgia Tech's campus occupies 400 acres in the heart of the city of Atlanta, where more than 20,000 undergraduate and graduate students receive a focused, technologically based education.
                                            </p>
                                        </div>
                                    </div>
                                    {/* </a> */}
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
                    <SwiperSlide>
                        <InstructorSlideItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstructorSlideItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstructorSlideItem />
                    </SwiperSlide>
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

            <div className="about-bg ">
                <div className="cin-content">
                    <div className="syl-wrapper">
                        <div className="syl">
                            <div className="syl-head">
                                <h1 className="syl-head-title">
                                Syllabus - What you will learn from this course
                                </h1>
                                <div className="syl-head-body">
                                        <div className="inscb-row hb-box">
                                            <span className="ins-rating-text black-font">Instructor rating</span>
                                            <span className="mr-4px">
                                                <LikeIcon />
                                            </span>
                                            <span className="ins-rating-text black-font">
                                                97% (171 Ratings)
                                            </span>
                                            <span>
                                                <InfoIcon />
                                            </span>
                                        </div>
                                </div>
                            </div>

                            <div className="syl-body">
                                <div className="syl-left">
                                    <div className="s-left-text-box">
                                        <div className="sltb-week">
                                            week
                                        </div>
                                        <div className="sltb-number">
                                            1
                                        </div>
                                    </div>
                                </div>

                                <div className="syl-right">
                                    <div className="sr-head-wrapper">
                                        <div className="sr-head">
                                            <div className="srh-icon-box">
                                                <div className="srh-icon">
                                                    <div className="srh-icon-2">
                                                        <SylTimeIcon />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="srh-text-box">
                                                1 hour to complete
                                            </div>
                                        </div>

                                        <h3 className="sr-head-2">
                                        Lesson | Small Talk & Conversational Vocabulary
                                        </h3>

                                        <div className="sr-head-des">
                                            <p>
                                            This lesson is part of a full course, Speak English Professionally: In Person, Online & On the Phone. Take this lesson to get a short tutorial on the learning objectives covered. To dive deeper into this topic, take the full course. In this lesson, you will review professional conversational vocabulary.
                                            </p>
                                        </div>

                                        <div className="sr-vq">
                                            <div className="sr-vq-1">
                                                <div className="srh-icon-box">
                                                    <div className="srh-icon book-icon-bg">
                                                        <div className="srh-icon-2">
                                                            <SylBookIcon />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="srh-text-box vq-head-text">
                                                1 video (Total 4 min), 3 readings, 1 quiz
                                                </div>
                                            </div>

                                            <div className="sr-vq-2">
                                                <button className="vq-btn" onClick={vqClick}>
                                                    {vqState == 0 ? "See All" : "See Less"}
                                                </button>
                                            </div>
                                        </div>

                                        <div id="vq-seeall-id" className="vq-seeall">
                                            <div className="seeall-row">
                                                <div className="seeall-row-head">
                                                    <span style={{transform: "translateY(2px)"}}>
                                                        <SylVideoIcon />
                                                    </span>
                                                    <span className="srh-text">
                                                        1 video
                                                    </span>
                                                </div>

                                                <div className="seeall-row-item">
                                                    <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                    </a>
                                                    <span>
                                                        4m
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="seeall-row">
                                                <div className="seeall-row-head">
                                                    <span style={{transform: "translateY(2px)"}}>
                                                        <SylReadingIcon />
                                                    </span>
                                                    <span className="srh-text">
                                                        3 readings
                                                    </span>
                                                </div>

                                                <div className="seeall-row-item">
                                                    <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                    </a>
                                                    <span>
                                                        4m
                                                    </span>
                                                </div>

                                                <div className="seeall-row-item">
                                                    <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                    </a>
                                                    <span>
                                                        4m
                                                    </span>
                                                </div>

                                                <div className="seeall-row-item">
                                                    <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                    </a>
                                                    <span>
                                                        4m
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="seeall-row">
                                                <div className="seeall-row-head">
                                                    <span style={{transform: "translateY(2px)"}}>
                                                        <SylPraticeIcon />
                                                    </span>
                                                    <span className="srh-text">
                                                        4 pratice exercises
                                                    </span>
                                                </div>

                                                <div className="seeall-row-item">
                                                    <a href="#">
                                                    Small Talk & Conversational Vocabulary
                                                    </a>
                                                    <span>
                                                        4m
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-bg bg-gray">
                <div className="cin-content">
                    <div className="review-wrapper">
                        <div className="review">
                             <h2 className="review-head">
                                Reivews
                             </h2>

                             <div className="review-body">
                                <div className="rb-left">
                                    <div className="rbl-box">
                                        <div className="rbl-head">
                                            <div className="rblh-number">
                                                4.2
                                            </div>
                                            <div>
                                                <div className="star-row">
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                    <div  className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                    <div className="star-icon">
                                                        <CourseInfoStarIcon />
                                                    </div>
                                                </div>
                                                <a href="#" className="custom-a">
                                                    146 reviews
                                                </a>
                                            </div>
                                        </div>

                                        <div className="rbl-body">
                                            <div className="rblb-list">
                                                <div className="rblb-item">
                                                    <div className="ri-label">
                                                        5 stars
                                                    </div>
                                                    <div className="ri-progress">
                                                        <Progress percent={50} size="small" status="active" />
                                                    </div>
                                                </div>
                                                <div className="rblb-item">
                                                    <div className="ri-label">
                                                        4 stars
                                                    </div>
                                                    <div className="ri-progress">
                                                        <Progress percent={40} size="small" status="active" />
                                                    </div>
                                                </div>
                                                <div className="rblb-item">
                                                    <div className="ri-label">
                                                        3 stars
                                                    </div>
                                                    <div className="ri-progress">
                                                        <Progress percent={30} size="small" status="active" />
                                                    </div>
                                                </div>
                                                <div className="rblb-item">
                                                    <div className="ri-label">
                                                        2 stars
                                                    </div>
                                                    <div className="ri-progress">
                                                        <Progress percent={20} size="small" status="active" />
                                                    </div>
                                                </div>
                                                <div className="rblb-item">
                                                    <div className="ri-label">
                                                        1 stars
                                                    </div>
                                                    <div className="ri-progress">
                                                        <Progress percent={50} size="small" status="active" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rb-right">
                                    <div className="rbr-content">
                                        <h3 className="rbrc-head">
                                        TOP REVIEWS FROM LESSON | SMALL TALK & CONVERSATIONAL VOCABULARY
                                        </h3>

                                        {
                                            reviews.map((r: any) => {
                                                return <div className="top-review">
                                                <div className="tr-star-row-box">
                                                    <div className="star-row">
                                                        <div className="star-icon">
                                                            <CourseInfoStarIcon />
                                                        </div>
                                                        <div  className="star-icon">
                                                            <CourseInfoStarIcon />
                                                        </div>
                                                        <div className="star-icon">
                                                            <CourseInfoStarIcon />
                                                        </div>
                                                        <div className="star-icon">
                                                            <CourseInfoStarIcon />
                                                        </div>
                                                        <div className="star-icon">
                                                            <CourseInfoStarIcon />
                                                        </div>
                                                    </div>
    
                                                </div>
    
                                                <div className="tr-author">
                                                    by PCSep 14, 2021
                                                </div>
    
                                                <p className="tr-text">
                                                hi! I did everything, is that all? how can i be completed?
                                                </p>
                                            </div>
                                            })
                                        }

                                        <div className="mt-35px">
                                            <a href="#" className="tr-a-btn">
                                                View all reviews
                                            </a>
                                        </div>

                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-bg enroll-pd">
                <div className="cin-content">
                    <div className="enroll-wrapper">
                        <div className="enroll">
                            <div className="enroll-item">
                                <h2 className="ei-head">
                                    Start Learning Today
                                </h2>
                                <div className="ei-body">
                                    <div>
                                        <button className="tsem-btn enr-btn-bg">
                                            Go To Course
                                        </button>
                                    </div>
                                    <div className="eib-info">
                                        <span>
                                            <strong>222,740</strong>
                                            &nbsp;
                                            already enrolled
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-bg bg-gray enroll-pd">
                <div className="cin-content">
                    <div className="faq-wrapper">
                        <div className="faq">
                            <h2 className="faq-head">
                            Frequently Asked Questions
                            </h2>
                            <div className="faq-content">
                                <div className="faq-content-b">
                                    <ul>
                                        <li onClick={faqExtraClick}>
                                            <div className="faqc-item">
                                                <span className="faqc-item-icon">
                                                <FaqRightIcon />
                                                </span>

                                                <div className="faqc-item-textbox">
                                                    <p className="faqc-item-text">
                                                    When will I have access to the lectures and assignments?
                                                    </p>
                                                </div>
                                            </div>

                                            <div id="faqc-extra-id" className="faqc-extra">
                                                <div className="faqc-extra-b">
                                                    <div className="extra-box">
                                                        <p>
                                                        Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit. If you don't see the audit option: 
                                                        </p>

                                                        <ul>
                                                            <li>
                                                            The course may not offer an audit option. You can try a Free Trial instead, or apply for Financial Aid.
                                                            </li>

                                                            <li>
                                                            The course may offer 'Full Course, No Certificate' instead. This option lets you see all course materials, submit required assessments, and get a final grade. This also means that you will not be able to purchase a Certificate experience.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <p className="faq-more">
                                        <span>
                                            More questions? Visit the 
                                            &nbsp;
                                            <a href="#" className="custom-a blue-font">
                                            Learner Help Center
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instructor;
