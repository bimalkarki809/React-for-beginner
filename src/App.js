import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import Favorites from "./Pages/Favorites";
import NewMeetup from "./Pages/NewMeetup";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="newmeetup" element={<NewMeetup />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
