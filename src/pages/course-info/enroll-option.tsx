import React from "react";

function EnrollOption(props: any) {
    return (
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
    )
}

export default EnrollOption;