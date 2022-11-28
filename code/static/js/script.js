var textButton;
var yesnoButton;
var scaleButton;
var chooseButton;
var chooseManyButton;
var counter = 0;
var questionList = [];

window.onload = (event) => {
    textButton = document.getElementById('textButton');
    yesnoButton = document.getElementById('yesnoButton');
    scaleButton = document.getElementById('scaleButton');
    chooseButton = document.getElementById('chooseButton');
    chooseManyButton = document.getElementById('chooseManyButton');

    textButton.addEventListener("click", function(){newQuestion("text")});
    yesnoButton.addEventListener("click", function(){newQuestion("yesno")});
    scaleButton.addEventListener("click", function(){newQuestion("scale")});
    chooseButton.addEventListener("click", function(){newChoose("choose")});
    chooseManyButton.addEventListener("click", function(){newChoose("chooseMany")});
}



function newQuestion(type)
{
    const newDiv = document.createElement("div");
    newDiv.classList.add("div-shadow");
    newDiv.setAttribute("id", "question_"+counter);
    document.body.appendChild(newDiv);
    var label = document.createElement("label");
    label.innerHTML = (counter+1)+". Kérdés:";
    switch(type){
        case "text": label.innerHTML +=" (szöveges)"; break;
        case "yesno": label.innerHTML +=" (igen-nem)"; break; 
        case "scale": label.innerHTML +=" (0-10)"; break;  
    }
    var question = document.createElement("input");
    question.setAttribute("type", "text");
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Törlés";
    deleteButton.onclick = () =>{
        document.body.removeChild(newDiv);
        question.remove(newDiv);
    }
    newDiv.appendChild(label);
    newDiv.appendChild(newBr());
    newDiv.appendChild(question);
    newDiv.appendChild(deleteButton);
    newDiv.setAttribute("class", type);
    counter++;

    questionList.push(newDiv);
}

function newChoose(type){
    var label = document.createElement("label");
    label.innerHTML = (counter+1)+". Kérdés:";
    var addButton = document.createElement("button");
    addButton.innerHTML = "+";
    addButton.onclick = () =>{
        var newForm = document.createElement("form");
        var newOption = document.createElement("input");
        newOption.setAttribute("type","text");
        var optionDel = document.createElement("button");
        optionDel.innerHTML = "-";
        optionDel.onclick = () => {
            newDiv.removeChild(newForm);
        }
        newForm.appendChild(newOption);
        newForm.appendChild(optionDel);
        newForm.appendChild(newBr());
        newDiv.appendChild(newForm);
    }
    if(type == "choose"){
        label.innerHTML += " (választás)";
    }
    else if(type == "chooseMany"){
        label.innerHTML += " (több választás)";
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("div-shadow");
    newDiv.setAttribute("id", "question_"+counter);
    document.body.appendChild(newDiv);
    
    var question = document.createElement("input");
    question.setAttribute("type", "text");
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Törlés";
    deleteButton.onclick = () =>{
        document.body.removeChild(newDiv);
        question.remove(newDiv);
    }

    newDiv.appendChild(label);
    newDiv.appendChild(newBr());
    newDiv.appendChild(question);
    newDiv.appendChild(deleteButton);
    newDiv.appendChild(addButton);
    newDiv.appendChild(newBr());
    newDiv.setAttribute("class", type);
    counter++;

    questionList.push(newDiv);

}
function newBr(){
    return document.createElement("br");
}

/*function newYesno()
{
    const newDiv = document.createElement("div");
    newDiv.classList.add("div-shadow");
    newDiv.setAttribute("id", "question_"+counter);
    document.body.appendChild(newDiv);
    var question = document.createElement("input");
    question.setAttribute("type", "yesno");
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Törlés";
    deleteButton.onclick = () =>{
        document.body.removeChild(newDiv);
        question.remove(newDiv);
    }
    newDiv.appendChild(question);
    newDiv.appendChild(deleteButton);
    newDiv.setAttribute("class", "text");
    var newForm = document.createElement("form");
    var yes = document.createElement("input");
    yes.setAttribute("type","radio");
    yes.setAttribute("name","question_"+counter);
    yes.setAttribute("value","Igen");
    yes.setAttribute("id","yes_"+counter);
    var no = document.createElement("input");
    no.setAttribute("type","radio");
    no.setAttribute("name","question_"+counter);
    no.setAttribute("value","Nem");
    no.setAttribute("id","no_"+counter);

    var yesLabel = document.createElement("label");
    yesLabel.setAttribute("for","yes_"+counter);
    yesLabel.innerHTML = "Igen";
    var noLabel = document.createElement("label");
    noLabel.setAttribute("for","no_"+counter);
    noLabel.innerHTML = "No";
    
    newForm.appendChild(yes);
    newForm.appendChild(yesLabel);
    newForm.appendChild(br);
    newForm.appendChild(no);
    newForm.appendChild(noLabel);
    newForm.appendChild(br);
    newDiv.appendChild(newForm);

    counter++;

    questionList.push(newDiv);
}*/

function fu() {
    var opened = window.open("");
    opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
  }