const ele = document.createElement("span")

document.querySelector("h1").append(ele)

ele.innerText = "(They're all good dogs!)"

ele.classList.add("underline")

// const amberArticle = document.createElement("article")

// const amberImage = document.createElement("img")

// amberImage.setAttribute(
//     "src",
//     "https://placedog.net/500/450"
// )

// amberImage.setAttribute(
//     "alt",
//     "Amber, the dog."
// )

// amberImage.classList.add("animated")

// const amberName = document.createElement("h2")

// const amberDescriptionP = document.createElement("p")

// document.querySelector("main").append(amberArticle)

// document.querySelector("article").append(amberImage)

// document.querySelector("article").append(amberName)

// document.querySelector("h2").innerText = "Amber"

// document.querySelector("article").append(amberDescriptionP)

// document.querySelector("p").innerText = "A sweet little doggo that belongs to my friend."

// const butterArticle = document.createElement("article")

// const butterImage = document.createElement("img")

// butterImage.setAttribute(
//     "src",
//     "https://placedog.net/500/440"
// )

// butterImage.setAttribute(
//     "alt",
//     "Butter, the dog."
// )

// butterImage.classList.add("animated")

// butterArticle.classList.add("featured")

// const butterName = document.createElement("h2")

// const butterDescriptionP = document.createElement("p")

// document.querySelector("main").append(butterArticle)

// document.querySelector(".featured").append(butterImage)

// document.querySelector(".featured").append(butterName)

// document.querySelector(".featured h2").innerText = "Butter"

// document.querySelector(".featured").append(butterDescriptionP)

// document.querySelector(".featured p").innerText = "Man's best friend."

const dogs = [
    {
      name: "Amber",
      description: "A sweet little doggo that belongs to my friend.",
      imageNum: 450,
      featured: false,
    },
    {
        name: "Butter",
        description: "Man's best friend.",
        imageNum: 441,
        featured: true,
    },
    {
        name: "Rocky",
        description: "Dislike cats, love to chase squirrels.",
        imageNum: 442,
        featured: true,
    },
  ];


function addDogs(arr) {
    for (let dog of arr) {
        const article = document.createElement("article")

        const image = document.createElement("img")

        image.setAttribute(
            "src",
            `https://placedog.net/500/${dog.imageNum}`
        )
        image.setAttribute(
            "alt",
            `${dog.name}, the dog.`
        )
        const name = document.createElement("h2")

        const description = document.createElement("p")

        document.querySelector("main").append(article)

        article.append(image)

        article.append(name)

        name.innerText = dog.name

        article.append(description)

        description.innerText = dog.description

        if (dog.featured) {
            article.classList.add("featured")
        }
    }
}

addDogs(dogs)