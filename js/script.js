
function drawTree (n) {
	for (var i = 1 ; i <= n ; i++) {
  		var star = ' ';
  		for (var k = (2*n-2)/2; k >= i; k--) {
  			star += ' '; 
  		} 
  		for (var j = 1; j <= (2*i-1); j++) {
  			star += '*';  
        }
        console.log(star);
    }
}

drawTree(prompt("Jak duża ma być choinka? Wpisz liczbę całkowitą"));
console.log(drawTree());


