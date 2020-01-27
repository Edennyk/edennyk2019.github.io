$(document).ready(function() {
$('h1').hide().delay(400).fadeIn('slow');
$('.status').hide().delay(400).fadeIn('slow');
generateQuestions();
generateAnswers();
submit();
restart();
}); 

var currentQuestion = 0;
var selectedAnswer = "";
var score = 0;
var questions = new Array();


//list of questions
function Question(currentQuestion,answers,correct) {
	this.currentQuestion = currentQuestion;
	this.answers = answers;
	this.correct = correct;
}


//Question list - ("Question", ["answer1", "answer2", "answer3", "answer4", "answer5"],  Number of correct answer position 0 - 4) 
questions [0] = new Question ("Which of the followings are value types in C#?", ["Int32","Double","Decimal","All of the above"], 3);
questions [1] = new Question ("Which of the following converts a type to a 64-bit integer in C#?", ["ToInt32","ToInt64","ToSbyte","ToSingle"], 1);
questions [2] = new Question ("Which of the following operator creates a pointer to a variable in C#?", ["&","sizeof","*","typeof"], 2);
questions [3] = new Question ("An array in C# starts with _____ index.", ["One","Zero","-1","None of the above"], 1);
questions [4] = new Question ("Which of the following is right way of declaring an array?", ["int[5] intArray = new int[];","int intArray[] = new int[5];","int[] intArray = new int[5];","int[] intArray = new int[];"], 1);
questions [5] = new Question ("Which of the following is the default access specifier of a class?", ["Private","Public","Protected","Internal"], 3);
questions [6] = new Question ("Which of the following preprocessor directive allows creating a compound conditional directive in C#?", ["elif","if","efine","else"], 0);
questions [7] = new Question ("Which of The following can be used to define the member of a class externally?",[":","::","#","None of the mentioned"], 1);
questions [8] = new Question ("We use _____ to inherit a class within another.", ["Using keyword","Extends keyword","Inherits keyword","Operator"], 3);
questions [9] = new Question ("Which of the following modifiers can be used with the properties?", ["Private","Public","Protected","All of above"], 3);
questions [10] = new Question ("Which of the following operators can be used in C# for string concatenation?", ["&","+","^","$"], 1);
questions [11] = new Question ("If the subclass of an abstract class does not override all the functions of abstract class then it must be declared as __", ["Abstract class","Interface","Static class","Parent class"], 0);
questions [12] = new Question ("Which of the followings is not allowed in C# as access modifier?", ["Public","Friend","Internal","Protected"], 1);
questions [13] = new Question ("An object is composed of __", ["Properties","Methods","Events","All of above"], 3);
questions [14] = new Question ("A GUI___", ["Uses buttons, menus, and icons","Should be easy for a user to manipulate","Stands for Graphic Use Interaction","Both a and b"], 3);
questions [15] = new Question ("What does IDE stand for?", ["Properties","Methods","Events","All of above"], 3);
questions [16] = new Question ("Which of the following is NOT an interface declared  in System.Collections namespace?", ["IComparer","IEnumerable","IEnumerator","IDictionaryComparer"], 3);
questions [17] = new Question ("C# class can inherit multiple ____.", ["Class","Interface","Abstract class","Static class"], 1);
questions [18] = new Question ("Which of the following is a reference type in C#?", ["String","Long","Boolean","None of above"], 0);
questions [19] = new Question ("An object is composed of __", ["Properties","Methods","Events","All of above"], 3);


//questions appear
function generateQuestions() {
var q = questions [currentQuestion].currentQuestion;
$('#heading').append('<h4>' + q + '</h4>').hide().delay(1100).fadeIn('slow');
}

//answers appear
function generateAnswers(){
var write = "";
var a1 = questions [currentQuestion].answers;
for (var i = 0; i < a1.length; i++) {
    write += "<li><input type='radio' name='radio' class='option' value=" +(i)+ ">" + a1[i]+ "</li>";
}
$("#answers").append(write).hide().delay(1100).fadeIn('slow');
}

//radio button being clicked
function submit(){
$('.option').click(function() {
   if($("input[type='radio'][name='radio']").is(':checked')) { 
   	evaluation();
   	$('.option').attr('disabled',true); 
   }
});
}

//evaluate answer 
function evaluation() {
var selected = $("input[type='radio'][name='radio']:checked");
	if (selected.length >= 0) {
    	selectedAnswer = selected.val();
	}
	if (selectedAnswer == questions [currentQuestion].correct) {
		$('#correct').append("<p>Correct!</p>").hide().delay(300).fadeIn('300');
		$('#next').append("<p>Next</p>").hide().delay(300).fadeIn('300');
		$('#correct-answer').append("<p>Your good! [ " + questions[currentQuestion].answers[questions [currentQuestion].correct]+" ] is correct answer :)" + "</p>").hide().delay(300).fadeIn('300');
		nextQuestion();
		playerScore();
		currentQuestion++;
	}
	
	else {
		$('#incorrect').append("<p>Incorrect.</p>").hide().delay(300).fadeIn('300');
		$('#next').append("<p>Next</p>").hide().delay(300).fadeIn('300');
		$('#correct-answer').append("<p>Correct Answer:    " + " " + questions[currentQuestion].answers[questions [currentQuestion].correct] + "</p>").hide().delay(300).fadeIn('300');
		nextQuestion();
		currentQuestion++;
	}
}

//next question 
function nextQuestion() {
 	$("#next").click(function() {
		$('h4').remove();
		$('li').remove();
		$(".outcome p").remove();

if (currentQuestion >= 20) {
	complete();
	restart();
	return;
	}
else {
	questionNumber();
	generateQuestions();
	generateAnswers();
	submit();
	}
});

}

//set score
function playerScore() {
	$('#score p').remove();
	score++;
	$('#score').append(" " + '<p>' + score + '</p>');

}

//question marker
function questionNumber() {
	$('#question p').remove();
	$('#question').append(" " + '<p>' + (currentQuestion +1) + '/20</p>');
}

//final tally
function complete() {
	$('.status').hide();
	$('#heading').append("<h4>You got" + " " + score + " " + "out of 20 <br>" + "<div class='restart'><p>Restart</p></div></h4>").hide().fadeIn('400');
	$('.restart').addClass('quiz-end');
}

//restart button
function restart() {
	$('.restart').click(function() {
		$('.restart').removeClass('quiz-end');
		currentQuestion = 0;
		score = (score-(score+1));
		questions [0];
		$('#score').hide().delay(300).fadeIn('slow');
		$('#question').hide().delay(300).fadeIn('slow');
		$('h4').remove();
		$('li').remove();
		$(".outcome p").remove();
		questionNumber();
		generateQuestions();
		generateAnswers();
		submit();
		playerScore();
		$('.status').show();
	});
}
//random questions 
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

console.log(shuffle(questions));


