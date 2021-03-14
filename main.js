//ONDER DE TITLE in HTML//

	function achtergrondKleur () {
		var t = new Date().getHours();
		if (t < 15) {
		document.body.style.backgroundColor= "#56e5ff";
		} else if (t < 20) {
		document.body.style.backgroundColor=" #f873b1";
		} else {
		document.body.style.backgroundColor= "#30226f";
		}
	}
	
//ONDER CONTAINER DIV in HTML//

//Zet de klok in het canvas element//
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		var radius = canvas.height / 2;
		ctx.translate(radius, radius);
		radius = radius * 0.90
		setInterval(drawClock, 1000);

		//maak de fysieke klok//
		function drawClock() {
		  drawFace(ctx, radius);
		  drawNumbers(ctx, radius);
		  drawTime(ctx, radius);
		}

		function drawFace(ctx, radius) {
		  var grad;
		  ctx.beginPath();
		  ctx.arc(0, 0, radius, 0, 2*Math.PI);
		  ctx.fillStyle = 'white';
		  ctx.fill();
		  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
		  grad.addColorStop(0, '#999');
		  grad.addColorStop(0.5, 'white');
		  grad.addColorStop(1, '#999');
		  ctx.strokeStyle = grad;
		  ctx.lineWidth = radius*0.1;
		  ctx.stroke();
		  ctx.beginPath();
		  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
		  ctx.fillStyle = '#333';
		  ctx.fill();
		}
		//Zet nummers op de klok
		function drawNumbers(ctx, radius) {
		  var ang;
		  var num;
		  ctx.font = radius*0.15 + "px arial";
		  ctx.textBaseline="middle";
		  ctx.textAlign="center";
		  for(num = 1; num < 13; num++){
			ang = num * Math.PI / 6;
			ctx.rotate(ang);
			ctx.translate(0, -radius*0.85);
			ctx.rotate(-ang);
			ctx.fillText(num.toString(), 0, 0);
			ctx.rotate(ang);
			ctx.translate(0, radius*0.85);
			ctx.rotate(-ang);
		  }
		}
		//Bereken de huidige tijd//
		function drawTime(ctx, radius){
			var now = new Date();
			var hour = now.getHours();
			var minute = now.getMinutes();
			var second = now.getSeconds();
			//hour
			hour=hour%12;
			hour=(hour*Math.PI/6)+
			(minute*Math.PI/(6*60))+
			(second*Math.PI/(360*60));
			drawHand(ctx, hour, radius*0.5, radius*0.07);
			//minute
			minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
			drawHand(ctx, minute, radius*0.8, radius*0.07);
			// second
			second=(second*Math.PI/30);
			drawHand(ctx, second, radius*0.9, radius*0.02);
		}
		//teken de wijzers van de klok//
		function drawHand(ctx, pos, length, width) {
			ctx.beginPath();
			ctx.lineWidth = width;
			ctx.lineCap = "round";
			ctx.moveTo(0,0);
			ctx.rotate(pos);
			ctx.lineTo(0, -length);
			ctx.stroke();
			ctx.rotate(-pos);
		}
		
		//datum
		
				var today = new Date();
		var dd = today.getDate();

		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		if(dd<10) 
		{
			dd='0'+dd;
		} 

		if(mm<10) 
		{
			mm='0'+mm;
		} 
		today = mm+'-'+dd+'-'+yyyy;
		console.log(today);
	
//ONDER SPAN DATETIME


			
		