import React from 'react';

const Login = () => {
  return (
    <section className="background-radial-gradient overflow-hidden">
      <style>
        {`
          .background-radial-gradient {
            width: 100%;
            height: 100vh;
            background-color: #000;  
            background-image: radial-gradient(650px circle at 0% 0%, #001f3f 15%, #003366 35%, #000 75%, #000 80%, transparent 100%),
            radial-gradient(1250px circle at 100% 100%, #003366 15%, #001f3f 35%, #000 75%, #000 80%, transparent 100%);
          }

          #radius-shape-1 {
            height: 220px;
            width: 220px;
            top: -60px;
            left: -130px;
            background: radial-gradient(#001f3f, #003366);  
            overflow: hidden;
          }

          #radius-shape-2 {
            border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
            bottom: -60px;
            right: -110px;
            width: 300px;
            height: 300px;
            background: radial-gradient(#001f3f, #003366);  
            overflow: hidden;
          }

          .bg-glass {
            background-color: hsla(0, 0%, 100%, 0.8) !important; 
            backdrop-filter: saturate(200%) blur(25px);
          }
        `}
      </style>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              TEMA CONCEPT <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>Software engineering company </span>
            </h1>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form action='/dashboard'>
                  <div className="row mb-5"></div>

                  <div className="form-outline mb-4">
                    <input type="email" id="formEmail" className="form-control" required />
                    <label className="form-label" htmlFor="formEmail">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="formPassword" className="form-control" required />
                    <label className="form-label" htmlFor="formPassword">Password</label>
                  </div>
                  
                  <div className="col-md-12 mb-4">
                    <select className="form-select" aria-label="Role selection">
                      <option value="">Select Role</option>
                      <option value="admin">Admin</option>
                      <option value="employee">Employee</option>
                    </select>
                  </div>
                  
                  <button  type="submit" className="btn btn-primary btn-block mb-4">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
