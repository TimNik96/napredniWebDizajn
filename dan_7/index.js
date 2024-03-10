// getting elements

// document.body
// document.getElementById("nazivID")
// document.querySelector("div p")
// document.querySelectorAll("div p")
// document.getElementsByClassName("mojaKlasa")
// document.getElementsByTagName("div")

// styling

// const div = document.querySelector("div")
// div.style.color = "#000" // boja teksta crna
// div.style.backgroundColor = "#fff" // boja pozadine bela

// content manipulation

// const p = document.querySelector("p")
// p.textContent = `<span class="proba">Test</span> u JS.`
// p.innerText = ""
// p.innerHTML = `<span class="proba">Test</span> u JS.`

// const span = document.createElement("span")
// span.textContent = "Test"
// span.classList.add("proba")

// p.appendChild(span)

// element creation

// const newP = document.createElement("p")
// newP.textContent = "Pozdrav iz JS"

// appending elements

// const body = document.body
// body.appendChild(newP)
// body.append(newP, nesto, nesto2)

// class addition

// span.classList.add("proba")
// span.classList.remove("proba")

// id addition

// span.id = "mojID"

// event listeners
// click, submit, focusin, focusout, mousein, mouseout

// const button = document.createElement("button")
// button.addEventListener("click", () => {
//     //logika
// })

// const forma = document.createElement("form")
// forma.addEventListener("submit", (event) => {
//     event.preventDefault()

//     // logika cekiranja forme
// })

// - Napraviti dva input polja i dugme za pokretanje akcije
//   Potrebno je uneti dva broja i sabrati ih na klik dugmeta. 
//   Resenje prikazati u paragrafu.

// const inputBroj1 = document.createElement("input")
// inputBroj1.type = "text"
// inputBroj1.style.display = "block"
// const inputBroj2 = document.createElement("input")
// inputBroj2.type = "text"
// inputBroj2.style.display = "block"
// inputBroj2.style.margin = "1rem 0"
// const button = document.createElement("button")
// button.textContent = "Saberi"
// button.style.display = "block"
// const pRezultat = document.createElement("p")

// document.body.append(inputBroj1, inputBroj2, button, pRezultat)

// button.addEventListener("click", () => {
//     const rezultat = +inputBroj1.value + parseInt(inputBroj2.value)
//     pRezultat.textContent = `Rezultat sabiranja je: ${rezultat}`
// })

// 1. Dohvatiti sve paragrafe sa stranice i promeniti im boju teksta.

// const arrP = document.querySelectorAll("p")

// for(let i = 0; i < arrP.length; i++) {
//     arrP[i].style.color = "#f00"
// }

// 2. Ofarbati crveno parne, a plavo neparne indekse paragrafa na stranici.

// const arrP = document.querySelectorAll("p")

// for(let i = 0; i < arrP.length; i++) {
//     if(i % 2 === 0) {
//         arrP[i].style.color = "#00f"
//     } else {
//         arrP[i].style.color = "#f00"
//     }
// }

// 3. Kreirati n paragrafa na osnovu inputa korisnika
const inputBrojParagrafa = document.querySelector("input")
const button = document.querySelector("button")

AOS.init()

button.addEventListener("click", () => {
    if(inputBrojParagrafa.value.trim() === "") {
        alert("Morate uneti broj paragrafa veci od 0!")
        return
    }

    for(let i = 0; i < +inputBrojParagrafa.value; i++) {
        const p = document.createElement("p")
        p.textContent = "Pozdrav Svete!"
        document.body.appendChild(p)
    }
})



