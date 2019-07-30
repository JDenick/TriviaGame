alert("Testing")
$('#start').on("click",function(){
    $('#start').remove();
    for(var i=0; i<questions.length; i++){
        $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
        for(var j=0; j<questions[i].answers.length;j++){
            $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
    }
})

var questions = [{
    question: "When was the first NHL game?",
    answers:["1917", "1901", "1936", "1906"],
    correctAnswer: "1917"
}, {
    question: "Which team was not an original six team?",
    answers:["Montreal Canadians", "Edmonton Oilers", "New York Rangers", "Chicago Blackhawks"],
    correctAnswer: "Edmonton Oilers"
}]