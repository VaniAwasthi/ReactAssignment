import React, { useEffect, useState } from "react";
import "./Album.css";
import Card from "../Card/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Album() {
  const [albums, setAlbums] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => setAlbums(response.data));
  }, []);
  function clickHandler(id) {
    navigate(`/photos/${id}`);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 text-center">USER ALBUM</h1>
      <div className="outerContainer flex flex-wrap">
        {albums?.map((e) => {
          return (
            <Card
              id={e.id}
              name={e.title}
              onClick={() => clickHandler(e.id)}
              btnText={"View Photos"}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Album;
