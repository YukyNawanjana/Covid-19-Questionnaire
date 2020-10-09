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
    }

];
const startBtn = document.getElementById('startBtn');
const cardBody = document.querySelector('.cardBody');
const cardQuiz= document.querySelector('.card-quiz ');
const name = document.getElementById('name');
const alert = document.querySelector('.alert');
const answerEls = document.querySelectorAll('.answer');
const question = document.getElementById('qestion');
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


function getSelected(){
   

    let answer = undefined
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });

    return answer;
}


function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();

    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // TODO Show Results
            const percentage = Math.round( score * 12.5 );
            cardQuiz.innerHTML = `<h2>Your anser corectly ${score}/${quizData.length} questions</h2><button onClick="location.reload()">Reload</button>
                                    <!-- Progress bar 1 -->
                                    <div class="progress mx-auto" data-value='${percentage}'>
                                    <span class="progress-left">
                                                    <span class="progress-bar border-primary"></span>
                                    </span>
                                    <span class="progress-right">
                                                    <span class="progress-bar border-primary"></span>
                                    </span>
                                    <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div class="h2 font-weight-bold">${percentage}<sup class="small">%</sup></div>
                                    </div>
                                    </div>
                                <!-- END -->
            `;

                // Present tage

                $(function() {

                    $(".progress").each(function() {
                
                    var value = $(this).attr('data-value');
                    var left = $(this).find('.progress-left .progress-bar');
                    var right = $(this).find('.progress-right .progress-bar');
                
                    if (value > 0) {
                        if (value <= 50) {
                        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                        } else {
                        right.css('transform', 'rotate(180deg)')
                        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                        }
                    }
                
                    })
                
                    function percentageToDegrees(percentage) {
                
                    return percentage / 100 * 360
                
                    }
                
                });
        }
    }else{
        alert.classList.remove('d-none');
        alert.innerHTML = `<strong>Please Select Answer</strong>`;

        setTimeout(()=>{
            alert.classList.add('d-none');
        }, 2000);
    }    
    
});



