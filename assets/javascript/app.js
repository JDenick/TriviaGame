alert("Reset")
$('#start').on("click",function(){
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions = [{
    question: "When was the first NHL game?",
    answers:["1917", "1901", "1936", "1906"],
    correctAnswer: "1917"
}, {
    question: "Which team was not an original six team?",
    answers:["Montreal Canadians", "Edmonton Oilers", "New York Rangers", "Chicago Blackhawks"],
    correctAnswer: "Edmonton Oilers"
}, {
    question: "Which of these teams never won a Stanley Cup?",
    answers:["Kenora Thistles", "Windsor Bulldogs", "Seattle Metropolitians", "Toronto Blueshirts"],
    correctAnswer: "Windsor Bulldogs"
}, {
    question: "The Montreal Canadians won how many cups in the '90's?",
    answers:["0", "1", "2", "3"],
    correctAnswer: "1"
}, {
    question: "Which NHL player did not score 50 goals in their rookie season?",
    answers:["Joe Nieuwendyk", "Teemu Selanne", "Mike Bossy", "Mario Lemieux"],
    correctAnswer: "Mario Lemieux"
}, {
    question: "How many decades did Gordie Howe play pro hockey??",
    answers:["4", "5", "6", "7"],
    correctAnswer: "6"
}, {
    question: "Who was the first team to wear white pants??",
    answers:["Washington Capitals", "Toronto Maple Leafs", "Montreal Canadians", "New York Rangers"],
    correctAnswer: "Washington Capitals"
}, {
    question: "Which NHL team once drafted a player who didn't exist?",
    answers:["San Jose Sharks", "Los Angeles Kings", "Florida Panthers", "Buffalo Sabres"],
    correctAnswer: "Buffalo Sabres"
}, {
    question: "Who was the first player to score 60 goals in one season?",
    answers:["Gordie Howe", "Wayne Gretzky", "Mike Bossy", "Phil Esposito"],
    correctAnswer: "Phil Esposito"
}, {
    question: "Which team almost relocated to Saskatoon after Ralston Purina pet foods sold the the franchise in 1983?",
    answers:["Pittsburgh Penguins", "St. Louis Blues", "New Jersey Devils", "Calgary Flames"],
    correctAnswer: "St. Louis Blues"
}, {
    question: "Which of the following teams once lost 71 games in one season??",
    answers:["Ottaway Senators", "Tampa Bay Lightning", "New York Islanders", "San Jose Sharks"],
    correctAnswer: "San Jose Sharks"
}, {
    question: "Which player was the first in NHL to score a full-strength, power play, short-handed, penalty shot, and open net goal in the same game?",
    answers:["Brett Hull", "Bobby Orr", "Mario Lemieux", "Wayne Gretzky"],
    correctAnswer: "Mario Lemieux"
}];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<1){
            console.log("Time is up!");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#clockwork').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length; i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
            for(var j=0; j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        }
        $('#subwrapper').append("<br><br><button id='end' type='button' class='btn btn-primary'>Done!</button>");
    },

    done: function(){
        $.each($('input[name="question-0"]:checked'),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-1"]:checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-2"]:checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-3"]:checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-4"]:checked'),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-5"]:checked'),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-6"]:checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-7"]:checked'),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-8"]:checked'),function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-9"]:checked'),function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-10"]:checked'),function(){
            if($(this).val()==questions[10].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-11"]:checked'),function(){
            if($(this).val()==questions[11].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();
            $('#subwrapper').html("<h2>Time is up!!!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
}