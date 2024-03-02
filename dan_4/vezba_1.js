// const forma = document.getElementById("form")
const forma = document.querySelector("form")
const inputUser = document.querySelector("#user")
const inputPass = document.querySelector("#pass")

const resetFields = () => {
    inputUser.style.borderColor = "#000"
    inputPass.style.borderColor = "#000"
}

forma.addEventListener("submit", (event) => {
    event.preventDefault()
    resetFields()
    if(inputUser.value === "") {
        inputUser.style.borderColor = "#f00"
        alert("Popunite user polje")
        return
    }
    
    if(inputPass.value === "") {
        inputPass.style.borderColor = "#f00"
        alert("Popunite pass polje")
        return
    }

    let osoba = {
        user: inputUser.value,
        pass: inputPass.value
    }

    console.log(osoba)
})