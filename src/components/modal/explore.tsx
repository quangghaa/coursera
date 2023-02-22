import { Col, Row } from "antd";
import React, { useState } from "react";
import { BigDropdownIcon } from "../../utils/header-svg";
import NavItemList from "./nav-item-list";
import "./style.css";

interface ExploreModalContentType {
    content: string,
    isParent: boolean,
    flag: number // 0-degree, 1-certificate, 2-advance list
}

interface ExploreModalDataType {
    title: string,
    content: ExploreModalContentType[],
    child: string[]
}

function ModalExplore(props: any) {
    const data = [
        {
            title: "Goals",
            content: [
                {
                    content: "Take a free course",
                    isParent: false
                },
                {
                    content: "Earn a degree",
                    isParent: true,
                    flag: 0
                },
                {
                    content: "Earn a certificate",
                    isParent: true,
                    flag: 1
                },
                {
                    content: "Advance your career",
                    isParent: true,
                    flag: 2
                }
            ] as ExploreModalContentType[],
        },
        {
            title: "Subjects",
            content: [
                {
                    content: "Science",
                    isParent: false
                },
                {
                    content: "Business",
                    isParent: true,
                    flag: 101
                },
                {
                    content: "Language Learning",
                    isParent: true,
                    flag: 102
                },
                {
                    content: "Math And Logic",
                    isParent: true,
                    flag: 103
                }
            ] as ExploreModalContentType[],
        },
    ] as ExploreModalDataType[]

    // 0-when select a degree, 1-when select a certificate
    const [selectedType, setSelectedType] = useState(0)

    return (
        <div id="ex-modal-id" className="ex-modal" onMouseLeave={props.close}>
            <div className="ex-modal-b">
                {
                    data != undefined ?
                        data.map((d: any) => {
                            return <>
                                <div className="em-content">
                                    <div className="emc-title">{d.title}</div>

                                    <ul className="emc-content">
                                        {
                                            d.content != undefined ?
                                                d.content.map((c: any) => {
                                                    return <>
                                                        {
                                                            c.isParent ? <li className="emc-content-item" onMouseOver={(e: any) => props.showChildModal(e, c.flag)}
                                                                onMouseLeave={(e: any) => props.closeChildModal(e)}>
                                                                {c.content}
                                                                <div className="emc-child">
                                                                    <BigDropdownIcon />
                                                                </div>
                                                            </li> :
                                                                <li className="emc-content-item" onMouseOver={props.totallyCloseChildModal}>
                                                                    {c.content}
                                                                </li>
                                                        }
                                                    </>
                                                }) : <>No item</>
                                        }
                                    </ul>
                                </div>
                            </>
                        }) : <>No data</>
                }
                {
                    data != undefined ?
                        <div className="browse-all-btn-a">
                            <button className="browse-all-btn">
                                Browse all subjects
                            </button>
                        </div> : <></>
                }
            </div>

            {/* Child: Goals */}
            {
                props.tipe == 0 &&
                <div id="ex-modal-child-id" className="ex-modal-c" onMouseOver={(e: any) => props.holdChildModal(e)}
                    onMouseLeave={props.totallyCloseChildModal}>

                    <div className="mc-title-section">
                        <div className="mc-title">{props.goalData.title}</div>
                        <div className="mc-subtitle">{props.goalData.subtitle}</div>
                    </div>

                    {
                        props.goalData.tipe == 2 ?
                            <>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.goalData.tipe} sectionTitleId={0} data={props.goalData.dataScience} />
                                    </Col>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.goalData.tipe} sectionTitleId={1} data={props.goalData.business} />
                                    </Col>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.goalData.tipe} sectionTitleId={2} data={props.goalData.computerScience} />
                                    </Col>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.goalData.tipe} sectionTitleId={3} data={props.goalData.arts} />
                                    </Col>
                                </Row>
                            </> :
                            <>
                                <Row gutter={[16, 16]}>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.goalData.tipe} sectionTitleId={0} data={props.goalData.dataScience} />
                                    </Col>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.goalData.tipe} sectionTitleId={1} data={props.goalData.business} />
                                    </Col>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.goalData.tipe} sectionTitleId={2} data={props.goalData.computerScience} />
                                    </Col>
                                    <Col span={12} >
                                        {
                                            props.goalData.tipe == 0 ?
                                                <>
                                                    <div className="nil-head">
                                                        More Degrees
                                                    </div>
                                                    <Row gutter={[16, 16]} className="mt-2rem">
                                                        <Col span={12}>
                                                            <a href="#">
                                                                Public Health
                                                            </a>
                                                        </Col>
                                                        <Col span={12}>
                                                            <a href="#">Bachelor's Degrees</a>
                                                        </Col>

                                                        <Col span={12}>
                                                            <a href="#">
                                                                Engineering
                                                            </a>
                                                        </Col>
                                                        <Col span={12}>
                                                            <a href="#">Master's Degrees</a>
                                                        </Col>

                                                        <Col span={12}>
                                                            <a href="#">
                                                                Social Sciences
                                                            </a>
                                                        </Col>
                                                    </Row>

                                                    <div className="view-all-degree-btn mt-2rem">
                                                        <button className="view-all-degree-btn-b">View all degrees</button>
                                                    </div>

                                                </> :

                                                <>
                                                    <div className="nil-head">
                                                        More Certificate Programs
                                                    </div>
                                                    <Row gutter={[16, 16]} className="mt-2rem">
                                                        <Col span={12}>
                                                            <a href="#">
                                                                Launch your career
                                                            </a>
                                                        </Col>
                                                        <Col span={12}>
                                                            <a href="#">Advance your career</a>
                                                        </Col>

                                                        <Col span={12}>
                                                            <a href="#">
                                                                Prepare for a certification
                                                            </a>
                                                        </Col>
                                                        <Col span={12}>
                                                            <a href="#">Master's Degrees</a>
                                                        </Col>

                                                        <Col span={12}>
                                                            <a href="#">
                                                                Social Sciences
                                                            </a>
                                                        </Col>
                                                    </Row>
                                                </>
                                        }
                                    </Col>
                                </Row>
                                {
                                    props.goalData.earnToward.length != 0 ?
                                        <>
                                            <div className="nil-head">
                                                Earn credit toward a master's
                                            </div>
                                            <Row gutter={[16, 16]}>
                                                {
                                                    props.goalData.earnToward.map((e: any) => {
                                                        return <Col span={12}>
                                                            <div className="nil-item">
                                                                <div className="nili-icon">I</div>
                                                                <div className="nili-info">
                                                                    <div className="nili-name">
                                                                        {e.name}
                                                                    </div>
                                                                    <div className="nili-des mt-5px">
                                                                        {e.description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    })
                                                }

                                            </Row>

                                            <div className="mt-2rem">
                                                <a href="#" className="view-all-link">View all MasterTrack certificates</a>
                                            </div>
                                        </> :
                                        <></>
                                }
                            </>
                    }
                </div>
            }

            {
                props.tipe == 1 &&
                <div id="ex-modal-child-id" className="ex-modal-c" onMouseOver={(e: any) => props.holdChildModal(e)}
                    onMouseLeave={props.totallyCloseChildModal}>

                    <div className="mc-title-section">
                        <div className="mc-title">{props.subjectData.title}</div>
                    </div>

                    {
                        props.subjectData.degrees.length != 0 && props.subjectData.certificates.length != 0 &&
                            <>
                                <Row gutter={[16, 16]}>
                                    <Col span={9} >
                                        <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={101} data={props.subjectData.degrees} />
                                    </Col>
                                    <Col span={9} >
                                        <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={102} data={props.subjectData.certificates} />
                                    </Col>
                                    <Col span={6} >
                                        {
                                            props.subjectData.getStarted.length != 0 &&
                                            <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={103} data={props.subjectData.getStarted} />
                                        }

                                        {
                                            props.subjectData.popularSkills.length != 0 &&
                                            <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={104} data={props.subjectData.popularSkills} />
                                        }
                                    </Col>
                                </Row>
                            </> 
                    }

                    {
                        props.subjectData.degrees.length != 0 && props.subjectData.certificates.length == 0 && 
                        <Row gutter={[16, 16]}>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={101} data={props.subjectData.degrees} />
                                    </Col>
                                    <Col span={12} >
                                        {
                                            props.subjectData.getStarted.length != 0 &&
                                            <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={103} data={props.subjectData.getStarted} />
                                        }

                                        {
                                            props.subjectData.popularSkills.length != 0 &&
                                            <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={104} data={props.subjectData.popularSkills} />
                                        }
                                    </Col>
                        </Row>
                    }

                    {
                        props.subjectData.degrees.length == 0 && props.subjectData.certificates.length != 0 && 
                        <Row gutter={[16, 16]}>
                                    <Col span={12} >
                                        <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={102} data={props.subjectData.certificates} />
                                    </Col>
                                    <Col span={12} >
                                        {
                                            props.subjectData.getStarted.length != 0 &&
                                            <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={103} data={props.subjectData.getStarted} />
                                        }

                                        {
                                            props.subjectData.popularSkills.length != 0 &&
                                            <NavItemList itemTipe={props.subjectData.tipe} sectionTitleId={104} data={props.subjectData.popularSkills} />
                                        }
                                    </Col>
                        </Row>
                    }
                </div>
            }
        </div>
    )
}

export default ModalExplore;