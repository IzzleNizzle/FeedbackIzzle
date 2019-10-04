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

  const nextStage = () => {
    console.log("fired");

    setStageCount(stageCount + 1);
  };

  const resetStage = () => {
    setStageCount(0);
  };

  return (
    <div className={`containment stage-${stageCount}`}>
      <Thoughts
        nextStage={nextStage}
        stageCount={stageCount}
        resetStage={resetStage}
      />
      <div className="feedbackizzle">
        <div className="feedbackizzle-position">
          <div className="feedbackizzle-style noselect">
            <Emojis
              nextStage={nextStage}
              stageCount={stageCount}
              setFeedback={setFeedback}
            />
            <UserInput sendButton={sendButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
