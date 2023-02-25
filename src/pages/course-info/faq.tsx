import React, { useEffect, useState } from "react";
import { FaqRightIcon } from "../../utils/course-info";


interface Answer {
    content: string,
    tab: string[]
}

interface Faq {
    question: string,
    answer: Answer[],
}

const faqData = [
    {
        question: "When will I have access to the lectures and assignments?",
        answer: [
            {
                content: "Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit. If you don't see the audit option:",
                tab: [
                    "The course may not offer an audit option. You can try a Free Trial instead, or apply for Financial Aid.",
                    "The course may offer 'Full Course, No Certificate' instead. This option lets you see all course materials, submit required assessments, and get a final grade. This also means that you will not be able to purchase a Certificate experience."
                ]
            }
        ] as Answer[]
    }
] as Faq[]

function Faq(props: any) {
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
                                        {
                                            faqData.map((f: Faq) => {
                                                return <li onClick={faqExtraClick}>
                                                    <div className="faqc-item">
                                                        <span className="faqc-item-icon">
                                                        <FaqRightIcon />
                                                        </span>
        
                                                        <div className="faqc-item-textbox">
                                                            <p className="faqc-item-text">
                                                            {f.question}
                                                            </p>
                                                        </div>
                                                    </div>
        
                                                    <div id="faqc-extra-id" className="faqc-extra">
                                                        <div className="faqc-extra-b">
                                                            <div className="extra-box">
                                                                {
                                                                    f.answer.map((a: Answer) => {
                                                                        return <>
                                                                            <p>
                                                                                {a.content}
                                                                            </p>
                    
                                                                            <ul>
                                                                                {a.tab.map((t: string) => {
                                                                                    return <li>
                                                                                        {t}
                                                                                    </li>
                                                                                })}
                                                                            </ul>
                                                                        </>
                                                                    })
                                                                }

                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
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
    )
}

export default Faq;