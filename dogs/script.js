const ele = document.createElement("span")

document.querySelector("h1").append(ele)

document.querySelector("span").innerText = "(They're all good dogs!)"

ele.classList.add("underline")

const amberArticle = document.createElement("article")

const image = document.createElement("img")

image.setAttribute(
    "src",
    "https://placedog.net/500/450"
)

image.setAttribute(
    "alt",
    "Amber, the dog."
)

image.classList.add("animated")

const amberName = document.createElement("h2")

const amberDescriptionP = document.createElement("p")

document.querySelector("main").append(amberArticle)

document.querySelector("article").append(image)

document.querySelector("article").append(amberName)

document.querySelector("h2").innerText = "Amber"

document.querySelector("article").append(amberDescriptionP)

document.querySelector("p").innerText = "A sweet little doggo that belongs to my friend."
