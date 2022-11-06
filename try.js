const asd = document.getElementById('buttonJ');

function newDiv()
{
    const newDiv = document.createElement("div");
    newDiv.classList.add("div-shadow");
    document.body.appendChild(newDiv);
}

asd.addEventListener("click", newDiv);