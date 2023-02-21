import React, { useState } from 'react';
import Header from './components/header/header';
import ModalExplore from './components/modal/explore';

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
  subtitle: string,
  degrees: ChildItem[],
  certificates: ChildItem[],
  getStarted: string[],
  popularSkills: string[],
}

interface AdvanceYourCareer {
  dataScience: string[],
  business: string[],
  computerScience: string[],
  Arts: string[]
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

function App() {
  const [isIn, setIsIn] = useState(0)

  const [tipe, setTipe] = useState(0) // 0-Goals and 1-Subject 
  const [goalData, setGoalData] = useState(fakeAdvanceCareer)
  const [subjectData, setSubjectData] = useState()

  function showDropdown(e: any) {
    e.stopPropagation()
    console.log("showDropdown")
    var id = (document.getElementById("ex-modal-id")) as HTMLElement
    if (!id.classList.contains("show")) {
      console.log("display block")
      id.classList.add("show")
    }
    
    setIsIn(1)
  }

  function holdDropdown() {
    console.log("holdDropdown")
    var id = (document.getElementById("ex-modal-id")) as HTMLElement
    if (id.classList.contains("show") && !id.classList.contains("hold")) {
      console.log("hold display block")
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
    console.log("show child")
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement
    if (!id.classList.contains("show")) {
      console.log("display block")
      id.classList.add("show")
    }
    
    switch(flag) {
      case 0: {
        setGoalData(fakeDegree)
        break
      }
      case 1: {
        setGoalData(fakeCerti)
        break
      }
      case 2: {
        setGoalData(fakeAdvanceCareer)
        break
      }
      default:{
        console.log("SOMETHING WRONGGGG")
      }
    }
    // setIsIn(1)
  }

  function closeChildModal(e: any) {
    e.stopPropagation()
    console.log("close child")
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement
    // setTimeout(() => {
    //   if (id.classList.contains("show")) {
    //     console.log("display block")
    //     id.classList.remove("show")
    //   }
    // }, 150)

    setTimeout(() => {
      if (id.classList.contains("show") && id.classList.contains("hold")) {
        return
      }
      
        id.classList.remove("show")
        id.classList.remove("hold")

    }, 150)
    
    // setIsIn(1)
  }

  function totallyCloseChildModal() {
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement
    // setIsIn(0)
    
    setTimeout(() => {
        id.classList.remove("show")
        id.classList.remove("hold")

    }, 150)
  }

  function holdChildModal(e: any) {
    e.stopPropagation()
    console.log("hold child")
    var id = (document.getElementById("ex-modal-child-id")) as HTMLElement
    if (id.classList.contains("show") && !id.classList.contains("hold")) {
      console.log("hold display block")
      id.classList.add("hold")
    }
  }



  return (
    <div className='app'>
      <Header isIn={isIn} show={(e: any) => showDropdown(e)} hide={hideDropdown} hold={holdDropdown}/>

      <div className='app-body'>
        <div className='app-body-b'>
          APP content
          <h1>CONTENTTTTTTTTTTTTT</h1>
          <h1>CONTENTTTTTTTTTTTTT</h1>
          <h1>CONTENTTTTTTTTTTTTT</h1>
          <h1>CONTENTTTTTTTTTTTTT</h1>
          <h1>CONTENTTTTTTTTTTTTT</h1>

        </div>
        <ModalExplore tipe={tipe} goalData={goalData} subjectData={subjectData}  close={closeDropdown} showChildModal={showChildModal} closeChildModal={closeChildModal}
          holdChildModal={holdChildModal} totallyCloseChildModal={totallyCloseChildModal} />
      </div>

    </div>
  );
}

export default App;
