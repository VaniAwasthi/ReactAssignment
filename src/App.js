import "./App.css";
import UserList from "./Componet/UserList/UserList";
import "./Componet/Album/Album";
import Album from "./Componet/Album/Album";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPhotos from "./Componet/UserPhotos/UserPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserList />} />
        <Route exact path="/albums/:id" element={<Album />} />
        <Route exact path="/photos/:photoid" element={<UserPhotos/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
