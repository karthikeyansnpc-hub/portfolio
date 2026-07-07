import "./SkillCard.css";

function SkillCard({ image, name }) {
  return (
    <div className="skill-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>
    </div>
  );
}

export default SkillCard;