import { Button } from "antd";
import { write } from "fs";
import React from "react";
import { BeforeLecture, ConnectingIdeas, Keyword, LearnMore, PageObject, SuggestedListening, Word } from "../../type/types";
import { LikeIcon } from "../../utils/course-enroll";
import { BeforeLectureImg, DisLikeIcon, KeyPointsImg, KeyWordImg, LearnMoreImg, MarkCompleteIcon, PdfIcon, ReportIcon } from "../../utils/course-understanding";

interface Props {
    values: unknown
}

const pdf = {
    icon: "",
    title: "Listening Practice #1 Handout - Negative Effects of Video Games.pdf",
    tipe: "PDF File",
    url: "https://d3c33hcgiwev3.cloudfront.net/pxa9-bRhSjuWvfm0YWo78w_09197be8531c4318899ece4640fb0365_Listening-Practice-1-Handout---Negative-Effects-of-Video-Games.pdf?Expires=1679529600&Signature=ZVBQ13NPxStd4yG3Vd8BFIF4gi-~QoRFLvRZWfWZ6C9zpSyjuX3xFbPitNwNsZ5pvn3GtLoT20jGsirlQQ2UUYimH9cyUt78lmX~9MNi79shGioRQrwF1eQ74~g9DXhe~J9~tg3ixIKAKCOTgExDl7aFUJ4Cl2YPWl7OHiDfOYo_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",
}

const beforeData = {
    description: "Read the professor's bio below.  This information might give you an insight into her areas of expertise. In addition, download the slides that accompany Professor Sales's lecture. Preview the information to have a general understanding of the topic before you listen to the lecture. ",
    bio: "Psychology professor Sales has spent many years studying the effects that video games, especially violent ones, have on their players. Her research has specifically dealt with the harmful effects of video games on adolescents.",
    pdf: pdf,

} as BeforeLecture

const keypointsData = {
    row: [
        "Check the course syllabus and do the assigned reading before listening to the lecture.",
        "Consider the speaker's area of expertise to better understand his/her point of view.",
        "Preview any provided slides, notes, or lecture materials.",
    ]
}

const learnMore = {
    description: [
        "Note taking is a very important skill for university life. In most universities in the United States, you will be expected to attend lectures, take notes and use your notes to study for exams or to prepare for a presentation or writing assignment. Since note taking is a skill, you can get better with practice.",
        "It can be helpful to use abbreviations in your notes in order to save time. Here is a list of some commonly used abbreviations. Download the list and use it when taking notes about the lectures this week.",
    ] as string[],
    pdf: pdf,
} as LearnMore

const words = [
    {
        write: "adolescent",
        meaning: "(noun) a young person who is developing into an adult",
        pre: "Although people of all ages play video games,",
        inUse: "adolescents",
        pos: "make up the largest group of players",
    }, 
    {
        write: "aggression",
        meaning: "(noun) angry or violent behavior or feelings",
        pre: "After watching the violent movie, the children had feelings of",
        inUse: "aggression",
        pos: "and began to fight with each other.",
    },
    {
        write:"cognitive",
        meaning: "(adjective) involving conscious mental activities (such as thinking, understanding, learning, and remembering)",
        pre: "My grandmother likes to play cross-word puzzles and other word games to gain the",
        inUse: "cognitive",
        pos: "benefits that come from those activities.",
    }
] as Word[]

const keyword = {
    sampleWord: "Synthesize",
    meaning: "means to look for similarities or differences between two or more sources and then apply that information to a specific task.",
    guide: "In your university classes, you will listen to many different ideas about one particular topic. In order to have a good understanding of that topic, it will be necessary to make connections between the lectures and identify the similarities and differences between them.",
    words: words,
} as Keyword

const suggested = [
    {
        id: "#1",
        description: "The first suggested listening is a TED Talk given in June 2012 by Daphne Bavelier. It is titled Your Brain on Video Games.",
        url: "https://www.ted.com/talks/daphne_bavelier_your_brain_on_video_games?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare",
    },
    {
        id: "#2",
        description: "The second suggested listening is a TED talk given in July 2010 by Tom Chatfield. It is titled 7 Ways Games Reward the Brain.",
        url: "https://www.ted.com/talks/tom_chatfield_7_ways_games_reward_the_brain",
    },
    {
        id: "#3",
        description: "The last suggested listening is a news report from NPR from July 7, 2011. It is titled It's a Duel: How Do Violent Video Games Affect Kids?",
        url: "https://www.npr.org/2011/07/07/137660609/its-a-duel-how-do-violent-video-games-affect-kids",
    },
] as SuggestedListening[]

const connectingIdeas = [
    {
        tipe: 0,
        content: "Connecting words and phrases are often used to combine ideas. There are three types of connectors:",
        bold: false,
    },
    {
        tipe: 2,
        row: [
            "transition words and phrases (also known as introductory words/phrases)",
            "coordinating conjunctions",
            "subordinating conjunctions",
        ]
    },
    {
        tipe: 3,
    },
    {
        tipe: 0,
        content: "Transition Words & Phrases:",
        bold: true
    },
    {
        tipe: 0,
        content: "These appear at the beginning of a sentence. When speaking, give a short pause after the transition. When writing, follow the transition with as comma.",
        bold: false
    }, 
    {
        tipe: 1,
        pre: "For example: Video games are increasing in popularity.",
        inUse: "However,",
        pos: "they can have harmful effects on their adolescent players."
    },
    {
        tipe: 1,
        inUse: "Despite [noun or pronoun],",
        pos: "(Despite their popularity,)"
    },
    {
        tipe: 0,
        content: "In contrast,",
        bold: true
    },
    {
        tipe: 0,
        content: "On the contrary,",
        bold: true
    },
    {
        tipe: 0,
        content: "On the other hand,",
        bold: true
    }
] as ConnectingIdeas[]

const pageData = {
    title: "Prepare for Predicting and Review the Lesson",
    // beforeLecture: beforeData,
    keypoints: keypointsData,
    // learnMore: learnMore,
    suggested: suggested,
    connectingIdeas: connectingIdeas,
    // keyWord: keyword,
} as PageObject

const CUReading: React.FC<Props> = ({values}) => {
    const renderIdeas = (idea: ConnectingIdeas) => {
        switch(idea.tipe) {
            case 0:
                if(idea.bold) return <p className="des-text"><strong>{idea.content}</strong></p>
                else {
                    return <p className="des-text">{idea.content}</p>
                }
            case 1: 
                return <p className="des-text">
                    {idea.pre && <span>{idea.pre}&nbsp;</span>}
                    <strong>{idea.inUse}</strong>&nbsp;
                    {idea.pos && <span>{idea.pos}</span>}
                </p>
            case 2: 
                return <ul className="ideas-list">
                    {idea.row?.map((r: string) => {
                        return (
                            <li>
                                {r}
                            </li>
                        )
                    })}
                </ul>
            default: 
                return <p className="des-text"></p>
        }
    }

    return (
        <div className="reading-sec">
            <h1>{pageData.title}</h1>
            {pageData.beforeLecture && 
            <div id="before-lecture" className="before-lecture mt-3rem">
                <div className="img-wrapper">
                    <BeforeLectureImg />
                </div>
                <p className="des-text">{pageData.beforeLecture.description}</p>
                <div className="bio">
                    <div className="bio-head">
                        <strong>Professor Bio:</strong>
                    </div>
                    <div className="bio-body">
                        {pageData.beforeLecture.bio}
                    </div>
                </div>

                <a href={pageData.beforeLecture.pdf.url} className="pdf">
                    <div className="pdf-icon">
                        <PdfIcon />
                    </div>
                    <div className="pdf-title">
                        <div className="pdf-head">
                            {pageData.beforeLecture.pdf.title}
                        </div>

                        <div className="pdf-tipe">
                            {pageData.beforeLecture.pdf.tipe}
                        </div>
                    </div>
                </a>
            </div>}

            {pageData.learnMore && 
            <div id="learn-more" className="learn-more mt-3rem">
                <div className="img-wrapper">
                    <LearnMoreImg />
                </div>
                <div className="learn-more-content">
                    {pageData.learnMore?.description.map((d: string, index: number) => {
                        return (
                            <div>
                                <p>
                                    {d}
                                </p>
                                {pageData.learnMore?.description.length !== index + 1 ? <p></p> : <></>}
                            </div>
                        )
                    })}
                </div>

                <a href={pageData.learnMore?.pdf?.url} className="pdf">
                    <div className="pdf-icon">
                        <PdfIcon />
                    </div>
                    <div className="pdf-title">
                        <div className="pdf-head">
                            {pageData.learnMore?.pdf?.title}
                        </div>

                        <div className="pdf-tipe">
                            {pageData.learnMore?.pdf?.tipe}
                        </div>
                    </div>
                </a>
            </div>}

            {pageData.keyWord && 
            <div id="keyword" className="keyword">
                <div className="img-wrapper">
                    <KeyWordImg />
                </div>
                
                {pageData.keyWord.sampleWord && 
                <div className="des-text">
                    <p className="mb-16px">
                        <strong>{pageData.keyWord.sampleWord}</strong>
                        &nbsp;
                        {pageData.keyWord.meaning}
                    </p>

                    <p>
                        {pageData.keyWord.guide}
                    </p>
                </div>}

                <ul className="list-word">
                    {pageData.keyWord.words.map((w: Word) => {
                        return (
                            <li>
                                <p className="des-text">
                                    {w.pre}
                                    &nbsp;
                                    <strong>{w.inUse}</strong>
                                    &nbsp;
                                    {w.pos}
                                </p>
                                <ul className="meaning">
                                    <li>
                                        <p>
                                            <strong>{w.write}:</strong>
                                            &nbsp;
                                            {w.meaning}
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>}

            {pageData.suggested &&
            <div id="suggested" className="suggested mt-3rem">
                <ul>
                    {pageData.suggested?.map((s: SuggestedListening) => {
                        return (
                            <li>
                                <p className="des-text"><strong>Suggested Listening {s.id}</strong></p>
                                <p className="des-text">{s.description}</p>
                                <a className="des-text" href={s.url}>Click here to watch the video.</a>
                            </li>
                        )
                    })}
                </ul>
            </div>}

            {pageData.keypoints && 
            <div id="keypoints" className="keypoints mt-3rem">
                <div className="img-wrapper">
                    <KeyPointsImg />
                </div>

                <ul>
                    {pageData.keypoints.row.map((r: string) => {
                        return (
                            <li>
                                {r}
                            </li>
                        )
                    })}
                </ul>
            </div>}

            {pageData.connectingIdeas && 
            <div id="connecting-ideas" className="connecting-ideas mt-3rem">
                {pageData.connectingIdeas?.map((c: ConnectingIdeas) => {
                    switch(c.tipe) {
                        case 0:
                            if(c.bold) return <p className="des-text"><strong>{c.content}</strong></p>
                            else {
                                return <p className="des-text">{c.content}</p>
                            }
                        case 1: 
                            return <p className="des-text">
                                {c.pre && <span>{c.pre}&nbsp;</span>}
                                <strong>{c.inUse}</strong>&nbsp;
                                {c.pos && <span>{c.pos}</span>}
                            </p>
                        case 2: 
                            return <ul className="ideas-list">
                                {c.row?.map((r: string) => {
                                    return (
                                        <li>
                                            {r}
                                        </li>
                                    )
                                })}
                            </ul>
                        default: 
                            return <p className="des-text"></p>
                    }
                })}
            </div>}

            <div className="mark-complete">
                <div className="done-state">
                    <span className="ds-icon"><MarkCompleteIcon /></span>
                    <span className="ds-text">Completed</span>
                </div>
                <button className="complete-btn">Go to next item</button>
            </div>

            <div className="react-row mt-2rem">
                <button>
                    <span className="react-icon">
                        <LikeIcon />
                    </span>
                    <span>Like</span>
                </button>
                <button>
                    <span className="react-icon">
                        <DisLikeIcon />
                    </span>
                    <span>Dislike</span>
                </button>
                <button>
                    <span className="react-icon">
                        <ReportIcon />
                    </span>
                    <span>Report an issue</span>
                </button>
            </div>
        </div>
    )
}

export default CUReading;