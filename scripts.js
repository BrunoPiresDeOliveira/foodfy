const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener("click", function(){
        const title = recipe.getAttribute("id")
        const img = recipe.querySelector("img").src
        const chef = recipe.querySelector("p").innerText
        modalOverlay.querySelector('img').src = img
        modalOverlay.querySelector('h3').textContent = title
        modalOverlay.querySelector("p").textContent = chef
        modalOverlay.classList.add('active')
    })
}