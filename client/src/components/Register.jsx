import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role") || "employee";

  useEffect(() => {
    if (role != "CEO") {
      navigate("/");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
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
    if (formData.role === "") {
      formData.role = "employee";
    }

    try {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.post(
        "http://localhost:4001/api/users",
        formData,
        config
      );
      console.log("haloooo");
      console.log(response.data);
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);

      navigate("/MainPanel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/5">
      <h2>Register new user</h2>
      <ul>
        <li className="py-2">
          <input
            type="text"
            placeholder="Imie"
            id="name"
            onChange={onChange}
            value={formData.name}
            className="p-2 w-full"
          />
        </li>
        <li className="py-2">
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={onChange}
            value={formData.email}
            className="p-2 w-full"
          />
        </li>
        <li className="py-2">
          <select
            type="text"
            placeholder="Rola"
            id="role"
            onChange={onChange}
            value={formData.role}
            className="p-2 w-full"
          >
            <option value="employee">employee</option>
            <option value="manager">manager</option>
            <option value="CEO">CEO</option>
          </select>
        </li>
        <li className="py-2">
          <input
            type="password"
            placeholder="Haslo"
            id="password"
            onChange={onChange}
            value={formData.password}
            className="p-2  w-full"
          />
        </li>
        <li>
          <button
            onClick={onSubmit}
            className="w-full text-green-500 hover:border-green-500"
          >
            Register new user
          </button>
        </li>
        <li>
          <Link to="/mainpanel">
            <button className="w-full my-8">{"< "}Go back</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Register;
