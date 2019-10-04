import React from "react";

export default function Emojis(props) {
  return (
    <div
      className="feedback-choices"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <div className="happy">😀</div>
      <div className="meh">😐</div>
      <div className="upset">😡</div>
    </div>
  );
}
