/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/// AUDIO

var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/hearthstone.mp3');

$( "#track1" ).mouseover(function() {
    audioElement.play();
  }).mouseout(function(){
     audioElement.pause();
})


var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'audio/ahrix.mp3');
$( "#track2" ).mouseover(function() {
    audioElement2.play();
  }).mouseout(function(){
     audioElement2.pause();
})



var audioElement3 = document.createElement('audio');
    audioElement3.setAttribute('src', 'audio/trololo.mp3');
$( "#track3" ).mouseover(function() {
    $("#track3").attr('src', "img/troll.jpg");
    audioElement3.play();
  }).mouseout(function(){
    audioElement3.pause();
    $("#track3").attr('src', "img/youtube.jpg");
})


var audioElement4 = document.createElement('audio');
    audioElement4.setAttribute('src', 'audio/wd.mp3');
$( "#track4" ).mouseover(function() {
    audioElement4.play();
  }).mouseout(function(){
     audioElement4.pause();
})

var audioElement5 = document.createElement('audio');
    audioElement5.setAttribute('src', 'audio/proxi.mp3');
$( "#track5" ).mouseover(function() {
    audioElement5.play();
  }).mouseout(function(){
     audioElement5.pause();
})

var audioElement6 = document.createElement('audio');
    audioElement6.setAttribute('src', 'audio/got.mp3');
$( "#track6" ).mouseover(function() {
    audioElement6.play();
  }).mouseout(function(){
     audioElement6.pause();
})

