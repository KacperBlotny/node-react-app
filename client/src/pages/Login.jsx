// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../UserContext";

function Login() {
  const { value, setValue } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:4001/api/users/login",
        formData
      );

      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      setValue(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Login into System</h2>
      <ul>
        <li className="py-2">
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={onChange}
            value={formData.email}
            className="p-2"
          />
        </li>
        <li className="py-2">
          <input
            type="password"
            placeholder="Haslo"
            id="password"
            onChange={onChange}
            value={formData.password}
            className="p-2"
          />
        </li>
        <li>
          <button onClick={onSubmit} className="w-full">
            Log in
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Login;
