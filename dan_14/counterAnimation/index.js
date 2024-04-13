const counterContainer = document.querySelector(".counter-display")

function counterAnimation(counter, rate, delay) {
    switch(counter) {
        case rate / 2:
            delay = 50
            break;
        case (rate / 4) * 3:
            delay = 100
            break;
    }

    counterContainer.textContent = counter + "+"
    
    if(counter == rate)
        return
    
    counter++

    setTimeout(() => {
        counterAnimation(counter , rate, delay)
    }, delay)
}

counterAnimation(0, 100, 20)