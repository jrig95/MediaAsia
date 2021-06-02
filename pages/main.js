let btn = document.querySelector('.scroll');
let el = document.querySelector('.page2');

 btn.addEventListener('click', function () {
 el.scrollIntoView(true);
});

$(document).ready(function () {
    $('.gallery li:lt(9)').show();
    $('.less').hide();
    var items =  12;
    var shown =  9;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery li:visible').length+3;
        if(shown< items) {
          $('.gallery li:lt('+shown+')').show(300);
        } else {
          $('.gallery li:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.gallery li').not(':lt(9)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});