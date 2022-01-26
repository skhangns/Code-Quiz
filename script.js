var Button = document.getElementById("start");
console.log(Button);
Button.addEventListener("click", startQuiz);





// question should now appear, timer should start//
function startQuiz(){
    console.log("hello");
    var element = document.getElementById("homescreen");
    element.parentNode.removeChild(element);
    var question = document.createElement("p");
    var text = document.createTextNode("Inside which HTML element do we put the JavaScript?");
    question.appendChild(text);
    var div = document.createElement("div");
    div.setAttribute("id","Question1");
    div.appendChild(question);
    var container = document.getElementsByClassName("container")[0];
    container.appendChild(div);
   
    }


//4 buttons(choices) add one button to submit should be availble//


