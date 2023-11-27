import goldMedal from "../assets/images/goldmedal.png";
import silverMedal from "../assets/images/silvermedal.png";
import loserMedal from "../assets/images/pregnantwoman.png";

const AminTrophies = () => {
  return (
    <div className="m-3">
      <img src={goldMedal} alt="gold-medal" />
      <img src={loserMedal} alt="loser-medal" />
      <img src={goldMedal} alt="gold-medal" />
      <img src={goldMedal} alt="gold-medal" />
    </div>
  );
};

export default AminTrophies;
