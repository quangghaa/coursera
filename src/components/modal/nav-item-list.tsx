import React, { useEffect } from "react";

function NavItemList(props: any) {
    const tipe = 0

    function sectionTitleIdToName(id: any) {
        switch(id) {
            case 0: {
                return "Data Science"
            }
            case 1: {
                return "Business"
            }
            case 2: {
                return "Computer Science"
            }
            case 3: {
                return "Arts and Humanities"
            }
            default: {
                return "Weird case"
            }
        }
    }

    useEffect(() => {

        console.log("data: ", props)
    }, [props.data])

    return (
        <div className="nav-item-section">
            <div className="nil-head">{sectionTitleIdToName(props.sectionTitleId)}</div>
            
            <ul className="nil-list">
                {
                    props.itemTipe == 2 ? 
                    <>  
                        {
                            props.data.map((a: any) => {
                                return <li className="nil-item">
                                        <div className="nili-info">
                                                <>
                                                    <div className="nili-name">
                                                        {a.name}
                                                    </div>
                                                </>
                                            
                                        </div>
                                    </li>
                            })
                        }
                        
                    </> :
                    <>
                        {
                            props.data.map((d: any) => {
                                return <li className="nil-item">
                                        <div className="nili-icon">Icon</div>
                                        <div className="nili-info">
                                            {
                                                props.itemTipe == 0 ? <>
                                                    <div className="nili-des">
                                                        {d.description}
                                                    </div>
                                                    <div className="nili-name mt-5px">
                                                        {d.name}
                                                    </div>
                                                </> :
                                                <>
                                                    <div className="nili-name">
                                                        {d.name}
                                                    </div>
                                                    <div className="nili-des mt-5px">
                                                        {d.description}
                                                    </div>
                                                    
                                                </>
                                            }
                                        </div>
                                    </li>
                            })
                        }
                        {/* <li className="nil-item">
                            <div className="nili-icon">{sectionTitleIdToName(props.sectionTitleId)}</div>
                            <div className="nili-info">
                                {
                                    props.data.tipe == 0 ? <>
                                        <div className="nili-des">
                                            University of Michigan
                                        </div>
                                        <div className="nili-name mt-5px">
                                            Master of Applied Data Science
                                        </div>
                                    </> :
                                    <>
                                        <div className="nili-name">
                                            Master of Applied Data Science
                                        </div>
                                        <div className="nili-des mt-5px">
                                            University of Michigan
                                        </div>
                                        
                                    </>
                                }
                            </div>
                        </li> */}
                    </>
                }
                
            </ul>
            
            {
                props.itemTipe != 2 ? <div className="mt-2rem">
                <a href="#" className="view-all-link">View all Data Science degrees</a>
            </div> :
            <></>
            }
            
        </div>
    )
}

export default NavItemList;