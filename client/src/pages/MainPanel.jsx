import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

// import { useState, useEffect } from 'react'
// import axios from 'axios'

function MainPanel() {
  const { value } = useContext(UserContext);
  return (
    <div>
      <div className="flex">
        {value.role !== "employee" && (
          <div>
            <h2>Users operations</h2>
            <ul>
              <li>
                <Link to="/displayusers">Display users</Link>
              </li>
              {value.role !== "manager" && (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>

                  <li>
                    <Link to="/edituser">Edit User</Link>
                  </li>
                  <li>
                    <Link to="/deleteuser">Delete User</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
        <div className="px-16">
          <h2>Activities operations</h2>
          <ul>
            {" "}
            {value.role !== "employee" && (
              <li>
                <Link to="/activitiesdisplay">Display activities</Link>
              </li>
            )}
            <li>
              <Link to="/addactivities">Add activities</Link>
            </li>
            {value.role !== "employee" && (
              <>
                <li>
                  <Link to="/deleteactivities">Delete activities</Link>
                </li>
                <li>
                  <Link to="/editactivity">Edit activities</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
