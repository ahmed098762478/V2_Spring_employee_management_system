import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">
                            <span>if you have section add menu title</span>
                        </li>
                        <li>
                            <Link to="/dashboard" data-page="home"><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/employes" data-page="employes"><i className="fe fe-users"></i> <span>Employes</span></Link>
                        </li>
                        {/* Ajoute les autres liens ici */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
