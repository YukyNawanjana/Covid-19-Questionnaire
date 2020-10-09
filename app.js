const quizData = [
    {
        question: 'Do you have a fever?',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Are you close contact with sick people?',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Do you wash your hands often?',
        a: 'Yes',
        b: 'No',
        correct: 'a'
    },
    {
        question: 'Do you using a face mask?',
        a: 'Yes',
        b: 'No',
        correct: 'a'
    },
    {
        question: 'Do you have any immune disease?',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Do you ofthen touch your face?',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Are you coughing?',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Are you travel during lockdown period?',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },

];
const startBtn = document.getElementById('startBtn');
const cardBody = document.querySelector('.card-body');
const cardQuiz= document.querySelector('.card-quiz ');
const name = document.getElementById('name');
const alert = document.querySelector('.alert');
const answerEls = document.querySelectorAll('.answer');
const question = document.getElementById('qestion');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

startBtn.addEventListener('click', ()=>{
    if(name.value){
        cardBody.classList.add('d-none');
        cardQuiz.classList.remove('d-none');
        loadQuiz();
    }else{
        alert.classList.remove('d-none');
        alert.innerHTML = `<strong>Please Enter your Name</strong>`;

        setTimeout(()=>{
            alert.classList.add('d-none');
        }, 2000);
    }
})


function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    question.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b; 
    getSelected();
    
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}


function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;
}



submitBtn.addEventListener('click', ()=>{
    
    const answer = getSelected();
    //console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // TODO Show Results
            //quiz.innerHTML = `<h2>Your anser corectly ${score}/${quizData.length} questions</h2><button onClick="location.reload()">Reload</button>`;
        }
    }else{
        alert.classList.remove('d-none');
        alert.innerHTML = `<strong>Please Select Answer</strong>`;

        setTimeout(()=>{
            alert.classList.add('d-none');
        }, 2000);
    }   
    
});
