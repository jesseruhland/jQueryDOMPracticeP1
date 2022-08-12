$(function() {console.log("Let’s get ready to party with jQuery!")});

$('article').find('img').addClass('image-center');

$('p').last().remove();

$('#title').css("font-size", (Math.floor(Math.random()*101)));

$('ol').append('<li>It can say whatever you want.</li>');

$('aside').children('').remove();
$('aside').append("<p>I'm sorry there was ever a list here.</p>");

$("input").change(function () {
    let red = $('input').eq(0).val();
    let green = $('input').eq(2).val();
    let blue = $('input').eq(1).val();
    $('body').css('background-color', 'rgb('+red+','+green+','+blue+')');
})

$('img').on('click', function(evt) {
    evt.target.remove();
});