import React, { useState } from 'react';
import AddEmployeeModal from './AddEmployeeModal';
import EditEmployeeModal from './EditEmployeeModal';

const EmployeeList = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);  
    const [employees, setEmployees] = useState([  
        {
            id: 1,
            photo: "assets/img/profiles/Sadge.png",
            name: "John Doe",
            email: "johndoe@example.com",
            dob: "1990-05-15",
            gender: "Male",
            contact: "1234567890",
            nid: "123456789",
            address: "123 Main St",
            department: "HR",
            degree: "Master's",
            point: 100,
        },
        {
            id: 2,
            photo: "assets/img/profiles/Sadge.png",
            name: "Ahmed Lahbabi",
            email: "walo@example.com",
            dob: "1990-05-15",
            gender: "Male",
            contact: "1234567890",
            nid: "123456789",
            address: "123 Main St",
            department: "HR",
            degree: "Master's",
            point: 100,
        },
        {
            id: 3,
            photo: "assets/img/profiles/Sadge.png",
            name: "Omar Hariri",
            email: "test@example.com",
            dob: "1990-05-15",
            gender: "Male",
            contact: "1234567890",
            nid: "123456789",
            address: "123 Main St",
            department: "HR",
            degree: "Master's",
            point: 100,
        },
    ]);

    const handleOpenAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);

    const handleOpenEditModal = (employee) => {
        setSelectedEmployee(employee);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedEmployee(null);
    };

    const handleEditEmployee = (updatedEmployee) => {
        const updatedEmployees = employees.map((employee) =>
            employee.id === updatedEmployee.id ? updatedEmployee : employee
        );
        setEmployees(updatedEmployees);
        setShowEditModal(false);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredEmployees = employees.filter((employee) =>
        Object.values(employee).some((value) =>
            value.toString().toLowerCase().includes(searchTerm)
        )
    );

     const handleDeleteEmployee = (id) => {
        const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?');
        if (confirmed) {
            const updatedEmployees = employees.filter((employee) => employee.id !== id);
            setEmployees(updatedEmployees);
        }
    };

    return (
        <div className="content container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-table">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Liste des employés</h4>
                                <div className="input-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                    <span className="input-group-btn">
                                        <button
                                            className="btn btn-outline-success ml-2"
                                            onClick={handleOpenAddModal}
                                        >
                                            Ajouter un employé
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Photo</th>
                                            <th>Nom</th>
                                            <th>Email</th>
                                            <th>Date de naissance</th>
                                            <th>Sexe</th>
                                            <th>Contact</th>
                                            <th>NID</th>
                                            <th>Adresse</th>
                                            <th>Département</th>
                                            <th>Degree</th>
                                            <th>Point</th>
                                            <th className="text-center">Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEmployees.map((employee) => (
                                            <tr key={employee.id}>
                                                <td>{employee.id}</td>
                                                <td>
                                                    <img
                                                        src={employee.photo}
                                                        className="avatar-img rounded-circle"
                                                        alt="Employee Photo"
                                                        width="50"
                                                    />
                                                </td>
                                                <td>{employee.name}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.dob}</td>
                                                <td>{employee.gender}</td>
                                                <td>{employee.contact}</td>
                                                <td>{employee.nid}</td>
                                                <td>{employee.address}</td>
                                                <td>{employee.department}</td>
                                                <td>{employee.degree}</td>
                                                <td>{employee.point}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-warning"
                                                        onClick={() => handleOpenEditModal(employee)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => handleDeleteEmployee(employee.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {showAddModal && <AddEmployeeModal show={showAddModal} handleClose={handleCloseAddModal} />}
            {showEditModal && (
                <EditEmployeeModal
                    show={showEditModal}
                    handleClose={handleCloseEditModal}
                    handleEdit={handleEditEmployee}
                    employee={selectedEmployee}
                />
            )}
        </div>
    );
};

export default EmployeeList;
