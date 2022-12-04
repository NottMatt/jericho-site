const quoteSlate = document.querySelector(".quote");

fetch("../resources/quotes.txt", { 
    method: 'GET'
})
    .then(function(response) { return response.text(); })
    .then(function(quoteFile) {
        var quotes = quoteFile.split(/\r?\n/);
        var item = quotes[Math.floor(Math.random()*quotes.length)];
        quoteSlate.textContent = item;
});