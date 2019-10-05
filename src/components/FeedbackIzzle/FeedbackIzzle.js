import React, { useState, useEffect } from "react";
import Thoughts from "./Thoughts/Thoughts";
import Emojis from "./Emojis/Emojis";
import UserInput from "./UserInput/UserInput";
import "./index.less";
import useFormInput from "../../hooks/useFormInput"

export default function FeedbackIzzle() {
  const contactName = useFormInput('')
  const feedbackBody = useFormInput('')
  const [stageCount, setStageCount] = useState(0);
  const [feedback, setFeedback] = useState("");


  const sendButton = () => {
    const { value: contact } = contactName
    const { value: body } = feedbackBody
    console.log('====================================');
    console.log({
      contact, body, feedback
    });
    console.log('====================================');
    stageCount === 2 ? nextStage() : null

  };

  const sendData = inp => {
    fetch(`https://intense-atoll-16720.herokuapp.com/api/feedbacks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inp)
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (res) { });
  };

  const nextStage = () => {
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
            <UserInput
              sendButton={sendButton}
              contactName={contactName}
              feedbackBody={feedbackBody}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
