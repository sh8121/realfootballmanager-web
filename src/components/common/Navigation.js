import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation(props){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>    
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <Link to="/" className="navbar-brand">홈</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/player" className="nav-link">선수관리</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/match" className="nav-link">경기관리</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">로그아웃</Link>   
                    </li>
                </ul>
            </div>
        </nav>        
    )
}