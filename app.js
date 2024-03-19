// elementima iz HTML-a pristupamo korišćenjem document.querySelector("CSS SELEKTOR")
// elementu dodeljujemo funkcije na određene radnje sa ELEMENT.addEventListener("DOGAĐAJ", function () { OPERACIJE } );

// funkcija za radnju takođe može da se dodeli iz HTML-a upotrebom npr. <button onclick="obracunaj();" >Obracunaj</button> JA VIŠE VOLIM OVAJ NAČIN (JEDNOSTAVNIJI JE)
// jedina razlika je što u JS se piše npr. "click", "mouseenter", "mouseleave" itd., a u HTML-u se dodaje on- pre te reči (npr. onclick, onmouseenter, onmouseleave)

// ako želimo da selektujemo više istih elemenata može npr. document.querySelectorAll(".neka-klasa"); DODAJE SE ALL

document.querySelector("button").addEventListener("click", function () {
  obracunaj();
});

function obracunaj() {
  // ELEMENT.value nam daje njegovu vrednost, bez value bi u promenljivu stavljali taj element
  const ukupno = parseFloat(document.querySelector("#ukupno").value);
  const meseci = parseInt(document.querySelector("#meseci").value);
  const kamata = parseFloat(document.querySelector("#kamata").value);
  let temp = ukupno / meseci;
  let suma = 0;
  for (let i = 0; i < meseci; i++) {
    // NEMAM POJMA DA LI SE OVAKO RAČUNA
    suma += temp;
    temp *= kamata / 100 + 1;
  }
  suma = suma / meseci;

  // menjanje sadržaja elementa se radi sa ELEMENT.innerHTML, ako hoćete samo tekstualni sadržaj elementa radi se ELEMENT.textContent
  // npr. za HTML <div> abc <p>...</p> </div>
  // upotreboj document.querySelector("div").innerHTML = ""; dobija se <div> </div>
  // a za document.querySelector("div").textContent = ""; dobija se <div> <p>...</p> </div>
  document.querySelector("h3").innerHTML = document.querySelector("#ime").value + " " + document.querySelector("#prezime").value + " " + document.querySelector("#datum").value + " iznos mesecne rate: " + suma;

  // u ovom primeru nije bitno, ali npr. ako traži: pretvori sav tekst nekog elementa u veliki možemo da uradimo
  // document.querySelector("div").innerHTML = document.querySelector("div").innerHTML.toUpperCase();
  // zapravo HTML bi tada izgledao <DIV> ABC <P>NEKI TEKST</P> </DIV> (BUKVALNO sav sadržaj postaje veliki).
}
