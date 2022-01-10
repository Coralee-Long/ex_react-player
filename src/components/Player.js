import { useParams } from "react-router-dom";
import data from "../Data";
import ReactPlayer from "react-player";

const Player = () => {
  const { id } = useParams();
  const video = data.filter((element) => element.id === parseInt(id));

  return (
    <div>
      <ReactPlayer height="360px" width="640px" controls url={video[0].url} />
    </div>
  );
};

export default Player;
