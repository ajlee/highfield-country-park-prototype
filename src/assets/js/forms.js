$('#contactForm').on('submit', function(e) {
    msg = "<p>" +
        "<span id='thankyou'>Thank you for contacting us. We will be in touch shortly.</span>" +
        "</p>" +
        "<hr/>" +
        "<a href='#' class='btn' data-dismiss='modal'>OK</a>";

    e.preventDefault(); //Prevents default submit
    var form = $(this);
    $(form).fadeOut(500, function(){
        form.html(msg).fadeIn();
    });
});
