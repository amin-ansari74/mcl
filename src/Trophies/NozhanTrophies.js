import goldMedal from "../assets/images/goldmedal.png";
import silverMedal from "../assets/images/silvermedal.png";
import loserMedal from "../assets/images/pregnantwoman.png";

const NozhanTrophies = () => {
  return (
    <div className="m-3">
      <img src={silverMedal} alt="silver-medal" />
      <img src={loserMedal} alt="loser-medal" />
      <img src={silverMedal} alt="silver-medal" />
    </div>
  );
};

export default NozhanTrophies;
