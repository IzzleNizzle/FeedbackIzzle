import React from "react";

export default function UserInput({ sendButton, contactName, feedbackBody } = props) {
  return (
    <div
      className="typed-input"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <input
        {...contactName}
        placeholder="From@">
      </input>
      <textarea
        cols="30"
        rows="3"
        placeholder="Be 🕶️"
        {...feedbackBody}
      ></textarea>
      <button onClick={sendButton}>✉️</button>
    </div>
  );
}
