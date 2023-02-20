import { Button } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { LogoImg } from "../../utils/header-img";
import { BellIcon, MediumDropdownIcon, UserIcon, DropdownIcon, BigDropdownIcon, DropdownIconBlue } from "../../utils/header-svg";
import "./style.css";

function Header(props: any) {
    const onSearch = (value: string) => console.log(value);

    const [user, setUser] = useState("ha quang")

    return (
        <>
        <div className="header">
            <div className="header-b">
                <div className="h-left">
                    <div className="h-logo">
                        <LogoImg />
                    </div>
                    <div className="h-explore-btn" onMouseOver={props.hold}>
                        <button className="h-explore-btn-b" onMouseOver={props.show} onMouseLeave={props.hide}>
                            Explore
                            &nbsp;
                            {
                                props.isIn == 0 ? <DropdownIcon /> : <DropdownIconBlue />
                            }
                        </button>
                    </div>
                    <div id="header-search-id" className="h-search h-ml">
                        <Search className="h-search-b" placeholder="What do you want to learn" onSearch={onSearch} enterButton />
                    </div>
                </div>

                <div className="h-right">
                    <ul className="h-nav">
                        <li className="h-nav-item">
                            <div className="h-nav-dropdown-item">
                                Online Degrees 
                                &nbsp;
                                <BigDropdownIcon />
                            </div>
                        </li>
                        <li className="h-nav-item hover-underline">Find your New Career</li>
                        <li className="h-nav-item hover-underline">For Enterprise</li>
                        <li className="h-nav-item hover-underline" >For Universities</li>
                        <li className="h-nav-item">
                            <div className="bell-icon">
                            <BellIcon />
                            </div>
                        </li>
                    </ul>

                    {/* <div className="login-and-join">
                        <div className="laj-box">
                            <div className="login">
                                <a href="#" className="login-b">Log in</a>
                            </div>

                            <div className="join">
                                <Button className="join-b">Join for Free</Button>
                            </div>
                        </div>
                    </div> */}

                    <div className="user-info">
                        <button className="user-info-btn">
                            <div className="user-icon">
                            <UserIcon />
                            </div>
                            <div className="user-name">
                            {user}
                            </div>
                            <MediumDropdownIcon />
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
        
        </>
    )
}

export default Header;