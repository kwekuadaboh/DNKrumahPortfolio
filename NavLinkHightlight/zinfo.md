const btn = document.getElementById("btn");

var quotes = [
{
name: "Kwame Nkrumah",
quote:
"I am not African because I was born in Africa but because Africa was born in me",
},
{
name: "Jurgen Klopp",
quote:
"It needs time. Nobody wants to hear it, but that's the truth: if you want to have success in the future, you have to be ready to work now",
},
{
name: "Aristotle",
quote: "The energy of the mind is the essence of life",
},
{
name: "Fyodor Dostoyevsky",
quote:
"The mystery of human existence lies not in just staying alive, but in finding something to live for",
},
{
name: "Jose Mourinho",
quote:
"It's not important how we play. If you have a Ferrari and I have a small car, to beat you in a race I have to break your wheel or put sugar in your tank",
},
{
name: "Kofi Annan",
quote:
"When women thrive all of society benefits and succeeding generations are given a better start in life",
},
];

function random(value) {
return Math.floor(Math.random() \* value);
}

function generateQuote() {
let quoteMsg = quotes[random(quotes.length)];
const blockQuoteText = document.querySelector(".blockquote-text");
blockQuoteText.textContent = quoteMsg.quote;

const authorName = document.getElementById("author-name");
authorName.textContent = quoteMsg.name;
const authorNameLength = quoteMsg.name.length;
console.log(authorNameLength);

let blockquoteAuthor = document.querySelector(".blockquote-author");

if (authorNameLength > 16) {
blockquoteAuthor.classList.remove("blockquote-author70");
blockquoteAuthor.classList.remove("blockquote-author80");
} else if (authorNameLength <= 10) {
blockquoteAuthor.classList.remove("blockquote-author70");
blockquoteAuthor.classList.add("blockquote-author80");
} else if (authorNameLength > 11) {
blockquoteAuthor.classList.remove("blockquote-author80");
blockquoteAuthor.classList.add("blockquote-author70");
}
}

btn.addEventListener("click", generateQuote);
