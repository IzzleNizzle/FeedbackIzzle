import React from "react";
// import "./thought.less";
export default function Thoughts({
  stageCount,
  nextStage,
  resetStage
} = props) {
  const options = ["🙋💬", "✖️", "✔️🙏"];
  return (
    <div
      className="thoughts"
      onClick={e => {
        stageCount === 0 ? nextStage() : resetStage();
        e.currentTarget.nextElementSibling.classList.toggle("expand");
        e.currentTarget.parentElement.classList.toggle("expand");
      }}
    >
      <span className="first">{options[stageCount]}</span>
    </div>
  );
}
