import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup } from "reactstrap";
import {
  auth,
  registerWithEmailAndPassword,
} from "../config/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
    if (error) alert(error);
  }, [loading, user, error, navigate]);


  return (
    <>
      <section className="vh-100" style={{
        backgroundColor: "white",

      }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-80 mt-5">
            <div className="col col-xl-8">
              <div className="card" style={{
                borderRadius: "1rem",
                backgroundColor: "#9dbbed"
              }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="assets/image/login.jpg"
                      alt="login form" className="img-fluid" style={{
                        borderRadius: "1rem"
                      }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      
                        <div className="d-flex align-items-center mb-3 pb-1">FORM REGISTER</div>
                       <FormGroup>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                          />
                        </FormGroup>
                        <FormGroup>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                          />
                       </FormGroup>
                       <FormGroup>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                          />
                     </FormGroup>
                        <div className="form-outline mb-4">
                          <button className="btn btn-primary" onClick={register}>
                            Register
                          </button>
                        </div>
                        <div>
                          Already have an account? <Link to="/Login">Login</Link> now.
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
      );
}

      export default Register;
