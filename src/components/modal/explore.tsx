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
                    content: "Bussiness",
                    isParent: true
                 }
            ] as ExploreModalContentType[],
        },
    ] as ExploreModalDataType[]

    // 0-when select a degree, 1-when select a certificate
    const [selectedType, setSelectedType] = useState(0)

    return (
        <div id="ex-modal-id" style={{display: "block"}} className="ex-modal" onMouseLeave={props.close}>
            <div className="ex-modal-b" style={{display: "block"}}>
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
                                                {/* <li className="emc-content-item">
                                                    {c.content}
                                                    {
                                                        c.isParent ? <div className="emc-child">
                                                        <BigDropdownIcon />
                                                        </div> : <></>
                                                    }
                                                </li> */}
                                                {
                                                    c.isParent ? <li className="emc-content-item" onMouseOver={(e:any) => props.showChildModal(e, c.flag)}
                                                        onMouseLeave={(e:any) => props.closeChildModal(e)}>
                                                        {c.content}
                                                         <div className="emc-child">
                                                            <BigDropdownIcon />
                                                            </div>
                                                    </li> : 
                                                    <li className="emc-content-item">
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
                    </div>: <></>
                }
            </div>

            <div id="ex-modal-child-id" className="ex-modal-c" style={{display: "block"}} onMouseOver={(e:any) => props.holdChildModal(e)}
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
                    </>
                }

                
                
                {/* {
                    selectedType == 0 ? 
                    <>
                        <div className="nil-head">
                                    Earn credit toward a master's
                                </div>
                                    <Row gutter={[16, 16]}>
                                        <Col span={12}> 
                                            <div className="nil-item">
                                                <div className="nili-icon">I</div>
                                                    <div className="nili-info">
                                                    <div className="nili-name">
                                                        Master of Applied Data Science
                                                    </div>
                                                    <div className="nili-des mt-5px">
                                                        University of Michigan
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={12}> 
                                            <div className="nil-item">
                                                <div className="nili-icon">I</div>
                                                    <div className="nili-info">
                                                    <div className="nili-name">
                                                        Master of Applied Data Science
                                                    </div>
                                                    <div className="nili-des mt-5px">
                                                        University of Michigan
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                    </Row>

                        <div className="mt-2rem">
                            <a href="#" className="view-all-link">View all MasterTrack certificates</a>
                        </div>
                    </> :
                    <></>
                } */}
            </div>
        </div>
    )
}

export default ModalExplore;