var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("foto");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
};

///////////video

$("video").each(function() {
    var player = videojs(this);

    $(this).parents(".video").find(".playbuttons").click(function() {
        if ($(this).hasClass('active')) { 
            $(this).removeClass('active'); 
            player.pause();
        } else { 
            $(this).addClass('active'); 
            player.play();
        }
    });

    $(this).parents(".video").find(".rewindbutton").click(function() {
        player.currentTime(player.currentTime() - 10);
    });

});






////////contact form

$(document).ready(function () {
    $('.contactknop').on('click', function(event){
        event.preventDefault();
        var accordion = $(this);
        var contactNone = accordion.next('.knopindrukken');
        accordion.toggleClass("slide");
        contactNone.slideToggle(250);
    });
});

