import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <a href="/" className="logo">TEMA CONCEPT</a>
                <a href="/" className="logo logo-small">TEMA CONCPET</a>
            </div>
            <a href="javascript:void(0);" id="toggle_btn">
                <i className="fe fe-text-align-left"></i>
            </a>
            <a className="mobile_btn" id="mobile_btn">
                <i className="fa fa-bars"></i>
            </a>
            <ul className="nav user-menu">
                <li className="nav-item dropdown has-arrow">
                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                        <span className="user-img">
                            <img className="rounded-circle" src="assets/img/profiles/Sadge.png" width="31" alt="User" />
                        </span>
                    </a>
                    <div className="dropdown-menu">
                        <div className="user-header">
                            <div className="avatar avatar-sm">
                                <img src="assets/img/profiles/Sadge.png" alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="user-text">
                                <h6>Ryan Taylor</h6>
                                <p className="text-muted mb-0">Administrator</p>
                            </div>
                        </div>
                        <a className="dropdown-item" href="profile.html">My Profile</a>
                        <a className="dropdown-item" href="settings.html">Settings</a>
                        <a className="dropdown-item" href="../../alogin.html">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Header;
