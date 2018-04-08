

/*
 * Prevent the contact form from reloading the page and replace with confirmation
 * TODO: Get submit working when hosting on bitballoon
 */
$(document).ready(function() {
    if ($('contactForm').length) {
        $('#contactForm').validator().on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
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
            }
        })
    }
});

