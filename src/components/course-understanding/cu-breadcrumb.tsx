import React from "react";
import { BreadcrumbArrow, BreadcrumbArrowLeft } from "../../utils/course-understanding";

interface Props {
    values: unknown
    moveItem: (tipe: 'next' | 'previous') => void
}

const CUBreadcrumb: React.FC<Props> = ({ values, moveItem }) => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb-left">
                <ul>
                    <li>
                        <a href="#">
                            English and Academic Preparation - Pre-Collegiate
                        </a>
                        <span className="bc-arrow">
                            <BreadcrumbArrow />
                        </span>
                    </li>
                    <li>
                        <a href="#">
                            Module 1
                        </a>
                        <span className="bc-arrow">
                            <BreadcrumbArrow />
                        </span>
                    </li>
                    <li>
                        <p>
                        Meet Your Classmates
                        </p>
                    </li>
                </ul>
            </div>

            <div className="breadcrumb-right">
                <a href="#" onClick={() => moveItem('previous')}>
                    <div>
                        <span className="bcr-arrow">
                            <BreadcrumbArrowLeft />
                        </span>
                        <span>
                            Previous
                        </span>
                    </div>
                </a>

                <a href="#" onClick={() => moveItem('next')}>
                    <div>
                        <span>
                            Next
                        </span>
                        <span className="bcr-arrow">
                            <BreadcrumbArrow />
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CUBreadcrumb;