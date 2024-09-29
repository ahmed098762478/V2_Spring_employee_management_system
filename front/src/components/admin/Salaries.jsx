// Salaries.js
import React from 'react';
import { Link } from 'react-router-dom';

const Salaries = () => {
    return (
        <div className="content container-fluid">
            <div className="row">
                <div className="col-md-12">
                    {/* Bouton pour ajouter un nouveau salaire */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="card-title">Liste des salaires</h4>
                        <Link to="/add-salary" className="btn btn-primary">Ajouter un salaire</Link>
                    </div>

                    {/* Table des salaires */}
                    <div className="card card-table">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Photo</th>
                                            <th>Nom employé</th>
                                            <th>Salaire de base</th>
                                            <th>Montant Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Exemple de données de salaire */}
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <img src="assets/img/profiles/Sadge.png" className="avatar-img rounded-circle" alt="Employee Photo" width="50" />
                                            </td>
                                            <td>John Doe</td>
                                            <td>9000</td>
                                            <td>11500</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <img src="assets/img/profiles/Sadge.png" className="avatar-img rounded-circle" alt="Employee Photo" width="50" />
                                            </td>
                                            <td>Jane Smith</td>
                                            <td>8500</td>
                                            <td>11000</td>
                                        </tr>
                                        {/* Ajoutez plus de lignes de salaire ici */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* /Table des salaires */}
                </div>
            </div>
        </div>
    );
};

export default Salaries;
