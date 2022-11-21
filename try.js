const asd = document.getElementById('buttonJ');

function newDiv()
{
    const newDiv = document.createElement("div");
    const frm = document.createElement("form");
    const inpt = document.createElement("input" );
    newDiv.classList.add("div-shadow");
    document.body.appendChild(newDiv);
    newDiv.appendChild(frm);
    newDiv.appendChild(inpt);
}

asd.addEventListener("click", newDiv);