/* Project 2 function */
function plus() {
    let value = parseFloat(p.innerHTML)
    value += 1;
    p.innerHTML = value;
    setColor(value)
}

function minus() {
    let value = parseFloat(p.innerHTML)
    value -= 1;
    p.innerHTML = value;
    setColor(value)
}

function setColor(input) {
    if (input > 0) {
        p.style.color = 'green'
    } else if (input < 0) {
        p.style.color = 'red'
    } else {
        p.style.color = 'black'
    }
}

/* project 3 function */
function randomNum() {
    return Math.floor(Math.random() * reviews.length)
}

function showPerson() {
    let item = reviews[currentItem];
    img.src = item.img
    author.innerText = item.name;
    job.innerText = item.title;
    info.innerText = item.text;
}

/* project 5 function */
function breathAnimation() {
    relaxText.innerText = 'Breath In!';
    circleBox.className = 'circle-box grow';
    setTimeout(() => {
        relaxText.innerText = 'Hold';

        setTimeout(() => {
            relaxText.innerText = 'Breath Out!';
            circleBox.className = 'circle-box shrink';
        }, holdTime)
    }, breathTime)
}
breathAnimation()