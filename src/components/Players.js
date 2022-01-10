import { Link } from "react-router-dom";

const Players = ({ id }) => {
  return (
    <div>
      <Link to={`/player/${id}`}>
        <li>{id}</li>
      </Link>
    </div>
  );
};

export default Players;
