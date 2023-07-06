/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
{
quote: "Change your thoughts and you change your world.",
source: "Norman Vincent Peale",
},
{
  quote: "It is those we live with and love and should know who elude us.",
  source: "Norman Maclean",
  citation: "A river runs through it",
},
{
  quote: "That's one small step for a man, one giant leap for mankind.",
  source: "Neil Armstrong",
  year: "1969"
},
{
  quote: "Son, when the Marine Corps wants you to have a wife, you will be issued one.",
  source: "Chesty Puller"
},
{
  quote: "I always win Jack, one way or another!",
  source: "Caledon Hockley",
  citation: "RMS Titanic",
  year: "1912"
},
{
  quote: "Never believe what you read on the internet just because there is a picture with a quote next to it.",
  source: "President Abraham Lincoln",
  year: "1864"
},
{
  quote: "Be bitter, stay angry, and blame everyone!",
  source: "Axl Rose"
},
{
  quote: "You ever been to a caucus?... No you haven't. You're a lying dog-faced pony soldier.",
  source: "President Joe Biden"
},
{
  quote: "We're rounding 'em up in a very humane way, in a very nice way. And they're going to be happy because they want to be legalized. And, by the way, I know it doesn't sound nice. But not everything is nice.",
  source: "President Donald Trump",
  citation: "60 Minutes",
  year: "2018"
}
]

// console.log(quotes)




/***
 * `getRandomQuote` function
***/
//I will need to place a math.floor variable beginning with zero through 4 because i have 5 index positions. I can put this inside the function. 

const getRandomQuote = (quotes) => {
  
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
let math = Math.floor(Math.random() * quotes.length)
let randomNumber = quotes[math]
  
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  const randomQuote = randomNumber

  // 3. Return the variable storing the random quote object

  return randomQuote
}


//  * `printQuote` function
// ***/
// 1. Create a variable that calls the getRandomQuote() 
  // function




const printQuote = () => {
  let randomQuote = getRandomQuote(quotes)
  // let html = document.getElementById("quote-box").innerHTML
  let htmlQuote = `<p class="quote">${randomQuote.quote}</p>`
  let htmlSource = `<p class="source">${randomQuote.source}`
  let html = htmlQuote + htmlSource

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
    if ( randomQuote.citation ) {
      html += `<span class='citation'>${randomQuote.citation}</span>`
    }
    if ( randomQuote.year ) {
      html += `<span class='year'>${randomQuote.year}</span>`
    }
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string

  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the
  // complete HTML string
  html += '</p>'
    return document.getElementById("quote-box").innerHTML = html
 }

  setInterval(printQuote, 7000)
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);