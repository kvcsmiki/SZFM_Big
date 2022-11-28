var textButton;
var yesnoButton;
var scaleButton;
var chooseButton;
var chooseManyButton;
var saveForm;
var counter = 0;
var questionList = [];

window.onload = (event) => {
    textButton = document.getElementById('textButton');
    yesnoButton = document.getElementById('yesnoButton');
    scaleButton = document.getElementById('scaleButton');
    chooseButton = document.getElementById('chooseButton');
    chooseManyButton = document.getElementById('chooseManyButton');
    saveForm = document.getElementById("saveForm");

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
    saveForm.appendChild(newDiv);
    var label = document.createElement("label");
    label.innerHTML = (counter+1)+". Kérdés:";
    switch(type){
        case "text": label.innerHTML +=" (szöveges)"; break;
        case "yesno": label.innerHTML +=" (igen-nem)"; break; 
        case "scale": label.innerHTML +=" (0-10)"; break;  
    }
    var question = document.createElement("input");
    question.setAttribute("type", "text");
    question.setAttribute("name","question_"+counter+"_question")
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Törlés";
    deleteButton.onclick = () =>{
        saveForm.removeChild(newDiv);
        question.remove(newDiv);
    }
    deleteButton.setAttribute("type","button")
    newDiv.appendChild(label);
    newDiv.appendChild(newBr());
    newDiv.appendChild(question);
    newDiv.appendChild(deleteButton);
    newDiv.setAttribute("class", type);
    counter++;

    questionList.push(newDiv);
}

function newChoose(type){
    var optionCounter = 0;
    var questionID = counter;
    var label = document.createElement("label");
    label.innerHTML = (counter+1)+". Kérdés:";
    var addButton = document.createElement("button");
    addButton.innerHTML = "+";
    addButton.onclick = () =>{
        var newForm = document.createElement("div");
        var newOption = document.createElement("input");
        newOption.setAttribute("type","text");
        newOption.setAttribute("name","question_"+questionID+"_option_"+optionCounter);
        var optionDel = document.createElement("button");
        optionDel.innerHTML = "-";
        optionDel.onclick = () => {
            newDiv.removeChild(newForm);
            optionCounter--;
        }
        optionDel.setAttribute("type","button");
        newForm.appendChild(newOption);
        newForm.appendChild(optionDel);
        newForm.appendChild(newBr());
        newDiv.appendChild(newForm);
        optionCounter++;
    }
    addButton.setAttribute("type","button");
    if(type == "choose"){
        label.innerHTML += " (választás)";
    }
    else if(type == "chooseMany"){
        label.innerHTML += " (több választás)";
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("div-shadow");
    newDiv.setAttribute("id", "question_"+counter);
    saveForm.appendChild(newDiv);
    
    var question = document.createElement("input");
    question.setAttribute("type", "text");
    question.setAttribute("name","question_"+counter+"_question")
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Törlés";
    deleteButton.onclick = () =>{
        saveForm.removeChild(newDiv);
        question.remove(newDiv);
    }
    deleteButton.setAttribute("type","button");
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

function fu() {
    var opened = window.open("");
    opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
  }