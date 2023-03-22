import React, { ReactNode, useEffect, useState } from "react";
import { NavIndex } from "../../pages/course-understanding/course-understanding";
import { LessonDetail, SubLesson } from "../../type/types";
import { BigReadingIcon, BigVideoIcon, CalculatorIcon, MessageIcon, ReadingIcon, VideoIcon } from "../../utils/course-enroll";


interface Props {
    values: unknown
    navData: SubLesson[]
    selectItem: (pInd: number, cInd: number, item: LessonDetail) => void
    navIndex: NavIndex
}

const CUNavigation: React.FC<Props> = ({ values, navData, selectItem, navIndex }) => {
    const tipeMap = new Map<number, ReactNode>()
    tipeMap.set(0, <BigReadingIcon />)
    tipeMap.set(1, <BigVideoIcon />)
    tipeMap.set(2, <CalculatorIcon />)
    tipeMap.set(3, <MessageIcon />)

    const toggleItem = (index: number) => {
        let el = (document.getElementById('child-'+index)) as HTMLElement
        if(!el.classList.contains('show')) {
            el.classList.add("show")
        } else {
            el.classList.remove("show")
        }
    }

    const funcName = (index: number) => {
        let el = (document.getElementById('child-'+ index)) as HTMLElement
        if(!el.classList.contains('show')) {
            el.classList.add("show")
        }
    }

    const highlightSelectedItem = (navIndex: NavIndex) => {
        let preEl = (document.getElementById('item-'+ navIndex.previous?.parentIndex + "-" + navIndex.previous?.childIndex)) as HTMLElement
        if(preEl?.classList.contains("highlight-nav-item")) {
            preEl.classList.remove("highlight-nav-item")
        }

        let el = (document.getElementById('item-'+ navIndex.parentIndex + "-" + navIndex.childIndex)) as HTMLElement
        if(!el.classList.contains("highlight-nav-item")) {
            el.classList.add("highlight-nav-item")
        }

    }

    useEffect(() => {
        funcName(navIndex.parentIndex)
    }, [navIndex.parentIndex])

    useEffect(() => {
        highlightSelectedItem(navIndex)
    }, [navIndex])

    return (
        <ul className="cu-nav">
            {navData.map((s: SubLesson, index: number) => {
                return (
                    <li>
                        <h2 onClick={() => {toggleItem(index)}}>{s.title}</h2>
                        <ul id={"child-"+index} className="cu-nav-child">
                            {s.details.map((d: LessonDetail, cInd: number) => {
                                return (
                                    <li id={"item-"+index+"-"+cInd} onClick={() => selectItem(index, cInd, d)}>
                                        <a href="#">
                                            <div className="cu-nav-icon-box">
                                                {tipeMap.get(d.tipe)}
                                            </div>
                                            <div>
                                                <p>{d.name}</p>
                                                <p>{d.effort}&nbsp;{d.unit}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

export default CUNavigation;