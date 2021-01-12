// Update quote
newQuote()

function newQuote() {
  const quoteButton = document.getElementById('give-quote')
  document.addEventListener('DOMContentLoaded', function(){
  quoteButton.addEventListener("click", function(){

    const quotesDiv = document.getElementById('quotes')

    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(quote => {
        quotesDiv.innerHTML = `<p> ${quote.content} </p>`
      })
    })
  })
}

// Test for quote update
function mutate(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.target.innerText != "Once we accept our limits, we go beyond them.") {
      console.log("quote updated")
    }
  })
}

const target = document.getElementById('quotes')
const observer = new MutationObserver(mutate)
const config = { characterData: false, attributes: false, childList: true, subtree: false }

observer.observe(target, config)