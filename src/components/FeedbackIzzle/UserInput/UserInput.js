import React from "react";

export default function UserInput({ sendButton } = props) {
  return (
    <div
      className="typed-input"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <input id="contact" placeholder="From@"></input>
      <textarea
        name="feedbackizzle-text"
        id="feedbackizzle-text"
        cols="30"
        rows="3"
        placeholder="Be 🕶️"
      ></textarea>
      <button onClick={sendButton}>✉️</button>
    </div>
  );
}
