import { useState, useEffect } from "react";
import Players from "./Players";
import data from "../Data";

const Home = () => {
  const [sportsFilter, setSportsFilter] = useState("bodyboard");

  return (
    <div>
      <button onClick={() => setSportsFilter("surf")}>Surf</button>
      <button onClick={() => setSportsFilter("waterski")}>Waterski</button>
      <button onClick={() => setSportsFilter("bodyboard")}>Bodyboard</button>
      {data
        .filter((element) => element.type === sportsFilter)
        .map((item) => {
          console.log(item);
          return <Players {...item} id={item.id} key={item.id} />;
        })}
    </div>
  );
};

export default Home;
