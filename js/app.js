$(document).ready(function(){

var question = [ //see if you can substitute {} after you get this working//
	{
		number: "Question #1",
		quest: "First Q",
		answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
		correct: "1",
		corrAns: "Answer2",
	},
	{	
		number: "Question #2",
		quest: "Second Q",
		answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
		correct: "2",
		corrAns: "Answer3",

	},
	{
		number: "Question #3",
		quest: "Third Q",
		answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
		correct: "0",
		corrAns: "Answer1",
	},
	{
		number: "Question #4",
		quest: "Fourth Q",
		answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
		correct: "3",
		corrAns: "Answer4",
	},
	{
		number: "Question #5",
		quest: "Fifth Q",
		answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
		correct: "1",
		corrAns: "Answer2",
	}
	];

	var correctAns = 0;
	var finish = false;
	var questAns = 0; 
	var questNum = questAns + 1;
	var i;

	restartQuiz();

	function restartQuiz() {
		correctAns = 0;
		finish = false;
		questAns = 0;
		$("#score, #add, #next, #new, questNum").hide();
		$("#add").prop("disabled", true);
		$("#begin").show();
	}

	$("new").click(function() {
		console.log("Quiz reset");
		restartQuiz();
		$("ul, #triviaText, #questText").hide();
		$("#introQuestText").text("Are you ready this time?").css("text-align", "center").hide().slideDown();
		$("#introQuestText").show();
	}




]
















