alert("Testing")
$('#start').on("click",function(){
    game.start();
})

var questions = [{
    question: "When was the first NHL game?",
    answers:["1917", "1901", "1936", "1906"],
    correctAnswer: "1917"
}, {
    question: "Which team was not an original six team?",
    answers:["Montreal Canadians", "Edmonton Oilers", "New York Rangers", "Chicago Blackhawks"],
    correctAnswer: "Edmonton Oilers"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done()
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length; i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
            for(var j=0; j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
    }
}