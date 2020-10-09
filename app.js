const quizData = [
    {
        question: 'How old is floring?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'what is the best programing language in 2020',
        a: 'Java',
        b: 'python',
        c: 'PHP',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'How is the president of US?',
        a: 'Floring pop',
        b: 'Donal trump',
        c: 'Barak Obama',
        d: 'Mihai Andri',
        correct: 'b'
    },
    {
        question: 'what does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading style sheet',
        c: 'Jason object Notation',
        d: 'Aplication Programing Interface',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript Launched??',
        a: '1996',
        b: '1995',
        c: '1994',
        d: '1993',
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
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

startBtn.addEventListener('click', ()=>{
    if(name.value){
        cardBody.classList.add('d-none');
        cardQuiz.classList.remove('d-none');
    }else{
        alert.classList.remove('d-none');
        alert.innerHTML = `<strong>Please Enter your Name</strong>`;

        setTimeout(()=>{
            alert.classList.add('d-none');
        }, 2000)
    }
})


