/* PROJECT 1 */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function getRandom() {
    return Math.floor(Math.random() * hex.length)
}

const color = document.querySelector('#color')
const button = document.querySelector('#btn')

button.addEventListener('click', function () {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += hex[getRandom()]
    }
    document.body.style.backgroundColor = hexCode;
    color.innerText = hexCode;
})

/* PROJECT 2 */
// const decrease = document.querySelector('#decrease');
// const reset = document.querySelector('#reset');
// const increase = document.querySelector('#increase');
const p = document.querySelector('.count')


// increase.addEventListener('click', function () {
//     plus()
// })

// decrease.addEventListener('click', function () {
//     minus()
// })
// reset.addEventListener('click', function () {
//     p.innerText = 0;
//     p.style.color = 'black'
// })

/* Alternative project 2 */
let count = 0
const btnS = document.querySelectorAll('button')
btnS.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let styles = e.currentTarget.classList;
        if (styles.contains('minus')) {
            count--;
        } else if (styles.contains('plus')) {
            count++;
        } else {
            count = 0
        }
        setColor(count)
        p.textContent = count;
    })
})

/* project 3 */

/* for surprise me button */
const reviews = [{
        id: 1,
        name: 'John anderson',
        title: 'UX DESIGNER',
        img: "https://cdn.pixabay.com/photo/2020/07/01/01/23/father-5358083_960_720.jpg",
        text: "Is ellökött ugassátok helyem gyerek áll vadon gyerek viselők.S nők kivül mondjátok mondjátok alatt.Ti az fáj szerelemben hegyét.Por devis plu kaj la alproksimigxis tiam gxi cxar la."
    },
    {
        id: 2,
        name: 'Emma Smith',
        title: 'GRAPHICS DESIGNER',
        img: "https://cdn.pixabay.com/photo/2020/07/21/10/52/girl-5425872_960_720.jpg",
        text: 'This lenore rare and suddenly purple let the on. Above door then plutonian then heart tapping with, is nevermore visiter thing i my. I quoth nevermore beating plume there my,.'
    },
    {
        id: 3,
        name: 'Monica Geller',
        title: 'MARKETING',
        img: "https://cdn.pixabay.com/photo/2020/07/22/09/11/frog-5428516_960_720.jpg",
        text: 'Della novellare manifesta transitorie noi essilio esperienza non, ripararci nostra fu al uomini di quale, se mente di alla essilio, cosí desse fa furono in son i. Etterno nostra durare.'
    },
    {
        id: 4,
        name: 'Rachel Green',
        title: 'BUSINESS ANALYST',
        img: "https://cdn.pixabay.com/photo/2020/07/15/12/42/flowers-5407571_960_720.jpg",
        text: 'Besitze das ihr verschwand unbekannten schwankende es, mir sich wahn folgenden es alten nennt glück. Zu der mein gesänge verschwand. Nach steigen vom geisterreich wahn sehnen strenge.'
    }
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const randomBtn = document.getElementById('random');
const backBtn = document.querySelector('.back');
const forthBtn = document.querySelector('.forth')

//set starting item
let currentItem = 0;

//load initial item on page load
window.addEventListener('DOMContentLoaded', function (e) {
    showPerson()
})

//next item
forthBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson()
})

//previous item
backBtn.addEventListener('click', function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
})

//random button
randomBtn.addEventListener('click', function () {
    currentItem = randomNum()
    showPerson()
})