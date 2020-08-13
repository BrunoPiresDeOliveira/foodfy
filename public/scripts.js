const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener("click", function(){
        const recipeId = recipe.getAttribute("id");
        window.location.href=`/receitas/${recipeId}`
    })
}

// ====================================RECIPE====================================

const details = document.querySelectorAll('.detail')
const buttons = document.querySelectorAll('.button')

for (let [i,button] of buttons.entries()) {

    button.addEventListener('click', () => {

        if(details[i].classList.contains('hide')) {
            details[i].classList.remove('hide')
            details[i].classList.add('show')
            button.innerHTML = "ESCONDER"

        } else {
            details[i].classList.add('hide')
            details[i].classList.remove('show')
            button.innerHTML="MOSTRAR"
        }
    })
}