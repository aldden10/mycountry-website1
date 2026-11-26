"use strict";

const feedbackForm = document.querySelector("#feedback-form");
const statusMessage = document.querySelector("#form-status");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#visitor-name").value.trim();
    const topic = document.querySelector("#visitor-topic").value;
    const message = document.querySelector("#visitor-message").value.trim();

    if (!topic || !message) {
        statusMessage.textContent = "Please choose a topic and write your feedback.";
        return;
    }

    statusMessage.textContent = (name ? "Thank you, " + name + "! " : "Thank you! ") +
        "You chose " + topic + ". Your feedback: " + message;
});
