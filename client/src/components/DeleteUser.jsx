import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function DeleteUser() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    userid: "",
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
      const response = await axios.delete(
        "http://localhost:4001/api/users/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: formData,
        }
      );

      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div>Delete user</div>
        <div>
          <input
            type="text"
            placeholder="Input id to delete"
            id="userid"
            onChange={onChange}
            value={formData.id}
          />
          <button onClick={onSubmit}>Wyslij</button>
        </div>
        <div>
          <Link to="/mainpanel">
            <button className="p-2 m-4">Go back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DeleteUser;
