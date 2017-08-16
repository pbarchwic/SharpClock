function clock()
	{
		var today = new Date();
		var hour1 = today.getHours();
			if (hour1<10)
				{	
					hour1= ' ' + hour1;
				}
			else
				{	
					hour1=hour1;
				}
		var digit1 = hour1.toString()[0];
		var hour2= today.getHours();
			if (hour2<10)
				{	
					hour2= '0' + hour2;
				}
			else
				{	
					hour2=hour2;
				}
		var digit2 = hour2.toString()[1];
		
		var minute1 = today.getMinutes();
			if (minute1<10)
				{
					minute1 = '0' + minute1;
				}
			else
				{
				minute1 = minute1;
				}
		var digit3 = minute1.toString()[0];
		
		var minute2 = today.getMinutes();
			if (minute2<10)
				{
					minute2 = '0' + minute2;
				}
			else
				{
				minute2 = minute2;
				}
		var digit4 = minute2.toString()[1];
		
		// wyświetlanie cyrf
		document.getElementById("hour1").innerHTML = digit1;
		document.getElementById("hour2").innerHTML = digit2;
		document.getElementById("minute1").innerHTML = digit3;
		document.getElementById("minute2").innerHTML = digit4;
		setTimeout("clock()",1000);
		
	}