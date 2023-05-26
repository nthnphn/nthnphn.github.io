var circles = document.getElementsByClassName("musicCircles");

// Create the 8 different circles
for(var circle of circles) {

    // start all circles in the middle of the screen
    var circleStartPos = [`${50}%`, `${50}%`];
    circle.style.left = circleStartPos[0];
    circle.style.top = circleStartPos[1]; 

    //makes the circles move
    animateCircles(circle, circleStartPos)
}

// creates different random x and y positions
function newPosition() {
    var randomX = `${Math.random() * 100}%`;
    var randomY = `${Math.random() * 100}%`;
    return [randomX, randomY]
}

//function to animate circles
function animateCircles(elementToAnimate, endPos) {

    // random x and y coordinates are given
    var randomPos = newPosition();

    // makes the circle move from where they end
    var startPos = endPos;

    // makes circles move randomly between 2 and 4 seconds
    var randomTime = 2000 + (Math.random() * 2000)
    elementToAnimate.animate([
        { //0%
            left: startPos[0], 
            top: startPos[1]
        },
        { //100%
            left: randomPos[0], 
            top: randomPos[1]
        }
                
        // recalls animateCircles function when it is completed
        ], randomTime).onfinish = function() {
            animateCircles(elementToAnimate, randomPos);
        }

    // add event listener playSound to all circles
    let audioElementList = Array.from(document.getElementsByClassName("musicCircles"));
    for (const audioElement of audioElementList) {
        audioElement.addEventListener("mouseenter", playSound);
    }

    // plays sound when mouse enters the circle
    function playSound(e) {

        // differentiates circles with their different id's
        console.log(e.target.dataset.audioid);
        let audioElement = document.getElementById(e.target.dataset.audioid);
        audioElement.play();
        console.log(audioElement);
    }
}

