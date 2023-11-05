<script>
$(document).ready(function(){
    $("#outputButton").click(function(){
        var userInput = $("#userInput").val();

        $("#outputText").text(userInput);
        $("#outputContainer").removeClass("hidden");
    })
});
</script>