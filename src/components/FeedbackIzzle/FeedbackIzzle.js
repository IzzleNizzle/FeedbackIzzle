import React, { useState, useEffect } from "react";
import Thoughts from "./Thoughts/Thoughts";
import Emojis from "./Emojis/Emojis";
import UserInput from "./UserInput/UserInput";
import "./index.less";

export default function FeedbackIzzle() {
  const emojiChoices = ["happy", "meh", "mad"];
  const [stageCount, setStageCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const $feedbackIzzle = () => document.querySelector(".feedbackizzle");
  const $emojis = () => document.querySelectorAll(".feedback-choices div");
  const $typeInput = () =>
    document.querySelector(".feedbackizzle div.typed-input");

  useEffect(() => {
    $emojis().forEach((div, ind) => {
      div.setAttribute("data-emoji", emojiChoices[ind]);
      div.addEventListener("click", function(e) {
        e.stopPropagation();
        $feedbackIzzle().classList.add("stage-2");
        $typeInput().classList.remove("hidden");
        setFeedback(this.getAttribute("data-emoji"));
      });
    });
  }, []);

  const sendButton = () => {
    $typeInput().classList.add("hidden");
    $feedbackIzzle().classList.remove("stage-2", "expand");
    $feedbackIzzle().classList.add("done");
    document.querySelector("div.thoughts span.first").classList.add("hidden");
    document
      .querySelector("div.thoughts span.second")
      .classList.remove("hidden");
    const comment = document.getElementById("feedbackizzle-text").value;
    const contact = document.getElementById("feedbackizzle-contact").value;
    sendData({ feedback, comment, contact });
  };

  const sendData = inp => {
    fetch(`https://intense-atoll-16720.herokuapp.com/api/feedbacks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inp)
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(res) {});
  };

  const test = () => console.log("test");

  return (
    <div className="containment">
      <Thoughts test={test} />
      <div className="feedbackizzle">
        <div className="feedbackizzle-position">
          <div className="feedbackizzle-style noselect">
            <Emojis />
            <UserInput sendButton={sendButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
