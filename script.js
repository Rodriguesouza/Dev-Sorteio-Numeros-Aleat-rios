const button = document.querySelector(".button-draw")

button.addEventListener('click', function () {
    const numbermin = parseInt(document.querySelector(".min-number").value);
    const numbermax = parseInt(document.querySelector(".max-number").value);


    let result = Math.floor(Math.random() * (numbermax - numbermin + 1)) + numbermin

    document.querySelector("#result > span").textContent = result

});




