function quotes (){
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => getQote(data))
}

function getQote(quoteItem){
    const quotesElement = document.getElementById('jokes')
    quotesElement.innerText = quoteItem.quote;

}
document.getElementById('click').addEventListener('click', function(){
    quotes()
})