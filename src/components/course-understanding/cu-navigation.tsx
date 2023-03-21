import React, { ReactNode, useState } from "react";
import { LessonDetail, SubLesson } from "../../type/types";
import { BigReadingIcon, BigVideoIcon, CalculatorIcon, MessageIcon, ReadingIcon, VideoIcon } from "../../utils/course-enroll";


interface Props {
    values: unknown
    navData: SubLesson[]
    func: (item: LessonDetail) => void
}

const CUNavigation: React.FC<Props> = ({ values, navData, func }) => {
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

    return (
        <ul className="cu-nav">
            {navData.map((s: SubLesson, index: number) => {
                return (
                    <li>
                        <h2 onClick={() => {toggleItem(index)}}>{s.title}</h2>
                        <ul id={"child-"+index} className="cu-nav-child">
                            {s.details.map((d: LessonDetail) => {
                                return (
                                    <li onClick={() => func(d)}>
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