const fs = require("fs");

const greetings = [
  "Hi there!",
  "Hey everyone!",
  "Welcome!",
  "What’s up!",
  "Hello, friend!",
  "Hey there, world!",
  "Hello, and welcome!",
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const readmePath = "./README.md";

fs.readFile(readmePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the README file:", err);
    return;
  }

  const greetingRegex =
    /Hello there!|Hi there!|Hey everyone!|Welcome!|What’s up!|Hello, friend!|Hey there, world!|Hello, and welcome!/g;

  const updatedData = data.replace(greetingRegex, randomGreeting);

  fs.writeFile(readmePath, updatedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the README file:", err);
      return;
    }
    console.log("README updated successfully with:", randomGreeting);
  });
});
