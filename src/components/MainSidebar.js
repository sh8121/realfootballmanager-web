import React from 'react';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { Nav, NavItem } from 'shards-react';

class MainSidebar extends React.Component {
    constructor(props){
        super(props);
    }    

    render(){
        return (
            <div className="nav-wrapper">
                <Nav className="nav--no-borders flex-column">
                    <NavItem tag={RouteNavLink} to="">
                        홈
                    </NavItem>
                </Nav>
                <Nav className="nav--no-borders flex-column">
                    <NavItem tag={RouteNavLink} to="/player">
                        선수관리
                    </NavItem>
                </Nav>
                <Nav className="nav--no-borders flex-column">
                    <NavItem tag={RouteNavLink} to="/match">
                        경기관리
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default MainSidebar;