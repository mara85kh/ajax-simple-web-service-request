let citeText = document.getElementById('quote');
let xhr = new XMLHttpRequest;

xhr.open('GET', 'https://thatsthespir.it/api', true);
xhr.onload = function() 
  {
    if (this.status === 200) {
      let cites = JSON.parse(this.responseText);
      console.log(cites);
      citeText.textContent = cites.quote;
      document.querySelector('h2').textContent = cites.author;

    } else {
      alert('Erreur!')
    }
  }
xhr.send();