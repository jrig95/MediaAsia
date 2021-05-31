function validation() {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML= "Your email address is valid.";
        text.style.color="green";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML= "Please enter a valid email address";
        text.style.color="red";
        
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML= "";
        text.style.color="#0D1A20";
    }

};

let state = false;
function toggle(){
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").className = "fa fa-eye-slash";
        document.getElementById("eye").style.color = "#BA723D";
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").className = "fas fa-eye";
        document.getElementById("eye").style.color = "#BA723D";
        state = true;
    }
}

$(document).ready(() => {
	let $button = $('button[type="submit"]');
	
	$button.on('click', function() {
		var $this = $(this);
		if($this.hasClass('active') || $this.hasClass('success')) {
			return false;
		}
		$this.addClass('active');
		setTimeout(()=> {
			$this.addClass('loader');
		}, 125);
		setTimeout(()=> {
			$this.removeClass('loader active');
			$this.text('Sent');
			$this.addClass('success animated pulse');
		}, 1600);
		setTimeout(()=> {
			$this.text('Submit contact form');
			$this.removeClass('success animated pulse');
			$this.blur();
		}, infinite);
	});
});

const nav = document.querySelector("#nav");
const topOfNav = nav.offsetTop;
function fixNav (){
    if(window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
};



window.addEventListener('scroll', fixNav);

