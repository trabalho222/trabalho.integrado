var myQuestions = [
	{
		question: "1 – Winston, main character of the book, works in what area of the Party?",
		answers: {
			a: 'Ministry of Truth <br>',
			b: ' Ministry of Love <br>',
			c: 'Ministry of Peace <br><br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "2 – Who is the 'commander' of the Party?",
		answers: {
			a: 'Winston <br>',
			b: 'O’Brien <br>',
			c: 'Big Brother <br><br>',
			
		},
		correctAnswer: 'c'
	},
	{
		question: "3 – Who is Winston's main ally in his journey?",
		answers: {
			a: 'O’Brien <br>',
			b: 'Julia <br>',
			c: 'Goldstein <br><br>',

		},
		correctAnswer: 'b'
	},
	{
		question: "4 – What is the function of the Miniver?",
		answers: {
			a: "Manipulate truths for one's own benefit <br>",
			b: 'Tell truths <br>',
			c: 'Keep the lawn green <br><br>',

		},
		correctAnswer: 'a'
	},
	{
		question: "5 – What is the function of Miniamor?",
		answers: {
			a: 'Dristibute help to others <br>',
			b: 'Works like Tinder <br>',
			c: 'Torturing people who do not follow the Party <br><br>',

		},
		correctAnswer: 'c'
	},
	{
		question: "6 – Why did they create Novafala?",
		answers: {
			a: 'To facilitate communication with other countries <br>',
			b: "To limit people's vocabulary and thoughts <br>",
			c: 'To help deaf people <br><br>',

		},
		correctAnswer: 'b'
	},
	{
		question: "7 – What O'Brien did?",
		answers: {
			a: 'Betrayed Winston and Julia <br>',
			b: 'Died  <br>',
			c: 'Helped Winston and Julia <br><br>',

		},
		correctAnswer: 'a'
	},
	{
		question: "8 – Who was the biggest enemy of the Party?",
		answers: {
			a: 'Winston <br>',
			b: 'Syme  <br>',
			c: 'Goldstein <br><br>',

		},
		correctAnswer: 'c'
	},
	{
		question: "9 – How did Winston met Julia?",
		answers: {
			a: 'At work <br>',
			b: 'On the street <br>',
			c: 'In Miniamor <br><br>',

		},
		correctAnswer: 'a'
	},
	{
		question: "10 – What happens at the end of the book?",
		answers: {
			a: 'They die <br>',
			b: 'They start to accept the Party <br>',
			c: 'The win and defeat the Party <br><br>',

		},
		correctAnswer: 'b'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question-box">'
			);
			output.push(
				'<div class="question">' + questions[i].question + '</div><hr>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
			output.push('</div>');
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'green';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = 'You got ' + numCorrect + ' out of ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	let botaoFinal = document.createElement('button');
	botaoFinal.style = 'margin-left: 20px; width: 200px; height: 100px;'
	botaoFinal.id = 'submit';
	botaoFinal.textContent = 'Send answers';
	quizContainer.appendChild(botaoFinal);

	// on submit, show results
	botaoFinal.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
	
	
}
