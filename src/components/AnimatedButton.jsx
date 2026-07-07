import "./AnimatedButton.css";

function AnimatedButton({ text }) {
  return (
    <button className="animated-btn">
      {text}
    </button>
  );
}

export default AnimatedButton;