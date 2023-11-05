<script>
$(document).ready(function(){
    $("#outputButton").click(function(){
        var userInput = $("#userInput").val();

        $("#outputBox").text(userInput);

        $('#outputBox').removeClass('hidden');

        $('#outputBox').addClass('bounce');
    })
});
</script>