const quoteBox = document.getElementById("quotes");

const quotes = [
  {
    quote: "One day or day one, It’s your choice.",
    author: "Paulo Coelho",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote:
      "Great things are not done by impulse, but by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Most people are about as happy as they make up their minds to be.",
    author: "Abraham Lincoln",
  },
  {
    quote: "You are never old to set another goal or to dream a new dream.",
    author: "C. S. Lewis",
  },
  {
    quote:
      "The regret after not doing something is bigger than that of doing something.",
    author: "Paul Arden",
  },
  {
    quote:
      "Start by doing what’s necessary, then what’s possible, and suddenly you are doing the impossible.",
    author: "Saint Francis Assisi",
  },
  {
    quote:
      "As a well-spent day brings happy sleep, so life well used brings happy death.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "Once we know our own weaknesses they cease to do us any harm.",
    author: "Georg C. Lichtenberg",
  },
];
const randomNum = Math.floor(Math.random() * quotes.length);
const quote = `${quotes[randomNum].quote} - ${quotes[randomNum].author}`;

quoteBox.innerText = quote;
