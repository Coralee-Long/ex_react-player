import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Player from "./components/Player";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
