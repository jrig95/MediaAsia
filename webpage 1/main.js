let btn = document.querySelector('.scroll');
let el = document.querySelector('.page2');

            btn.addEventListener('click', function () {
             el.scrollIntoView(true);
            });