$(document).ready(function(){
	//Setting Question and Answer Variables
	var qA = [
		{
			question: 'Who was the first president?',
			answers: [
			'John Adams',
			'Andrew Jackson',
			'George Washington',
			'Thomas Jefferson'
			],
			correct: 2
		},
		{
			question: 'What president is not featured on Mt. Rushmore?',
			answers: [
			'Franklin Roosevelt',
			'George Washington',
			'Thomas Jefferson',
			'Theodore Roosevelt'
			],
			correct: 0
		},
		{
			question: 'There are two non-presidents featured on US currency, Benjamin Franklin and...?',
			answers: [
			'Alexander Hamilton',
			'John Jay',
			'Samuel Adams',
			'John Hancock'
			],
			correct: 0
		},
		{
			question: 'How many presidents have been assassinated while in office?',
			answers: [
			'1',
			'2',
			'3',
			'4',
			],
			correct: 3
		},
		{
			question: 'What president had the shortest term?',
			answers: [
			'Zachary Taylor',
			'William Henry Harrison',
			'James Buchanon',
			'Warren Harding'
			],
			correct: 1
		}
	];

	var i = 0;
	var score = 0;

	//Start Quiz

	$('#startQuiz').click(function(){
		$('#startButton').hide();
		$('#quizPaper').show();
		nextQuestion();
	});

	//Submit Answer

	$(document).on('click', '#submitAnswer', function() {
		checkAnswer();
		nextQuestion();
	});

	//Try Again

	$(document).on('click', '#tryAgain', function() {
		location.reload();
	});

	//Next Question Function, Final Question Function

	function nextQuestion() {
		if (i == 0) {
			$('#quizChoices li').remove();
			var newQuestion = '<li><h3 id="actualQuestion">' + qA[i].question + '</h3></li><li><input type="checkbox" value="0">' + qA[i].answers[0] + '</input></li><li><input type="checkbox" value="1">' + qA[i].answers[1] + '</input></li><li><input type="checkbox" value="2">' + qA[i].answers[2] + '</input></li><li><input type="checkbox" value="3">' + qA[i].answers[3] + '</input></li><li><button id="submitAnswer">Submit</button></li>';
			$('#quizChoices').html(newQuestion);
		} else if (i<5) {
			$('#quizChoices li').remove();
			var newQuestion = '<li><h3 id="actualQuestion">' + qA[i].question + '</h3></li><li><input type="checkbox" value="0">' + qA[i].answers[0] + '</input></li><li><input type="checkbox" value="1">' + qA[i].answers[1] + '</input></li><li><input type="checkbox" value="2">' + qA[i].answers[2] + '</input></li><li><input type="checkbox" value="3">' + qA[i].answers[3] + '</input></li><li><button id="submitAnswer">Submit</button></li>';
			$('#quizChoices').html(newQuestion);
		} else {
			$('#quizChoices li').remove();
			$('#score h3').remove();
			var displayScore = '<li><h3 id="finalScore">You got ' + score + ' out of 5 questions correct!</h3></li><li id="centerButton"><button id="tryAgain">Try Again</button></li>';
			$('#quizChoices').html(displayScore);
		};
	};

	function checkAnswer() {
		var answer = ('input:checked').val();
		if (answer == qA[i].correct) {
			score++;
			updateScore();
			i++;
		} else {
			updateScore();
			i++;
		};
	};

	function updateScore() {
		$('#score h3').remove();
		var yourScore = '<h3 id="yourScore">Correct:</br>' + score + ' / ' + (i+1);
		$('#score').append(yourScore);
	};
	
});