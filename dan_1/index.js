// while n brojeva

// let i = 0
// let n = 50

// while(i < n) {
//     console.log(i)
//     i++
// }

// while n brojeva % 3

// let i = 0
// let n = 20

// while(i < n) {
//     if(i % 3 === 0)
//         console.log(i)
//     i++
// }

// f-ja ime, prezime, godine pozdrav

// const imeFunkcije = (parametri) => {

// }
// function imeFunkcije (parametri) {

// }

// const pozdravZaOsobu = (ime, prezime, godine) => {
//     console.log(`Pozdrav za ${ime} ${prezime} koja ima ${godine} godina.`)
//     // return `Pozdrav za ${ime} ${prezime} koja ima ${godine} godina.`
// }

// let osoba = {
//     ime: "Marko",
//     prezime: "Markovic",
//     godine: 30,
// }

// pozdravZaOsobu(osoba.ime, osoba.prezime, osoba.godine)

// sr vrednost arr

// const niz = [10, 200, 1, 14, 3, 78]
// let zbir = 0

// for(let i = 0; i < niz.length; i++) {
//     zbir += niz[i]
// }

// console.log(`Srednja vrednost niza je: ${zbir / niz.length}`)
    
// f-ja brojac jednocifrenih
    
// const niz = [10, 200, 1, 14, 3, 78]
// let brojac = 0 

// for(let i = 0; i < niz.length; i++) {
//     if(niz[i] < 10)
//         brojac++
// }

// if(brojac !== 0)
//     console.log(`U nizu postoji ${brojac} jednocifrenih elemenata.`)
// else 
//     console.log(`U nizu ne postoje jednocifreni elementi.`)

// switch meseci broj dana

// let danaUMesecu = 31

// switch(danaUMesecu) {
//     case 31:
//         console.log('januar', 'mart', 'maj', 'jul', 'avgust', 'oktobar', 'decembar')
//         break
//     case 30:
//         console.log('april', 'jun', 'septembar', 'novembar')
//         break
//     case 28:
//     case 29:
//         console.log('februar')
//         break
//     default:
//         console.log('Ne postoji mesec sa navedenim brojem dana.')   
//         break
// }

// od m do n % 5

// let m = 10
// let n = 28

// for(let i = m; i < n; i++) {
//     if(i % 5 === 0)
//         console.log(i)
// }

// f-ja razmaci u stringu.

// const spaceCounter = (str) => {
//     let cnt = 0
//     for(let i = 0; i < str.length; i++) {
//         if(str.charAt(i) === " ")
//             cnt++
//     }
//     return cnt
// }

// let str = "Lorem ipsum dolor sit amet."
// let cntNumber = spaceCounter(str)
// console.log(`U stringu postoji ${cntNumber} razmaka.`)

