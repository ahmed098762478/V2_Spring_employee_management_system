import React, { useState, useEffect } from 'react';

const AddEmployeeModal = ({ show, handleClose, handleAdd }) => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    dob: '',
    gender: 'male',
    contact: '',
    nid: '',
    address: '',
    department: '',
    degree: '',
    point: '',
    salaire: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setEmployeeData({
      ...employeeData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(employeeData);
    handleClose();  
  };

   useEffect(() => {
    const modalElement = document.getElementById('addEmployeeModal');
    if (show) {
      modalElement.classList.add('fadeIn');   
      modalElement.classList.remove('fadeOut');
    } else {
      modalElement.classList.add('fadeOut');  
      modalElement.classList.remove('fadeIn');
    }
  }, [show]);

  return (
    <>
      {}
      {show && <div className="modal-backdrop"></div>}

      {}
    <div
      id="addEmployeeModal"
      className={`modal fade ${show ? 'show' : ''}`} 
      style={{ display: show ? 'block' : 'none' }}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addEmployeeModalLabel"
      aria-hidden={!show}
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addEmployeeModalLabel">Ajouter un employé</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" className="form-control" id="name" name="name" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date de naissance</label>
                    <input type="date" className="form-control" id="dob" name="dob" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Sexe</label>
                    <select className="form-control" id="gender" name="gender" required onChange={handleChange}>
                      <option value="male">Homme</option>
                      <option value="female">Femme</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" className="form-control" id="contact" name="contact" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nid">NID</label>
                    <input type="text" className="form-control" id="nid" name="nid" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Adresse</label>
                    <input type="text" className="form-control" id="address" name="address" required onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="department">Département</label>
                    <input type="text" className="form-control" id="department" name="department" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="degree">Diplôme</label>
                    <input type="text" className="form-control" id="degree" name="degree" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="point">Point</label>
                    <input type="number" className="form-control" id="point" name="point" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="salaire">Salaire</label>
                    <input type="number" className="form-control" id="salaire" name="salaire" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="profilePicture">Photo de profil</label>
                    <input type="file" className="form-control-file" id="profilePicture" name="profilePicture" accept="image/*" onChange={handleFileChange} />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default AddEmployeeModal;
