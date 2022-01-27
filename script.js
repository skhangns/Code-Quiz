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
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
       },
       {
           title: "In JavaScript, what is a block of statement?",
           choices: ["Conditional block",
            "block that combines a number of statements into a single compound statement",
            "both conditional block and a single statement",
            "block that contains a single statement]"],
            answer:"block that combines a number of statements into a single compound statement"
       },
       {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
       },
       {
           title:"When interpreter encounters an empty statements, what it will do",
           choices: ["Shows a warning","Prompts to complete the statement","Throws an error","Ignores the statements"],
           answer: "Ignores the statements"
       },
       {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
       },
       {
           title:"The 'function' and 'var' are known as",
           choices:["Keywords","Data types","Declaration statements","Prototypes"],
            answer: "Declaration statements"
       },
       {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
       },
       {
           title:" Which one of the following is the correct way for calling the JavaScript code?",
           choices:["Preprocessor","Triggering Event","RMI","Function/Method"],
           answer:"Function/Method"
       },
     ]


   

   var endScreen= document.getElementById("end-screen");
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
       questionchoices.innerHTML = "";
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
    QuestionIndex ++ 
    if(QuestionIndex === quizQuestions.length){
        endQuiz();
        console.log("Quiz is Over")

    }else{
        cycleQuestions();
    
    }

}
function endQuiz(){
    clearInterval(timestate);
    questions.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;


}
function submitScore(){
    var initials = initialsEl.value.trim();
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));var initials = initialsEl.value.trim();
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
}
function displayHighScores(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  // sort highscores by score property in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });
  highscores.forEach(function(score) {
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;
    // display on page
    var olEl = document.getElementById("HIGHSCORES");
    olEl.appendChild(liTag);
  });
}
displayHighScores();



startBtn.onclick = startQuiz;
submit.onclick = submitScore;


