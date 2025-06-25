const quotes = [
  { quote: "I have not failed. I've just found 10", author: "Thomas Edison" },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
];

let index = 0;
let countdown = 6;

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const timer = document.getElementById("countdown");

quoteText.textContent = `“${quotes[index].quote}”`;
quoteAuthor.textContent = `— ${quotes[index].author}`;
timer.textContent = `Next in ${countdown}s`;

setInterval(() => {
  countdown--;
  timer.textContent = `Next in ${countdown}s`;

  if (countdown === 0) {
    index = (index + 1) % quotes.length;
    quoteText.textContent = `“${quotes[index].quote}”`;
    quoteAuthor.textContent = `— ${quotes[index].author}`;
    countdown = 5;
  }
}, 1000);
