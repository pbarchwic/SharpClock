function clock()
	{
		var today = new Date();
		var hour = today.getHours();
			if (hour<10)
				{	
					hour= ' ' + hour;
				}
			else
				{	
					hour=hour;
				}
		var digit1 = hour.toString()[0];
		var digit2 = hour.toString()[1];
		
		var minute = today.getMinutes();
			if (minute<10)
				{
					minute = '0' + minute;
				}
			else
				{
				minute = minute;
				}
		var digit3 = minute.toString()[0];
		var digit4 = minute.toString()[1];
		
		// wyświetlanie cyrf
		document.getElementById("hour1").innerHTML = digit1;
		document.getElementById("hour2").innerHTML = digit2;
		document.getElementById("minute1").innerHTML = digit3;
		document.getElementById("minute2").innerHTML = digit4;
		setTimeout("clock()",1000);
		
	}