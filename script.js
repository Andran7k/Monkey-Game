(function () {


	document.onkeydown = function (e) {

		var ll = document.getElementById('q6').offsetLeft
		var tt = document.getElementById('q6').offsetTop


		var ll1 = document.getElementById('q').offsetLeft
		var tt1 = document.getElementById('q').offsetTop

		var ll2 = document.getElementById('q1').offsetLeft
		var tt2 = document.getElementById('q1').offsetTop

		var ll3 = document.getElementById('q2').offsetLeft
		var tt3 = document.getElementById('q2').offsetTop

		var ll4 = document.getElementById('q3').offsetLeft
		var tt4 = document.getElementById('q3').offsetTop

		var ll5 = document.getElementById('q4').offsetLeft
		var tt5 = document.getElementById('q4').offsetTop

		var ll6 = document.getElementById('q5').offsetLeft
		var tt6 = document.getElementById('q5').offsetTop

		if (e.keyCode == 38) {
			tt = tt - 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 40) {
			tt = tt + 10
			document.getElementById('q6').style.top = tt + 'px'
		}
		if (e.keyCode == 37) {
			ll = ll - 10
			document.getElementById('q6').style.left = ll + 'px'
		}
		if (e.keyCode == 39) {
			ll = ll + 10
			document.getElementById('q6').style.left = ll + 'px'
		}

		if (ll + 100 > ll1 && ll < ll1 + 100 && tt + 100 > tt1 && tt < tt1 + 100) {
			document.getElementById('q').classList.add('rr')
		}
		if (ll + 100 > ll2 && ll < ll2 + 100 && tt + 100 > tt2 && tt < tt2 + 100) {
			document.getElementById('q1').classList.add('rr')
		}
		if (ll + 100 > ll3 && ll < ll3 + 100 && tt + 100 > tt3 && tt < tt3 + 100) {
			document.getElementById('q2').classList.add('rr')
		}
		if (ll + 100 > ll4 && ll < ll4 + 100 && tt + 100 > tt4 && tt < tt4 + 100) {
			document.getElementById('q3').classList.add('rr')
		}
		if (ll + 100 > ll5 && ll < ll5 + 100 && tt + 100 > tt5 && tt < tt5 + 100) {
			document.getElementById('q4').classList.add('rr')
		}
		if (ll + 100 > ll6 && ll < ll6 + 100 && tt + 100 > tt6 && tt < tt6 + 100) {
			document.getElementById('q5').classList.add('rr')
		}
		var cl = document.getElementsByClassName('rr').length * 5
		document.getElementById('a1').innerHTML = cl
		if (cl == 30) {
			document.onkeydown = null;
			document.getElementById('q8').style.opacity = 1
			clearInterval(time)
			document.getElementById('q6').style.top = tt * 0
			document.getElementById('q6').style.left = ll * 0

		}

	}
	var u = 30
	var time = setInterval(function () {
		u--

		document.getElementById('a2').innerHTML = u
		if (u == 0) {
			document.getElementById('q7').style.opacity = 1
			clearInterval(time)
			document.getElementById('q6').style.top = tt * 0
			document.getElementById('q6').style.left = ll * 0
		}

	}, 1000)

})()