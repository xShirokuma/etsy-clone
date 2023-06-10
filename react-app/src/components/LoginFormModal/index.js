import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const demouserhandleSubmit = async (e) => {
    e.preventDefault()
    const data = await dispatch(login("demo@aa.io", "password"))
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
   }

  return (
    <div className="log-in-modal">
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="login-button">
          <button type="submit">Sign in</button>
          <button className="demo-user" onClick={demouserhandleSubmit}>Demo User </button>
        </div>
        
      </form>
    </div>
  );
}

export default LoginFormModal;
