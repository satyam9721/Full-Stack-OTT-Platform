import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./login.css";
import { Card } from "react-bootstrap";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://all-project-backend.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
	
    <div className="wrapper ">
		
      <div>
        <div>
          <form className="p-3 mt-3" onSubmit={handleSubmit}>
            <h3 className="text-center mt-4 name">Login to Your Account</h3>

            <div className="form-field d-flex align-items-center">
              <span className="far fa-user" />

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key" />

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
            </div>
            {error && <div className={styles.error_msg}>{error}</div>}
            <div className="text-center fs-6">
              <button type="submit" className="btn mt-3">
                Sign In
              </button>
            </div>
          </form>
        </div>
		<div className="signup">		
  <h1>New Here ?</h1>
  <Link to="/signup" >

    <button to="/signup" type="button" >
      Sign Up
    </button>
	
  </Link>
  </div>

				
				</div>
    </div>
  );
};

export default Login;
