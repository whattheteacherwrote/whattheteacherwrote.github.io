/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
  const form = document.querySelector("#substitutionForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let inputText = document.querySelector("#inputText").value;
  // Sanitize the input
  inputText = inputText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Validate the input
  if (!inputText.trim()) {
    alert("Input text cannot be empty!");
    return;
  }
  let outputText = inputText;
  
  const substitutions = {
    "Hello,": "Damn it!",
    "Sincerely,": "I'm so frustrated,",
    "reluctant to learn": "lazy",
    "leadership skills": "being bossy",
    "tardy": "messing with friends in the hall",
    "interrupting class": "acting a fool and making my life harder",
    "socializing": "talking too much and interrupt the learning process",
    "telling stories": "lying",
    "told a story": "told a lie",
    "off-task": "messing around",
    "off task": "messing around",
    "struggling with behavior": "being rude and making everyone's life awful",
    // Add more substitutions here
  };

Object.keys(substitutions).forEach(oldText => {
    const newText = substitutions[oldText];
    const regExp = new RegExp(oldText, 'gi');
    outputText = outputText.replace(regExp, newText);
  });
  // Sanitize the output
  outputText = outputText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  document.querySelector("#outputText").innerHTML = outputText;
});
