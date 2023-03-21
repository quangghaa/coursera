export interface ChildItem {
    name: string,
    description: string,
    image: string,
    // tipe: number // 0-degree and 1-certificate
}

export interface GoalObject {
    title: string,
    subtitle: string,
    tipe: number, // 0-degree and 1-certificate and 3-advance career
    dataScience: ChildItem[],
    business: ChildItem[],
    computerScience: ChildItem[],
    arts: ChildItem[],
    earnToward: ChildItem[]
}

export interface SubjectObject {
    title: string,
    tipe: number,
    degrees: ChildItem[],
    subDegreeTitle: string,
    certificates: ChildItem[],
    subCertificateTitle: string,
    getStarted: ChildItem[],
    popularSkills: ChildItem[],
}

export interface WeekGoal {
    totalDays: number,
    from: string,
    to: string,
    goal: number, // how many days per week
    checked: number[], // weekly checkin
}

export interface Schedule {
    startTime: string,
    estimatedTime: string,
    state: number, // 0- no deadline, 1-deadline remind
    weekGoal: WeekGoal[]
}

export interface LessonDetail {
    name: string,
    tipe: number, // 0-Reading, 1-Video, 2-Quiz, 3-Discussion 
    effort: number,
    unit: string,
    state: number, // 0-not do, 1-doing, 2-done
}

export interface SubLesson {
    title: string,
    details: LessonDetail[]
}

export interface Lesson {
    name: string,
    description: string,
    totalVideoTime: number,
    totalVideoTimeLeft: number,
    timeUnit: string,
    totalReadings: number,
    totalReadingsCompleted: number,
    subLessons: SubLesson[],
    schedule: Schedule[]
}

export interface Module {
    name: string,
    lessons: Lesson[]
}

export interface PDF {
    icon: string;
    title: string;
    tipe: string;
    url: string;
}

export interface BeforeLecture {
    img: string;
    description: string;
    bio: string;
    pdf: PDF;
}

export interface KeyPoints {
    img: string;
    row: string[]
}

export interface LearnMore {
    description: string[];
    pdf: PDF;
}

export interface Word {
    write: string;
    meaning: string;
    pre: string;
    inUse: string;
    pos: string;
}

export interface Keyword {
    sampleWord?: string;
    meaning?: string;
    guide?: string;
    words: Word[];
}

export interface SuggestedListening {
    id: string;
    description: string;
    url: string;
}

export interface ConnectingIdeas {
    tipe?: 0 | 1 | 2 | 3; // 0 - row, 1 - mix row, 2 - list, 3 - empty row
    content?: string;
    bold?: boolean;

    row?: string[];

    pre?: string;
    inUse?: string;
    pos?: string; 
}

export interface PageObject {
    title: string;
    beforeLecture?: BeforeLecture;
    keypoints?: KeyPoints;
    learnMore?: LearnMore;
    suggested?: SuggestedListening[];
    connectingIdeas?: ConnectingIdeas[];
    keyWord?: Keyword;
}

export interface PracticeQuiz {
    title: string;
    sub: string;
    timeRequire: number;
    unit: string;
    receiveGrade: string;
    yourGrade?: string;
}