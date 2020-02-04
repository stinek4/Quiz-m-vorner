const quizContainer = document.querySelector("#quiz")
const submitButton = document.querySelector("#submit");
const resultsContainer = document.querySelector("#results");


const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");
let slides;
let currentSlide = 0;

//********* DATA - QUESTIONS **********
const myQuestions = [
    {
        question: "Kheopspyramiden ble bygget for Farao Kheops og stod ferdig ca. 2580 f.kr. Pyramiden er 136m høy. Det er et kjent pariserhjul som er 135m høyt. Hvilket?",
        answers: {
            a: "Pariserhjulet fra verdensutstillingen i Chicago",
            b: "London Eye i London",
            c: "Riesenrad i Wien",
        },
        correctAnswer: "b"
    },
    {
        question: "London Eye åpnet i 1999. Et kjent hotell åpnet også i 1999, hvilket?",
        answers: {
            a: "Marina Bay Sands i Singapore",
            b: "Paris Las Vegas i Las Vegas",
            c: "Atlantis Paradise Island på Bahamas",
        },
        correctAnswer: "c"
    },
    {
        question: "Atlantis Paradise Island ligger på Bahamas. Bahamas ligger sør-øst for Florida. Hvilken av disse fornøyelsesparkene ligger i Florida?",
        answers: {
            a: "Tivoli",
            b: "Dollywood",
            c: "Disney World",
        },
        correctAnswer: "c"
    },
    {
        question: "Disney World ble grunnlagt av Walt Disney som døde i 1966. En kjent britisk sanger ble født samme år. Hvem?",
        answers: {
            a: "Rick Astley",
            b: "Freddie Mercury",
            c: "Amy Winehouse",
        },
        correctAnswer: "a"
    },
    {
        question: "Dette er fødestedet til Rick Astley. Hvor er Stine Marie Vørner født?",
        answers: {
            a: "Akershus Sykehus",
            b: "Drammen Sykehus",
            c: "Ringerike Sykehus",
        },
        correctAnswer: "c"
    },
];

//********* SELVE QUIZEN **********

const buildQuiz = () => {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label id="radio">
                    <input type="radio" name="question${questionNumber}" value="${letter}" id="radio-button">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

                output.push(
                    `<div class="slides">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')}</div>
                    </div>`

                );
        });
    
        quizContainer.innerHTML = output.join("");  
    }

//********* VIS RESULTATER **********

const showResults = () => {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    //keep track of users answers
    let numCorrect = 0;

    //for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector).value) || {}.value;

        console.log(userAnswer, currentQuestion.correctAnswer);

        //if answer is correct
        if(userAnswer===currentQuestion.correctAnswer){
            //add to the number of correct answers
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    //show number of correct answers out of total
    resultsContainer.style.backgroundColor = "rgba(24, 24, 24, 0.7)";
    // resultsContainer.style.height = "250px";
    resultsContainer.style.width = "300px";
    resultsContainer.style.border = "none";
    resultsContainer.style.borderRadius = "10px 10px 10px 10px";
    // resultsContainer.resultsP.innerHTML + 'Resultat: ' + numCorrect + ' av ' + myQuestions.length;
    resultsContainer.innerHTML = `<h1>Resultat</h1>` + `<img src="https://media.giphy.com/media/3ov9k0Ziq50EoOuWRi/giphy.gif">
    `+ `Gratulerer! Du hadde ` + numCorrect + ` av ` + myQuestions.length + ` riktige.` + `<b><b> For å se hvilke svar som er riktige og hvilke som er feil, trykk på "forrige"-knappen.`;
 
}

//********* SLIDE-SHOW **********

function showSlide(n){

    slides = document.querySelectorAll(".slides");
    slides = Array.from(slides);

    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide===0){
        previousButton.style.display = 'none';
    }else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide===slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide(){
    showSlide(currentSlide +1);
}

function showPreviousSlide(){
    showSlide(currentSlide -1);
}

buildQuiz();
showSlide(currentSlide);

//********* BUTTONS **********

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener('click', showResults);
