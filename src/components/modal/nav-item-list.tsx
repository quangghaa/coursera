import React, { useEffect } from "react";

function NavItemList(props: any) {
    const tipe = 0

    function sectionTitleIdToName(id: any) {
        switch (id) {
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

            // Degrees section
            case 101: {
                return "Degrees"
            }
            // Certificate section
            case 102: {
                return "Certificate programs"
            }
            // Get started section
            case 103: {
                return "Get started"
            }
            // Popular skills section
            case 104: {
                return "Popular skills"
            }
            default: {
                return "Weird case"
            }
        }
    }

    function sectionTitleIdToBtnName(id: any) {
        switch(id) {
            case 101: {
                return "View all degrees"
            }
            case 102: {
               return  "view all Certificates"
            }
            case 104: {
                return "View all skills"
            }
        }
    }

    useEffect(() => {

        // console.log("data: ", props)

        // console.log("section id: ", props.sectionTitileId)
    }, [props.data])

    return (
        <div className="nav-item-section">
            <div className="nil-head">{sectionTitleIdToName(props.sectionTitleId)}</div>

            {/* Child: Goals */}
            {
                props.itemTipe < 100 &&
                <>

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
                                </>
                        }

                    </ul>

                    {
                        props.itemTipe != 2 ? <div className="mt-2rem">
                            <a href="#" className="view-all-link">View all Data Science degrees</a>
                        </div> :
                            <></>
                    }

                </>
            }

            {/* Child: Subject */}
            {
                props.itemTipe > 100 &&
                <>

                    <ul className="nil-list">
                        {
                            (props.sectionTitleId == 103 || props.sectionTitleId == 104) ?
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
                                                        props.sectionTitleId == 101 ? <>
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
                                </>
                        }

                    </ul>

                    { 
                        props.sectionTitleId != 103 &&
                        <div className="view-all-degree-btn mt-2rem">
                            <button className="view-all-degree-btn-b">{sectionTitleIdToBtnName(props.sectionTitleId)}</button>
                        </div> 
                    }

                </>
            }

        </div>
    )
}

export default NavItemList;