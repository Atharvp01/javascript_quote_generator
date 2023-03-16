const quoteArray = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
];

const quoteMaker = [
  "Oscar Wilde",
  "Marilyn Monroe",
  "Albert Einstein",
  "Frank Zappa",
  "Marcus Tullius Cicero",
  "Mae West",
  "Mahatma Gandhi",
  "Robert Frost",
];

let count = 1;

const nextQuote = () => {
  count++;
  if (count === quoteArray.length) count = 0;
  let quote = document.getElementById("quote");
  let philosopher = document.getElementById("philosopher");
  quote.innerText = quoteArray[count];
  philosopher.innerHTML = quoteMaker[count];
  console.log(count);
};
