$(".start-button").click(function() {
    $(".page2").show();
    $(".page1").hide();

});

$(".shoot").click(function() {
    $(".page3").show();
    $(".page2").hide();

});

$(".pass").click(function() {
    $(".passpage2").show();
    $(".page2").hide();

});

$(".otherteamsballs").click(function() {
    $(".page4").show();
    $(".page3").hide();

});

$(".otherteamsballp").click(function() {
    $(".lpage4").show();
    $(".passpage2").hide();
});

$(".buckscoring").dblclick(function() {
    $(".page5").show();
    $(".page4").hide();
});

$(".buckscoringl").dblclick(function() {
    $(".losepage5").show();
    $(".lpage4").hide();
});