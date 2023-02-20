import React, { useState } from 'react';
import Header from './components/header/header';
import ModalExplore from './components/modal/explore';

function App() {
  const [isIn, setIsIn] = useState(0)

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
        <ModalExplore close={closeDropdown} />
      </div>

    </div>
  );
}

export default App;
