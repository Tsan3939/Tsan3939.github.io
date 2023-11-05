$(document).ready(function(){
    $("#outputButton").click(function(){
        var userInput = $("#textInput").val();
        $("#outputText").text(userInput);
        $("#outputText").addClass("animated bounce");
        $("#outputText").show();
    });
});