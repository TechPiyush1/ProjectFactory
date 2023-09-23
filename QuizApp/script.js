const quiz=[
    {
    question:"What is the capital of India?",
    answer: [{text:"New Delhi",correct:true},
    {text:"Uttar Pradesh",correct:false},
    {text:"Maharastra",correct:false},
    {text:"Banglore",correct:false}]
    },
    {
        question:"What is full form of WHO?",
        answer: [{text:"World Organisation Sector",correct:false},
        {text:"World Health Organisation",correct:true},
        {text:"World Health Organiser",correct:false},
        {text:"Web Health Organisation",correct:false}]
        },
        {
            question:"Where the G20 Summit takes place in India?",
            answer: [{text:"Hyderabad",correct:false},
            {text:"Jammu",correct:false},
            {text:"Banglore",correct:false},
            {text:"New Delhi",correct:true}]
            },
            {
                question:"Who won the Asia Cup 2023?",
                answer: [{text:"India",correct:true},
                {text:"Pakistan",correct:false},
                {text:"UAE",correct:false},
                {text:"Sri Lanka",correct:false}]
                },

];

const questionElement=document.getElementById("ques");
const answerElement=document.querySelector(".quizAns");
const nextElement=document.getElementById("next");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextElement.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=quiz[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;


    currentQuestion.answer.forEach(answers=>{
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("ans");
        answerElement.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState(){
    next.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    next.style.display="flex";
}


function showScore(){
    answerElement.style.display="none";
    nextElement.style.display="none";
    questionElement.innerHTML=`You Scored ${score}/4`;

}

nextElement.addEventListener("click",()=>{
    if(currentQuestionIndex<quiz.length){
        handleNextQuestion()
    }else{
showScore();
    }
})


function handleNextQuestion(e){
    currentQuestionIndex++;
    if(currentQuestionIndex<quiz.length){
        showQuestion();
    }else{
        showScore();
    }
}


startQuiz();