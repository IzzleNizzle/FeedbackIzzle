import React, { useState, useEffect } from 'react'
import './index.css'

// Simple render like this;
export default function FeedbackIzzle() {
  const emojiChoices = ["happy", "meh", "mad"]
  const [feedback, setFeedback] = useState('')
  const $feedbackIzzle = () => document.querySelector(".feedbackizzle")
  const $emojis = () => document.querySelectorAll(".feedback-choices div")
  const $typeInput = () => document.querySelector(".feedbackizzle div.typed-input");

  useEffect(() => {
    $emojis().forEach((div, ind) => {
      div.setAttribute("data-emoji", emojiChoices[ind])
      div.addEventListener("click", function (e) {
        e.stopPropagation()
        $feedbackIzzle().classList.add("stage-2")
        $typeInput().classList.remove("hidden")
        setFeedback(this.getAttribute("data-emoji"))
      });
    });
  }, [])

  const sendButton = () => {
    $typeInput().classList.add("hidden")
    $feedbackIzzle().classList.remove("stage-2", "expand")
    $feedbackIzzle().classList.add("done")
    document.querySelector("div.thoughts span.first").classList.add("hidden")
    document.querySelector("div.thoughts span.second").classList.remove("hidden")
    const comment = document.getElementById("feedbackizzle-text").value
    const contact = document.getElementById("feedbackizzle-contact").value
    sendData({ feedback, comment, contact })
  }

  const sendData = (inp) => {
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
      .then(function (res) {

      });
  }

  return (
    <div
      className="feedbackizzle"
      onClick={(e) => {
        e.currentTarget.classList.toggle('expand')
      }}
    >
      <div className="feedbackizzle-position">
        <div className="feedbackizzle-style noselect">
          <div
            className="feedback-choices"
            onClick={(e) => {
              e.stopPropagation()
            }}>
            <div className="happy">😀</div>
            <div className="meh">😐</div>
            <div className="upset">😡</div>
          </div>
          <div
            className="typed-input hidden"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <textarea name="feedbackizzle-text" id="feedbackizzle-text" cols="30" rows="3" placeholder="Be 🕶️"></textarea>
            <input id="feedbackizzle-contact" placeholder='@'></input>
            <button onClick={sendButton}>Send</button>
          </div>
          <div className="thoughts"><span className='first'>💬</span><span className='second hidden'>✔️🙏</span></div>
        </div>
      </div>
    </div>
  );
}
