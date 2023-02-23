import React from "react";
import { AmaliaImg, BookIcon, InfoIcon, InsRatingIcon, MembersIcon, OfferdByImg } from "../../utils/course-info";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function Instructor(props: any) {
    return (
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

            <div className="slider-bg">
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Instructor;
