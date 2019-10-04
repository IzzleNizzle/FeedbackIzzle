import React from "react";
// import "./thought.less";
export default function Thoughts(props) {
  return (
    <div
      className="thoughts"
      onClick={e => {
        e.currentTarget.nextElementSibling.classList.toggle("expand");
        e.currentTarget.parentElement.classList.toggle("expand");
      }}
    >
      <span className="first">💬</span>
      <span className="second hidden">✔️🙏</span>
    </div>
  );
}
