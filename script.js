const quizData = [
      {

        question: 'how old is hemant ?',
        a: '17',
        b: '21',
        c: '23',
        d: '26',
        correct : 'c',
      },
      {
         question : 'what is the best programming language in 2022 ?',
         a:'c',
         b: 'c++',
         c: 'python',
         d: 'javascript',
         correct : 'd',
      },

      {
         question: 'who is the president in india  in 2022 ?',
         a: 'droupadi murmu',
         b: 'ramnath kovind',
         c: 'pratibha patil',
         d: 'pranabh mukharji',
         correct : 'a',
      },

      {
        question: 'what does html stand for ?',
        a: 'hyper text markup language',
        b: 'cascading style sheet ',
        c: 'application programing interface',
        d: 'jason object notaion',
        correct: 'a',
      },
      {
        question: 'what year was javascript launced ?',
        a: '1996',
        b:'1995',
        c: '1999',
        d: '1997',
        correct: 'b',
      },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0 ;

loadQuiz();

function loadQuiz() {

  deselectAnswers();

  const currentQuizData  = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;

a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

 
}

function getSelected(){



  let   answer =  undefined;

  answerEls.forEach((answerEl) => {


    if(answerEl.checked)
    {
       answer = answerEl.id;
    }
    
  });

  return answer;

 
}

function deselectAnswers(){


  answerEls.forEach((answerEl) => {


  answerEl.checked = false;
    
  });
}

submitBtn.addEventListener('click',() => {
  
  const answer =  getSelected();
 
  if (answer)
    {
      if(answer === quizData[currentQuiz].correct)
      {
        score++;
      }
    
      currentQuiz++;
      if(currentQuiz<quizData.length){
        loadQuiz();
       }
       else{
        quiz.innerHTML = `<h2> you answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick = "location.reload()">Reload </button>`;
      }
       
  }
});


    

   



