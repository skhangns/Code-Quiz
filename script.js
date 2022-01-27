var quizQuestions = [
    {
     title: "Commonly used data types DO NOT include:",
     choices: ["strings", "booleans", "alerts", "numbers"],
     answer: "alerts"
    },
    {
     title: "The condition in an if / else statement is enclosed within ____.",
     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
     answer: "parentheses"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
       },
       {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
       },
   ]


   var highscores = document.getElementById("highscores")
    var questions = document.getElementById("questions");
    var timerdisplay= document.getElementById("time");
    var questionchoices = document.getElementById("choices");
    var submit = document.getElementById("submit");
    var startBtn = document.getElementById("startBtn");
    var initialsEl = document.getElementById("initials");
    var feedbackEl = document.getElementById("feedback");
    var QuestionIndex = 0;
    var time = 60;
   var timestate;
   function timeInterval(){
       time = time - 1
       timerdisplay.textContent = time
       if(time <= 0){
           console.log("GameOver")
       }
   }
function startQuiz(){
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class","hide");
    questions.removeAttribute("class");
    timestate = setInterval(timeInterval,1000);
    timerdisplay.textContent = time
    // cycle function for quiz questions here
   cycleQuestions()
    }


       
    function cycleQuestions(){
        var displayQuestion = quizQuestions[QuestionIndex] ;
        var questionTitle = document.getElementById("question-title");
       questionTitle.textContent = displayQuestion.title;
       questionchoices.innerHTML = null;
        displayQuestion.choices.forEach(element => {
           var choiceButton = document.createElement("button");
           choiceButton.setAttribute("class","option");
           choiceButton.setAttribute("value", element);
           choiceButton.textContent = element;
           //check answer here
           choiceButton.onclick = checkAnswer;
           questionchoices.appendChild(choiceButton);

        });



    }

function checkAnswer(){
if(this.value === quizQuestions[QuestionIndex].answer){
    alert("correct")

} else{
    alert("wrong")
    time - 10
    timerdisplay.textContent = time

}
    quizQuestions ++ 
    if(QuestionIndex === quizQuestions.length){
        // use end quizfunction
        console.log("Quiz is Over")

    }else{
        cycleQuestions();
    
    }

}
startBtn.onclick = startQuiz



