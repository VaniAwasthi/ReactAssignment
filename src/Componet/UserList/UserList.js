import React, { useEffect, useState } from "react";
import "./UserList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";

function UserList() {
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users ")
      .then((response) => setUsers(response.data));
  }, []);
  function clickHandler(id) {
    navigate(`/albums/${id}`);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 text-center">USER LIST</h1>
      <div className="outerContainer">
        {users?.map((e) => {
          return (
            <Card
              id={e.id}
              name={e.name}
              email={e.email}
              phone ={e.phone}
              company={e.company.name}
              onClick={() => clickHandler(e.id)}
              btnText={"View Album"}
            />
          );
        })}
      </div>
    </div>
  );
}
export default UserList;
