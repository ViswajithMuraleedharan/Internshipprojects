$(document).ready(function(){   //make the document ready for function
    $('.burger-menu').on('click', function(){ //function selects class '.burger-menu' on click and calls afunction
        $('.mobile-nav').toggle();  //to toggle it. By toggling the css code of '.mobile-nav'and changing its function to the opposite of specified value.
    })
});
//$ stands for jQuery.
