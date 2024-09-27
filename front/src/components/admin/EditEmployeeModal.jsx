import React, { useState, useEffect } from 'react';


const EditEmployeeModal = ({ show, handleClose, handleEdit, employee }) => {
  const [employeeData, setEmployeeData] = useState(employee);

  useEffect(() => {
    setEmployeeData(employee);
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEmployeeData({
      ...employeeData,
      profilePicture: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(employeeData);
    handleClose();  
  };

  return (
    <>
      {}
      {show && <div className="modal-backdrop"></div>}

      {}
      <div
        className={`modal fade ${show ? 'show fade-in' : 'fade-out'}`}
        style={{ display: show ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editEmployeeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editEmployeeModalLabel">Modifier les données</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input type="text" className="form-control" id="name" name="name" value={employeeData.name} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" name="email" value={employeeData.email} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dob">Date de naissance</label>
                      <input type="date" className="form-control" id="dob" name="dob" value={employeeData.dob} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Sexe</label>
                      <select className="form-control" id="gender" name="gender" value={employeeData.gender} required onChange={handleChange}>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact">Contact</label>
                      <input type="text" className="form-control" id="contact" name="contact" value={employeeData.contact} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nid">NID</label>
                      <input type="text" className="form-control" id="nid" name="nid" value={employeeData.nid} required onChange={handleChange} />
                    </div>
                  </div>

                  {}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="address">Adresse</label>
                      <input type="text" className="form-control" id="address" name="address" value={employeeData.address} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Département</label>
                      <input type="text" className="form-control" id="department" name="department" value={employeeData.department} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="degree">Diplôme</label>
                      <input type="text" className="form-control" id="degree" name="degree" value={employeeData.degree} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="point">Points</label>
                      <input type="number" className="form-control" id="point" name="point" value={employeeData.point} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="salaire">Salaire</label>
                      <input type="number" className="form-control" id="salaire" name="salaire" value={employeeData.salaire} required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="profilePicture">Photo</label>
                      <input type="file" className="form-control-file" id="profilePicture" name="profilePicture" onChange={handleFileChange} />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>Fermer</button>
                  <button type="submit" className="btn btn-primary">Modifier</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmployeeModal;
