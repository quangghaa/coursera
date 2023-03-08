import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import ModalExplore from './components/modal/explore';
import CECourseInfo from './pages/course-enroll/ce-course-info';
import CEDiscussion from './pages/course-enroll/ce-discussion';
import CEMessage from './pages/course-enroll/ce-message';
import CEModule from './pages/course-enroll/ce-module';
import CENote from './pages/course-enroll/ce-note';
import CourseInfo from './pages/course-info/course-info';
import CourseList from './pages/course-list/course-list';

interface ChildItem {
  name: string,
  description: string,
  image: string,
  // tipe: number // 0-degree and 1-certificate
}

interface GoalObject {
  title: string,
  subtitle: string,
  tipe: number, // 0-degree and 1-certificate and 3-advance career
  dataScience: ChildItem[],
  business: ChildItem[],
  computerScience: ChildItem[],
  arts: ChildItem[],
  earnToward: ChildItem[]
}

interface SubjectObject {
  title: string,
  tipe: number,
  degrees: ChildItem[],
  subDegreeTitle: string,
  certificates: ChildItem[],
  subCertificateTitle: string,
  getStarted: ChildItem[],
  popularSkills: ChildItem[],
}

const fakeDegree = {
  title: "Earn a Degree",
  subtitle: "Breakthrough pricing on 100% online degrees",
  tipe: 0,
  dataScience: [
    {
      name: "Master of Applied Data Science",
      description: "University of Michigan"
    },
    {
      name: "Master of Applied Data Science 2",
      description: "University of Michigan 2"
    },
  ] as ChildItem[],
  business: [
    {
      name: "MBA in Business of Analysis",
      description: "O.P"
    },
    {
      name: "MBA in Business of Analysis 2",
      description: "O.P 2"
    },
  ] as ChildItem[],
  computerScience: [
    {
      name: "Computer Science",
      description: "London"
    },
    {
      name: "Computer Science 2",
      description: "London"
    },
  ] as ChildItem[],
  earnToward: [
    {
      name: "Big data",
      description: "London"
    },
    {
      name: "Innovation",
      description: "London"
    },
  ] as ChildItem[]
} as GoalObject

const fakeCerti = {
  title: "Earn a certificate",
  subtitle: "Breakthrough pricing on 100% online degrees",
  tipe: 1,
  dataScience: [
    {
      name: "Master of Applied Data Science",
      description: "University of Michigan"
    },
    {
      name: "Master of Applied Data Science 2",
      description: "University of Michigan 2"
    },
  ] as ChildItem[],
  business: [
    {
      name: "MBA in Business of Analysis",
      description: "O.P"
    },
    {
      name: "MBA in Business of Analysis 2",
      description: "O.P 2"
    },
  ] as ChildItem[],
  computerScience: [
    {
      name: "Computer Science",
      description: "London"
    },
    {
      name: "Computer Science 2",
      description: "London"
    },
  ] as ChildItem[],
  earnToward: [] as ChildItem[]
} as GoalObject

const fakeAdvanceCareer = {
  title: "Advance your career",
  subtitle: "",
  tipe: 2,
  dataScience: [
    {
      name: "Data Science",
      description: "University of Michigan"
    },
    {
      name: "Data Analyst",
      description: "University of Michigan 2"
    },
  ] as ChildItem[],
  business: [
    {
      name: "Digital Marketing Specialist",
      description: "O.P"
    },
    {
      name: "Digital Marketing Manager",
      description: "O.P 2"
    },
  ] as ChildItem[],
  computerScience: [
    {
      name: "Network engineering",
      description: "London"
    },
    {
      name: "Network manager",
      description: "London"
    },
  ] as ChildItem[],
  arts: [
    {
      name: "Grafic Designer",
      description: "London"
    },
    {
      name: "UX/UI Designer",
      description: "London"
    }
  ] as ChildItem[],
  earnToward: [
    {
      name: "Big data",
      description: "London"
    },
    {
      name: "Innovation",
      description: "London"
    },
  ] as ChildItem[]
} as GoalObject

const fakeBusiness = {
  title: "Business",
  tipe: 101,
  degrees: [
    {
      name: "Master of Applied Data Science",
      description: "University of Michigan"
    },
    {
      name: "Master of Applied Data Science 2",
      description: "University of Michigan 2"
    },
  ] as ChildItem[],
  subDegreeTitle: "Breakthrough pricing 100%",
  certificates: [
    {
      name: "MBA in Business of Analysis",
      description: "O.P"
    },
    {
      name: "MBA in Business of Analysis 2",
      description: "O.P 2"
    },
  ] as ChildItem[],
  subCertificateTitle: "In 3-9 month",
  getStarted: [
    {
      name: "Free Courses",
    },
    {
      name: "Most Popular",
    },
  ] as ChildItem[],
  popularSkills: [
    {
      name: "Python",
    },
    {
      name: "SQL",
    },
  ] as ChildItem[]

} as SubjectObject

const fakeLanguageLearning = {
  title: "Language Learning",
  tipe: 102,
  degrees: [] as ChildItem[],
  subDegreeTitle: "Breakthrough pricing 100%",
  certificates: [
    {
      name: "MBA in Business of Analysis",
      description: "O.P"
    },
    {
      name: "MBA in Business of Analysis 2",
      description: "O.P 2"
    },
  ] as ChildItem[],
  subCertificateTitle: "In 3-9 month",
  getStarted: [
    {
      name: "Free Courses",
    },
    {
      name: "Most Popular",
    },
  ] as ChildItem[],
  popularSkills: [
    {
      name: "Python",
    },
    {
      name: "SQL",
    },
  ] as ChildItem[]
} as SubjectObject

const fakeMathAndLogic = {
  title: "Business",
  tipe: 103,
  degrees: [
    {
      name: "Master of Applied Data Science",
      description: "University of Michigan"
    },
    {
      name: "Master of Applied Data Science 2",
      description: "University of Michigan 2"
    },
  ] as ChildItem[],
  subDegreeTitle: "Breakthrough pricing 100%",
  certificates: [] as ChildItem[],
  subCertificateTitle: "In 3-9 month",
  getStarted: [
    {
      name: "Free Courses",
    },
    {
      name: "Most Popular",
    },
  ] as ChildItem[],
  popularSkills: [
    {
      name: "Python",
    },
    {
      name: "SQL",
    },
  ] as ChildItem[]
} as SubjectObject

function App() {
  const [isIn, setIsIn] = useState(0)

  const [tipe, setTipe] = useState(0) // 0-Goals and 1-Subject 
  const [goalData, setGoalData] = useState(fakeAdvanceCareer)
  const [subjectData, setSubjectData] = useState(fakeBusiness)

  const [page, setPage] = useState(0) // 0-course list, 1-course info, 2-course enroll, 3-course understanding

  function showDropdown(e: any) {
    e.stopPropagation()
    // console.log("showDropdown")
    var id = (document.getElementById("ex-modal-id")) as HTMLElement
    if (!id.classList.contains("show")) {
      // console.log("display block")
      id.classList.add("show")
    }

    setIsIn(1)
  }

  function holdDropdown() {
    // console.log("holdDropdown")
    var id = (document.getElementById("ex-modal-id")) as HTMLElement
    if (id.classList.contains("show") && !id.classList.contains("hold")) {
      // console.log("hold display block")
      id.classList.add("hold")
    }
  }

  function hideDropdown() {
    var id = (document.getElementById("ex-modal-id")) as HTMLElement
    setIsIn(0)

    setTimeout(() => {
      if (id.classList.contains("show") && id.classList.contains("hold")) {
        return
      }

      id.classList.remove("show")
      id.classList.remove("hold")

    }, 150)
  }

  function closeDropdown() {
    var id = (document.getElementById("ex-modal-id")) as HTMLElement
    setIsIn(0)

    setTimeout(() => {
      id.classList.remove("show")
      id.classList.remove("hold")

    }, 150)
  }

  function showChildModal(e: any, flag: number) {
    e.stopPropagation()
    console.log("show child modal")
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement

    if (!id.classList.contains("show")) {
      console.log("show child modal: add show")
      id.classList.add("show")
    }

    switch (flag) {
      case 0: {
        setGoalData(fakeDegree)
        setTipe(0)
        break
      }
      case 1: {
        setGoalData(fakeCerti)
        setTipe(0)
        break
      }
      case 2: {
        setGoalData(fakeAdvanceCareer)
        setTipe(0)
        break
      }

      case 101: {
        setSubjectData(fakeBusiness)
        setTipe(1)
        break
      }
      case 102: {
        setSubjectData(fakeLanguageLearning)
        setTipe(1)
        break
      }
      case 103: {
        setSubjectData(fakeMathAndLogic)
        setTipe(1)
        break
      }
      default: {
        id.classList.remove("show")
        id.classList.remove("hold")
        console.log("SOMETHING WRONGGGG")
      }
    }
    // setIsIn(1)
  }

  function closeChildModal(e: any) {
    e.stopPropagation()
    console.log("close child modal")
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement
    setTimeout(() => {
      if (id.classList.contains("show") && id.classList.contains("hold")) {
        console.log("close child modal: do not close")
        return
      }
      // console.log("close child modal: can close ")
      // id.classList.remove("show")
      // id.classList.remove("hold")

    }, 0)

    // setIsIn(1)
  }

  function totallyCloseChildModal() {
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement
    // setIsIn(0)
    console.log("totally close child")
    setTimeout(() => {
      id.classList.remove("show")
      id.classList.remove("hold")

    }, 150)
  }

  function holdChildModal(e: any) {
    e.stopPropagation()
    console.log("hold child modal")
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement
    if (id.classList.contains("show") && !id.classList.contains("hold")) {
      console.log("hold child modal: add hold")
      id.classList.add("hold")
    }
  }

  useEffect(() => {
    var id = (document.getElementById("app-body-id")) as HTMLElement
    if(page == 2) {
      if(!id.classList.contains("bg-white")) {
        id.classList.add("bg-white")
      }
    } else {
      if(id.classList.contains("bg-white")) {
        id.classList.remove("bg-white")
      }
    }
  }, [page])

  return (
    <div className='app'>
      <BrowserRouter>
        <Header page={page} isIn={isIn} show={(e: any) => showDropdown(e)} hide={hideDropdown} hold={holdDropdown} />
        <div id="app-body-id" className='app-body-bg'>
          <Routes>
            <Route path="/" element={<CourseList setPage={setPage} />} />
            <Route path="/learn/:name" element={<CourseInfo setPage={setPage} />} />
            <Route path="/enroll" element={<CEModule setPage={setPage} />} />
            <Route path="/enroll/module" element={<CEModule setPage={setPage} />} />
            <Route path='/enroll/note' element={<CENote setPage={setPage} />} />
            <Route path='/enroll/discussion' element={<CEDiscussion setPage={setPage} />} />
            <Route path='/enroll/message' element={<CEMessage setPage={setPage} />} />
            <Route path='/enroll/course-info' element={<CECourseInfo setPage={setPage} />} />
            <Route path='/enroll/course-understanding' element={<CECourseInfo setPage={setPage} />} />
          </Routes>
        </div>

        <ModalExplore tipe={tipe} setTipe={setTipe} goalData={goalData} subjectData={subjectData} close={closeDropdown} showChildModal={showChildModal} closeChildModal={closeChildModal}
          holdChildModal={holdChildModal} totallyCloseChildModal={totallyCloseChildModal}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
