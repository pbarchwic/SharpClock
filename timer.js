function clock()
	{
		var today = new Date();
		var hour1 = today.getHours();
			if (hour1<10)
				{
					hour1='';
				}
			else if (hour1<20)
				{
					hour1='1';
				}
			else
				{
					hour1='2';
				}
		var hour2= today.getHours();
			if (hour2<10)
				{	
					hour2=hour2;
				}
			else if (hour2<20)
				{	
					hour2=hour2-10;
				}
			else
				{	
					hour2=hour2-20;
				}
		var minute1 = today.getMinutes();
			if (minute1<10)
				{
					minute1='0';
				}
			else if (minute1<20)
				{
					minute1='1';
				}	
			else if (minute1<30)
				{
					minute1='2';
				}
			else if (minute1<40)
				{
					minute1='3';
				}
			else if (minute1<50)
				{
					minute1='4';
				}
			else
				{
					minute1='5'
				}
	
		var minute2 = today.getMinutes();
		
			 if (minute2<10)
				{
					minute2=minute2;
				}
			else if (minute2<20)
				{
					minute2=minute2-10;
				}
			else if (minute2<30)
				{
					minute2=minute2-20;
				}	
			else if (minute2<40)
				{
					minute2=minute2-30;
				}
			else if (minute2<50)
				{
					minute2=minute2-40;
				}
			else
				{
					minute2=minute2-50;
				}
		document.getElementById("hour1").innerHTML = hour1;
		document.getElementById("hour2").innerHTML = hour2;
		document.getElementById("minute1").innerHTML = minute1;
		document.getElementById("minute2").innerHTML = minute2;
		setTimeout("clock()",1000);
		
	}