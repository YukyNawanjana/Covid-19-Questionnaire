const quizData = [
    {
        question: 'Do you have a fever?',
        img:'./images/fever.png',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Are you close contact with sick people?',
        img:'./images/team.png',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Do you wash your hands often?',
        img:'images/hand-wash.png',
        a: 'Yes',
        b: 'No',
        correct: 'a'
    },
    {
        question: 'Do you using a face mask?',
        img:'images/face-mask.png',
        a: 'Yes',
        b: 'No',
        correct: 'a'
    },
    {
        question: 'Do you have any immune disease?',
        img:'images/antibiotic.png',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Do you ofthen touch your face?',
        img:'images/no-touch.png',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Are you coughing?',
        img:'images/cough.png',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    },
    {
        question: 'Are you travel during lockdown period?',
        img:'./images/traveller.png',
        a: 'Yes',
        b: 'No',
        correct: 'b'
    }

];
const startBtn = document.getElementById('startBtn');
const cardBody = document.querySelector('.cardBody');
const cardQuiz= document.querySelector('.card-quiz ');
const quixImage = document.getElementById('quiz-img');
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
    quixImage.src = currentQuizData.img;
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

            // check colors
            
            let color;

            if(percentage >= 75){
                color = 'primary';
            }else if( percentage >= 50){
                color = 'success';
            }else{
                color = 'danger';
            }


            
            cardQuiz.innerHTML = `
                                <div class="d-flex justify-content-center  align-items-center" style="height:30vh;">
                                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                                </div>
            `;
            setTimeout(()=>{

                cardQuiz.innerHTML = `
                                    <!-- Progress bar 1 -->
                                    <div class="progress mx-auto my-3" data-value='${percentage}'>
                                    <span class="progress-left">
                                                    <span class="progress-bar border-${color}"></span>
                                    </span>
                                    <span class="progress-right">
                                                    <span class="progress-bar border-${color}"></span>
                                    </span>
                                    <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div class="h2 font-weight-bold text-${color}">${percentage}<sup class="small">%</sup></div>
                                    </div>
                                    </div>
                                    <!-- END -->
                                    <div class="alert alert-primary text-center mt-5 mb-2" role="alert">
                                        Hello <span class="text-primary text-uppercase">${name.value}</span> You are ${percentage}% safe 
                                    </div>
                                    <button onClick="location.reload()" class="btn btn-info btn-block align-self-center my-4">Reload</button>
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

            }, 3000);
            
        }
        
    }else{
        alert.classList.remove('d-none');
        alert.innerHTML = `<strong>Please Select Answer</strong>`;

        setTimeout(()=>{
            alert.classList.add('d-none');
        }, 2000);
    }    
    
});



