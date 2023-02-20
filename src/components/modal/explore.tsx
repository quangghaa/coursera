import React, { useState } from "react";
import { BigDropdownIcon } from "../../utils/header-svg";
import "./style.css";

interface ExploreModalContentType {
    content: string,
    isParent: boolean
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
                    isParent: true
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
                                                <li className="emc-content-item">
                                                    {c.content}
                                                    {
                                                        c.isParent ? <div className="emc-child">
                                                        <BigDropdownIcon />
                                                        </div> : <></>
                                                    }
                                                </li>
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
        </div>
    )
}

export default ModalExplore;