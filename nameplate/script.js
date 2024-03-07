console.log("Just testing...");

const h1 = document.querySelector("h1")

// console.log(h1)

// const emojis = document.querySelectorAll(".emoji")

// for (let emoji of emojis) {
//     h1.removeChild(emoji)
// }

const secondEmoji = document.querySelector(".emoji").nextElementSibling

h1.removeChild(secondEmoji)

const para = document.querySelector("p")

const birthday = document.querySelector(".label").nextSibling

para.removeChild(birthday)