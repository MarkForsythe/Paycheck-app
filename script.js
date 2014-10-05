var hourcount;
var paycheckamount;
var hourlyrate;
var moneyprogression = document.getElementById('moneyprogression');
var payrate = document.getElementById('payrate');
var makingamount = 0;
var setup = document.getElementById('setup');
setuphide1 = document.getElementById('hourcount');
setuphide2 = document.getElementById('paycheckamount');
setuphide3 = document.getElementById('setup');
setuphide4 = document.getElementById('setup2');
clockedin = document.getElementById('clockedin');
clockout = document.getElementById('clockout');
thisperiod = document.getElementById('thisperiod');
isclockedin = false;
clockedin.style.visibility="hidden";
clockout.style.visibility="hidden";


// $(document).ready(function () {
// 	var $setup = $(".setup");
// 	$('#enter').click(function () {
// 		$setup.hide();
// 	});

// });
clockedin.addEventListener('click', function () {
	isclockedin = true;

});


var enter = document.getElementById('enter');
enter.addEventListener('click', function () {
	hourcount = document.getElementById('hourcount').value;
	paycheckamount = document.getElementById('paycheckamount').value;
	hourlyrate = (paycheckamount / hourcount) * 10000;
	console.log(hourlyrate);
});

setInterval(function () {
	if (hourlyrate > 1) {
		clockedin.style.visibility="visible";
		enter.style.visibility="hidden";
		setuphide1.style.visibility="hidden";
		setuphide2.style.visibility="hidden";
		setuphide3.style.visibility="hidden";
		setuphide4.style.visibility="hidden";	
	};
	if (isclockedin === true) {
		clockedin.style.visibility="hidden";
		clockout.style.visibility="visible";

		makingamount += (hourlyrate / 7200);

		var makingamountdisp = makingamount / 10000;
		var hourlyratedisp = hourlyrate / 10000;
		moneyprogression.innerHTML = '$' + makingamountdisp.toFixed(3);
		payrate.innerHTML = '$' + hourlyratedisp.toFixed(2);
		thisperiod.innerHTML = '$' + makingamount.toFixed(2);
	};
	
}, 500);


