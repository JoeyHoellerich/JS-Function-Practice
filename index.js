const goFollow = () => {
    let answer = window.prompt("You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.")
    if (answer == "back"){
        goLeft();
    }
    if (answer == "stay"){

    }
    if (answer == "alert"){

    }
}

const goLeft = () => {
    let answer = window.prompt("You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it or continue on your path?")
    if (answer == "back"){
        start();
    }
    if (answer == "follow"){
        goFollow();
    }
    if (answer == "continue"){
        goContinue();
    }
}

const start = () => {
    let answer = window.prompt("Do you head left or right?")
    if (answer == "left"){
        goLeft();
    }
    if (answer == "right"){
        goRight();
    }
}

start();

