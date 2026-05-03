import "./JokeCard.css";

function JokeCard({ joke }) {
  return (
    <div className="joke-card">
      <p>{joke}</p>
    </div>
  );
}

export default JokeCard;