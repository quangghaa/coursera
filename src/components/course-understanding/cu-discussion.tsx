import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

interface Props {
    values: unknown
}

interface IDiscussion {
    title: string;
    icon: string;
    description: string;
    hint: string[];
    guide: string;
}

const data = {
    title: "Meet Your Classmates",
    icon: "",
    description: "Write a short paragraph about yourself. You can answer some or all of the following questions and/or include other interesting information about yourself. ",
    hint: [
        "Where are you from and what's your hometown like?",
        "What do you like to do in your free time?",
        "What are some of your future academic or work goals?",
    ],
    guide: "After you write about yourself, read your classmates' paragraphs and make a comment about something that you think is interesting or ask them a question to get more information. Respond to at least 3 of your classmates' paragraphs. "
} as IDiscussion

const CUDiscussion: React.FC<Props> = ({values}) => {
    return (
        <div className="discussion-sec">
            <div className="ds-head">
                <h1>Meet Your Classmates</h1>
            </div>
            <div className="ds-body">
                <div className="ds-content">
                    <p className="dsc-des">{data.description}</p>
                    <ul className="dsc-hint">
                        {data.hint.map((h: string) => {
                            return (
                                <li>
                                    {h}
                                </li>
                            )
                        })}
                    </ul>
                    <p>{data.guide}</p>
                    
                </div>

                <div className="ds-reply">
                    <p className="ds-p1">Participation is optional</p>
                    
                    <div className="reply-form-wrapper">
                        <p className="mb-6px"><strong>Your Reply</strong></p>
                        <TextArea className="mb-6px" rows={4} placeholder="Type your response here..." />
                        <div className="btn-row">
                            <Button>Reply</Button>
                        </div>
                    </div>

                    <ul className="dsr-foot">
                        <li>
                            AZ
                        </li>
                        <li>
                            SJ
                        </li>
                        <li>
                            DB
                        </li>
                        <li>
                            MA
                        </li>
                        <li>
                            +2k
                        </li>
                    </ul>
                    <p className="total-response">
                    1,879 learners have submitted a response.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CUDiscussion;