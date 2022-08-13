import React, { useEffect, useState } from "react";
import "./UserPhotos.css";
import Card from "../Card/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserPhotos() {
  const [photos, setPhotos] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setPhotos(response.data));
  }, []);
 

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 text-center">USER PHOTOS</h1>
      <div className="outerContainer">
        {photos?.map((e) => {
          return (
            <Card
              id={e.id}
              name={e.title}
              img={true}
              src={e.url}
            />
          );
        })}
      </div>
    </div>
  );
}
export default UserPhotos;
