$(document).ready(function() {
    $("#outputButton").click(function() {
        var inputText = $("#textInput").val();
        $("#outputText").text(inputText);
        $("#outputText").css("display", "block");
    });
});