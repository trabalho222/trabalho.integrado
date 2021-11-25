var myQuestions = [
	{
		question: "1 – Winston, personagem principal do livro, trabalha em que área do partido?",
		answers: {
			a: 'Ministério da Verdade <br>',
			b: ' Ministério do Amor <br>',
			c: 'Ministério da Paz <br><br>'
		},
		correctAnswer: 'a'
	},
	{
		question: "2 – Quem é o “comandante” do partido?",
		answers: {
			a: 'Winston <br>',
			b: 'O’Brien <br>',
			c: 'Grande Irmão <br><br>',
			
		},
		correctAnswer: 'c'
	},
	{
		question: "3 – Qual é o principal aliado de Winston em sua jornada?",
		answers: {
			a: 'O’Brien <br>',
			b: 'Julia <br>',
			c: 'Goldstein <br><br>',

		},
		correctAnswer: 'b'
	},
	{
		question: "4 – Qual a função do Miniver?",
		answers: {
			a: 'Manipular “verdades” para benefício próprio <br>',
			b: 'Contar verdades <br>',
			c: 'Manter o gramado verde <br><br>',

		},
		correctAnswer: 'a'
	},
	{
		question: "5 – Qual a função do Miniamor?",
		answers: {
			a: 'Distribuir ajuda ao próximo <br>',
			b: 'Funciona como o Tinder <br>',
			c: 'Torturar pessoas que não seguem o partido <br><br>',

		},
		correctAnswer: 'c'
	},
	{
		question: "6 – Por que criaram a Novafala?",
		answers: {
			a: 'Para facilitar a comunicação com outros países <br>',
			b: 'Para limitar o vocabulário e o pensamento das pessoas <br>',
			c: 'Para ajudar pessoas surdas e mudas <br><br>',

		},
		correctAnswer: 'b'
	},
	{
		question: "7 – O que O’Brien fez?",
		answers: {
			a: 'Traiu Winston e Julia <br>',
			b: 'Morreu  <br>',
			c: 'Ajudou Winston e Julia <br><br>',

		},
		correctAnswer: 'a'
	},
	{
		question: "8 – Quem era o maior inimigo do partido?",
		answers: {
			a: 'Winston <br>',
			b: 'Syme  <br>',
			c: 'Goldstein <br><br>',

		},
		correctAnswer: 'c'
	},
	{
		question: "9 – Como Winston conhece Julia?",
		answers: {
			a: 'No trabalho <br>',
			b: 'Na rua <br>',
			c: 'No Miniamor <br><br>',

		},
		correctAnswer: 'a'
	},
	{
		question: "10 – O que acontece no fim do livro?",
		answers: {
			a: 'Eles morrem <br>',
			b: 'Eles passam a aceitar o partido <br>',
			c: 'Eles vencem e derrotam o partido <br><br>',

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

			
			resultsContainer.innerHTML = 'Você acertou ' + numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	let botaoFinal = document.createElement('button');
	botaoFinal.style = 'margin-left: 20px; width: 200px; height: 100px;'
	botaoFinal.id = 'submit';
	botaoFinal.textContent = 'Enviar respostas';
	quizContainer.appendChild(botaoFinal);

	// on submit, show results
	botaoFinal.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
	
	
}
