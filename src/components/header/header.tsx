import { Button, Dropdown, Popover } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { LogoImg } from "../../utils/header-img";
import { BellIcon, MediumDropdownIcon, UserIcon, DropdownIcon, BigDropdownIcon, DropdownIconBlue } from "../../utils/header-svg";
import "./style.css";
import type { MenuProps } from 'antd';
import { useNavigate } from "react-router-dom";

function Header(props: any) {
    const onSearch = (value: string) => console.log(value);

    const [user, setUser] = useState("ha quang")

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a className="nav-item" target="_blank" rel="noopener noreferrer" href="#">
              <div className="bold">Online degrees</div>
              <div>Explore bachelor's and master's degrees</div>
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a className="nav-item" target="_blank" rel="noopener noreferrer" href="#">
              <div className="bold">Online degrees</div>
              <div>Explore bachelor's and master's degrees</div>
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a className="nav-item" target="_blank" rel="noopener noreferrer" href="#">
              <div className="bold">Online degrees</div>
              <div>Explore bachelor's and master's degrees</div>
            </a>
          ),
        },
      ];

      const text = <span>Title</span>;

      const content = (
        <ul className="user-option-list">
            <li className="user-option-item">My course</li>
            <li  className="user-option-item">Profile</li>
            <li  className="user-option-item">My purchases</li>
            <li  className="user-option-item">Settings</li>
            <li  className="user-option-item">Updates</li>
            <li  className="user-option-item">Accomplishments</li>
            <li  className="user-option-item">Help center</li>
            <li  className="user-option-item">Logout</li>
        </ul>
      );

    function changeBg() {
        var id = (document.getElementById("user-info-id")) as HTMLElement
        if(!id.classList.contains("light-gray-bg")) {
            id.classList.add("light-gray-bg")
        }

        var id = (document.getElementById("user-info-btn-id")) as HTMLElement
        if(!id.classList.contains("light-gray-bg")) {
            id.classList.add("light-gray-bg")
        }
    }

    function removeChangeBg() {
        var id = (document.getElementById("user-info-id")) as HTMLElement
        if(id.classList.contains("light-gray-bg")) {
            id.classList.remove("light-gray-bg")
        }

        var id = (document.getElementById("user-info-btn-id")) as HTMLElement
        if(id.classList.contains("light-gray-bg")) {
            id.classList.remove("light-gray-bg")
        }
    }

    const navigate = useNavigate()

    function toHome() {
        navigate("/")
    }

    return (
        <>
        <div className="header">
            <div className="header-b">
                <div className="h-left">
                    <div className="h-logo" onClick={toHome}>
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
                            {/* <div className="h-nav-dropdown-item">
                                Online Degrees 
                                &nbsp;
                                <BigDropdownIcon />
                            </div> */}

                            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                                <div className="h-nav-dropdown-item">
                                    <button className="h-nav-dropdown-item-btn">
                                        Online Degrees 
                                        &nbsp;
                                        <BigDropdownIcon />
                                    </button>
                                </div>
                            </Dropdown>
                        </li>
                        <li className="h-nav-item hover-underline">Find your New Career</li>
                        <li className="h-nav-item hover-underline">For Enterprise</li>
                        <li className="h-nav-item hover-underline" >For Universities</li>
                        <li className="h-nav-item pr-0.5rem">
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

                    <div id="user-info-id" className="user-info" onMouseOver={changeBg} onMouseLeave={removeChangeBg}>

                        <Popover id="user-option-id" placement="bottomRight" content={content} trigger="click">
                            <button id="user-info-btn-id" className="user-info-btn">
                                <div className="user-icon">
                                <UserIcon />
                                </div>
                                <div className="user-name">
                                {user}
                                </div>
                                <MediumDropdownIcon />
                            </button>
                        </Popover>
                    </div>
                </div>

            </div>
            
        </div>
        
        </>
    )
}

export default Header;