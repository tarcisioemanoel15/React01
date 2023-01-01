export default function Button({ onClick, play }) {

  return (
    <div className="btn">
      <button onClick={onClick}>
        {play ? "Play" : "Pause"}
      </button>
    </div>
  );
}

