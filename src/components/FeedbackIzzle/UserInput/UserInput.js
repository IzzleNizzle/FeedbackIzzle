import React from "react";

export default function UserInput({ sendButton } = props) {
  return (
    <div
      className="typed-input hidden"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <textarea
        name="feedbackizzle-text"
        id="feedbackizzle-text"
        cols="30"
        rows="3"
        placeholder="Be 🕶️"
      ></textarea>
      <input id="feedbackizzle-contact" placeholder="@"></input>
      <button onClick={sendButton}>Send</button>
    </div>
  );
}
