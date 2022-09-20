import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import "./Header.css";

// WIP
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.collapse1 = this.collapse1.bind(this);
        this.collapse2 = this.collapse2.bind(this);
        this.collapse3 = this.collapse3.bind(this);
        this.state = {
            isOpen: false,
            collapse1: false,
            collapse2: false,
            collapse3: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            collapse1: false,
            collapse2: false,
            collapse3: false
        });
    }
    collapse1() {
        this.setState({collapse1: !this.state.collapse1})
        this.setState({collapse2: false})
        this.setState({collapse3: false})
    }
    collapse2() {
        this.setState({collapse1: false})
        this.setState({collapse2: !this.state.collapse2})
        this.setState({collapse3: false})
    }
    collapse3() {
        this.setState({collapse1: false})
        this.setState({collapse2: false})
        this.setState({collapse3: !this.state.collapse3})
    }
    // subMenu가 각자 열리도록 하게 하기 위해서, 또한 모바일 화면에서 사용되는 Collapse 또한 존재하기 때문에 각각 다른 State를 적용하여 따로 collapse 될 수 있도록 함
    // .subHeader의 위치를 화면 크기에 맞춰서 이동할 수 있도록 Media query 적용함. Header.css 참고
    // 현재 anchor tag들의 경우 view의 controller 작동에 맞춰 data를 넘길 수 있도록 해야함. tag를 변경해야 할 필요 있을지도?
    render(){
        return(
            <>
                <header style={{position: 'fixed', zIndex: '9999'}}>
                    <Navbar light expand="md">
                        <NavbarBrand href="/">
                            <div className="imgWrapper">
                                <img src = "http://localhost:3000/images/Logonshit.png" alt="logo"></img>
                                {/* 절대경로를 사용해야 이동된 URL에서도 이미지가 올바르게 표시된다 */}
                            </div>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink id="navmenu" onClick={this.collapse1}>
                                    Boards
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id="navmenu" onClick={this.collapse2}>
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id="navmenu" onClick={this.collapse3} style={{display: 'none'}}>
                                    Toggle
                                </NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    User
                                </DropdownToggle>
                                <DropdownMenu end style={{right: '0%'}}>
                                <DropdownItem>
                                    Sign in
                                </DropdownItem>
                                <DropdownItem>
                                    Sign up
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <Collapse isOpen={this.state.collapse1}>
                        <div className='py-2 subHeader'>
                            <div className="subMenu1">
                                <Link to={"/Notice"} id="navmenu" className="nav-link">
                                    Notice
                                </Link>
                                <Link to={"/Community"} id="navmenu" className="nav-link">
                                    Community
                                </Link>
                                <Link to={"/QnA"} id="navmenu" className="nav-link">
                                    Q&A
                                </Link>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse isOpen={this.state.collapse2}>
                        <div className='py-2 subHeader'>
                            <div className="subMenu2">
                                <Link to={"/About"} id="navmenu" className="nav-link">
                                    About us
                                </Link>
                                <a id="navmenu" className="nav-link">
                                    Questions
                                </a>
                                <a id="navmenu" className="nav-link">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse isOpen={this.state.collapse3}>
                        <div className='py-2 subHeader'>
                            <div className="subMenu3">
                                <a id="navmenu" className="nav-link">
                                    subMenu
                                </a>
                                <a id="navmenu" className="nav-link">
                                    subMenu
                                </a>
                                <a id="navmenu" className="nav-link">
                                    subMenu
                                </a>
                            </div>
                        </div>
                    </Collapse>
                </header>
            </>
        );
    };
};
export default Header;