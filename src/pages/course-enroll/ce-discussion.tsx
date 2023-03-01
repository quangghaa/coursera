import { Input, Modal, Select, Tabs, TabsProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon, LikeIcon, LinkIcon, ReplyIcon } from "../../utils/course-enroll";
import Navigation from "./navigation";
import "./style.css"

function CEDiscussion(props: any) {
    useEffect(() => {
        props.setPage(2)
    }, [])

    const list = [1, 2, 3, 4, 5]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (key: string) => {
        console.log(key);
    };

    function handleChange(value: any) {
        console.log(value)
    }

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `All forums`,
            children: <div className="all-forum-box">
                <ul className="all-forum">
                    <li className="af-item">
                        <a href="#">
                            <div className="af-item-content">
                                <div className="af-item-a">
                                    <p>Module 1</p>
                                    <div className="af-item-text">
                                        Discuss this week's modules here.
                                    </div>
                                    <span>
                                        Last post an hour ago
                                    </span>
                                </div>

                                <div className="af-item-b">
                                    <div className="item-b-1">
                                        <p>
                                            2687 threads
                                        </p>
                                    </div>

                                    <div className="item-b-2">
                                        <ArrowRightIcon />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>,
        },
        {
            key: '2',
            label: `Posts for you`,
            children: <div className="post-item-wrapper">
                <ul className="post-item">
                    {
                        list.map((l: any) => {
                            return <li className="pi-item">
                                <div className="pi-item-content">
                                    <div className="pii-row-1">
                                        <p>
                                            Module 1
                                        </p>
                                    </div>

                                    <div className="pii-row-2">
                                        <h2>
                                            <a href="#">
                                                Hi! I finished a Week number 1. What should I do next? Thank you.
                                            </a>
                                        </h2>
                                    </div>

                                    <div className="pii-row-3">
                                        <div>

                                        </div>
                                    </div>

                                    <div className="pii-row-4">
                                        <div className="r4-a">
                                            <span>
                                                <button>
                                                    <span >
                                                        <span className="r4-icon">
                                                            <LikeIcon />
                                                        </span>
                                                        <span>Like 41</span>
                                                    </span>
                                                </button>
                                            </span>
                                            <span>
                                                <button>
                                                    <span >
                                                        <span className="r4-icon">
                                                            <ReplyIcon />
                                                        </span>
                                                        <span>Reply 41</span>
                                                    </span>
                                                </button>
                                            </span>
                                        </div>
                                        <div className="r4-a">
                                            <div className="r4-a-1">
                                                <span className="r4-round">
                                                    lp
                                                </span>

                                                <span className="r4-a-1-text">
                                                    liliana margaret santos puerta
                                                </span>
                                            </div>

                                            <span className="r4-a-2">
                                                ·
                                            </span>

                                            <span className="r4-a-3">
                                                replied 2 days ago
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>,
        },
        {
            key: '3',
            label: `Your activity`,
            children: <h2 className="no-activity">
                No posts yet
            </h2>,
        },
    ];

    return (
        <div className="course-enroll">
            <Navigation />
            <div className="discussion-wrapper">
                <div className="discussion">
                    <div className="dis-content">
                        <div className="dc-main">
                            <div className="dcm-title-box">
                                <div className="title-box-pd">
                                    <h1 className="title-box-text">
                                        Forums
                                    </h1>
                                </div>
                            </div>

                            <div className="dcm-content">
                                <div className="dcmc-left">
                                    <div className="search-row">
                                        <div className="search-row-a">
                                            <div className="sr-input-box">
                                                <Input placeholder="Search forum" size="large" />

                                            </div>
                                            <button className="sr-search-btn">
                                                Search
                                            </button>
                                        </div>

                                        <div className="search-row-btn">
                                            <button className="create-post-btn" onClick={showModal}>
                                                Create post
                                            </button>
                                        </div>
                                    </div>

                                    <div className="tag-section">
                                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                                    </div>
                                </div>

                                <div className="dcmc-right">
                                    <div className="mc-right-box">
                                        <div className="rb-module">
                                            <div className="rbm-1">
                                                <h2>
                                                    Module 1
                                                </h2>
                                                <div className="rbm-1-a">
                                                    Discuss this week's modules here.
                                                </div>
                                                <div className="rbm-1-b">
                                                    <span>
                                                        2688 threads
                                                    </span>
                                                    <span className="m-4px">
                                                        ·
                                                    </span>
                                                    <span>
                                                        Last post 2 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rbm-2">
                                                <a href="#" className="rbm-2-a">
                                                    Go to discussion
                                                    <div className="rbm-2-icon">
                                                        <ArrowRightIcon />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mc-right-box">
                                        <h2 className="rbd-head">
                                            Description
                                        </h2>
                                        <div className="rbd-content">
                                            <p>
                                                Welcome to the course discussion forums! Ask questions, debate ideas, and find classmates who share your goals. Browse popular threads below or other forums in the sidebar.
                                            </p>
                                        </div>

                                        <div className="guide-line">
                                            <a href="#">
                                                Forum guidelines
                                                <div className="guideline-icon">
                                                    <LinkIcon />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mc-right-box">
                                        <h2 className="rbd-head">
                                            Moderators
                                        </h2>
                                        <ul className="moder-list">
                                            <li className="moder-item">
                                                <a href="#" className="moder-item-a">
                                                    <span className="mia-box">
                                                        <div className="mia-round">
                                                            AS
                                                        </div>
                                                        <span className="mia-info">
                                                            I
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="moder-item">
                                                <a href="#" className="moder-item-a">
                                                    <span className="mia-box">
                                                        <div className="mia-round">
                                                            SL
                                                        </div>
                                                        {/* <span className="mia-info">
                                                            I
                                                        </span> */}
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Create a new post" okText={"Post"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="title-input">
                    <span className="ti-label">
                        Title
                        &nbsp;
                        <span style={{ color: "red" }}>*</span>
                    </span>
                    <span className="ti-input">
                        <Input placeholder="Write a discriptive title" />

                    </span>
                </div>

                <div className="body-input">
                    <span className="ti-label">
                        Body
                        &nbsp;
                        <span style={{ color: "red" }}>*</span>
                    </span>
                    <span className="ti-input">
                        <TextArea rows={4} placeholder="Provide supporting detail or context" maxLength={6} />

                    </span>
                </div>

                <div className="title-input">
                    <span className="ti-label">
                        Title
                        &nbsp;
                        <span style={{ color: "red" }}>*</span>
                    </span>
                    <span className="ti-input">
                        <Select
                            defaultValue="module 1"
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            options={[
                                { value: 'module 1', label: 'module 1' },
                                { value: 'module 2', label: 'module 2' },
                            ]}
                        />
                    </span>
                </div>
            </Modal>
        </div>
    )
}

export default CEDiscussion;