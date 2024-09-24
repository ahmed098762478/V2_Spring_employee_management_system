import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (page) => {
        navigate(`/${page}`);
    };

    return (
        <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="page-title">Welcome Admin!</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /Page Header */}

            <div className="row">
                <div className="col-xl-4 col-sm-6 col-12">
                    <div className="card" onClick={() => handleNavigation('employes')}>
                        <div className="card-body">
                            <div className="dash-widget-header">
                                <span className="dash-widget-icon text-primary border-primary">
                                    <i className="fe fe-users"></i>
                                </span>
                                <div className="dash-count">
                                    <h3>168</h3>
                                </div>
                            </div>
                            <div className="dash-widget-info">
                                <h6 className="text-muted">Employes</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12">
                    <div className="card" onClick={() => handleNavigation('taches')}>
                        <div className="card-body">
                            <div className="dash-widget-header">
                                <span className="dash-widget-icon text-success">
                                    <i className="fe fe-folder"></i>
                                </span>
                                <div className="dash-count">
                                    <h3>487</h3>
                                </div>
                            </div>
                            <div className="dash-widget-info">
                                <h6 className="text-muted">Taches</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12">
                    <div className="card" onClick={() => handleNavigation('conges')}>
                        <div className="card-body">
                            <div className="dash-widget-header">
                                <span className="dash-widget-icon text-danger border-danger">
                                    <i className="fe fe-calendar"></i>
                                </span>
                                <div className="dash-count">
                                    <h3>485</h3>
                                </div>
                            </div>
                            <div className="dash-widget-info">
                                <h6 className="text-muted">Conges</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
