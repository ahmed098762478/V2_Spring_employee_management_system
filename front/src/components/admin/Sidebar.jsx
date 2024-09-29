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
                            <Link to="/employees" data-page="employes"><i className="fe fe-users"></i> <span>Employes</span></Link>
                        </li>
                        <li>
                            <Link to="/Salaries" data-page="salary"><i className="fe fe-dollar-sign"></i> <span>Salaire</span></Link>
                        </li>
                        <li>
                            <Link to="/tasks" data-page="task"><i className="fe fe-list"></i> <span>Tâches</span></Link>
                        </li>
                        <li>
                            <Link to="/leave" data-page="leave"><i className="fe fe-calendar"></i> <span>Congés</span></Link>
                        </li>
                        <li>
                            {}
                            <Link to="/logout" data-page="logout"><i className="fe fe-log-out"></i> <span>Logout</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
