import React from "react";

export default function Emojis({ stageCount, nextStage, setFeedback } = props) {
  const options = ["😀", "😐", "😡"];
  return (
    <div
      className="feedback-choices"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {options.map((emoji, ind) => (
        <div
          key={ind}
          onClick={() => {
            stageCount === 1 ? nextStage() : null;
            setFeedback(ind);
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}
