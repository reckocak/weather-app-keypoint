import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (
      password.length>=6
    ) {
     localStorage.setItem('user', JSON.stringify({email:mail, password:password}))
      navigate("/main");
    } else {
      alert("şifreniz en az 6 haneli olmalıdir");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row main-content text-center justify-content-center">
        <div className="col-md-8 col-xs-12 col-sm-12 login_form">
          <div className="container-fluid">
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
