import goldMedal from "../assets/images/goldmedal.png";
import silverMedal from "../assets/images/silvermedal.png";
import loserMedal from "../assets/images/pregnantwoman.png";

const SepantaTrophies = () => {
  return (
    <div className="m-3">
      <img src={silverMedal} alt="silver-medal" />
      <img src={goldMedal} alt="gold-medal" />
      <img src={silverMedal} alt="silver-medal" />
      <img src={loserMedal} alt="loser-medal" />
    </div>
  );
};

export default SepantaTrophies;
