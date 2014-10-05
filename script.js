
Storage.prototype.setArray = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getArray = function(key) {
    return JSON.parse(this.getItem(key))
}

var hourcount;
var paycheckamount;
var hourlyrate;
var makingamount = 0;
var paychecks = {};
var ispaychecktrue;
var daylog = [];
var gatheredPay;

var $moneyprogression = $('#moneyprogression');
var $payrate = $('#payrate');
var $setup = $('#setup');
var $setuphide1 = $('#hourcount');
var $setuphide2 = $('#paycheckamount');
var $setuphide3 = $('#setup');
var $setuphide4 = $('#setup2');
var $clockedin = $('#clockedin');
var $clockout = $('#clockout');
var $today = $('#today')
$clockedin.hide();
$clockout.hide();
var $thisperiod = $('#thisperiod');
var $enter = $('#enter');
var daycount = 0;
var isclockedin = false;
$clockedin.hide();



$clockedin.click(function () {
	isclockedin = true;
	$clockedin.hide();
	$clockout.fadeIn();
});



$enter.click(function () {
	hourcount = $('#hourcount').val();
	paycheckamount = $('#paycheckamount').val();
	hourlyrate = (paycheckamount / hourcount) * 10000;
	$('#enter').hide();
	$clockedin.fadeIn();
	$setuphide1.hide();
	$setuphide2.hide();
	$setuphide3.hide();
	$setuphide4.hide();	

	console.log(hourlyrate);
});

setInterval(function () {
	if (isclockedin === true) {

		makingamount += (hourlyrate / 7200);
		var makingamountdisp = makingamount / 10000;
		var hourlyratedisp = hourlyrate / 10000;
		$moneyprogression.html('$' + makingamountdisp.toFixed(3));
		$payrate.html('$' + hourlyratedisp.toFixed(2));
		$thisperiod.html('$' + makingamountdisp.toFixed(2));
		
		$clockout.click(function () {
			isclockedin = false;
			daylog[0] = makingamountdisp;
			window.localStorage.setItem("cachedPay", daylog[0]);
			gatheredPay = window.localStorage.getArray("cachedPay");
			$today.html(gatheredPay[0]);
			$clockout.hide();
			console.log(daylog[0]);

		});
	};
	
}, 500);


