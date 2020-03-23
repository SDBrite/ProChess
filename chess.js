<html>
<body>
<button onclick="queenLogic()">Start the Game</button>
<script>
function queenLogic() {
var pn = prompt("Enter the Initial position of Queen");
 if(pn.charCodeAt(1)<=56&&pn.charCodeAt(1)>=49&&pn.charCodeAt(0)>=65&&pn.charCodeAt(1)<=72)
 while(1)
  {
  var dn = prompt("Enter the Direction","(S,N,W,E,NE,NW,SE,SW)");
  var cn = parseInt(prompt("Enter the No of Steps","0<N<8"));

switch(dn) 
{  
	case "NE":
    
    if(((pn.charCodeAt(1))+cn)<=56&&(pn.charCodeAt(0)+cn)<=72){
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(1)),String.fromCharCode(pn.charCodeAt(1)+cn));
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(0)),String.fromCharCode(pn.charCodeAt(0)+cn));
    document.write(pn);
    document.write("\n");}
    
    else
    document.write("Invalid Move");
    break;
    
    case "NW":
    
    if((((pn.charCodeAt(1))+cn)<=56&&(pn.charCodeAt(0)-cn)<=72)){
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(1)),String.fromCharCode(pn.charCodeAt(1)+cn));
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(0)),String.fromCharCode(pn.charCodeAt(0)-cn));
    document.write(pn);
    document.write("\n");}  
    
    else
    document.write("Invalid Move");
    break;
    
    case "SE":
    
    if(((pn.charCodeAt(1))-cn)<=56&&(pn.charCodeAt(0)+cn)<=72){
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(1)),String.fromCharCode(pn.charCodeAt(1)-cn));
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(0)),String.fromCharCode(pn.charCodeAt(0)+cn));
    document.write(pn);
    document.write("\n");}
    
    else
    document.write("Invalid Move");
    break;
    
    case "SW":
    
    if(((pn.charCodeAt(1))-cn)<=56&&(pn.charCodeAt(0)-cn)<=72){
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(1)),String.fromCharCode(pn.charCodeAt(1)-cn));
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(0)),String.fromCharCode(pn.charCodeAt(0)-cn));
    document.write(pn);
    document.write("\n");}
    
    else
    document.write("Invalid Move");
    break;
    
  	case "N":
    
    if(((pn.charCodeAt(1))+cn)<=56){
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(1)),String.fromCharCode(pn.charCodeAt(1)+cn));
    document.write(pn);
    document.write("\n");}
    
    else
    document.write("Invalid Move");
    break;
    
    case "S":
    
    if(((pn.charCodeAt(1))-cn)<=56){
    pn=pn.replace(String.fromCharCode(pn.charCodeAt(1)),String.fromCharCode(pn.charCodeAt(1)-cn));
    document.write(pn);
    document.write("\n");}
    
    else
    document.write("Invalid Move");
    break;
    
    case "E":
    
    if(((pn.charCodeAt(0)+cn))<=72){
        pn=pn.replace(String.fromCharCode(pn.charCodeAt(0)),String.fromCharCode(pn.charCodeAt(0)+cn));
        document.write(pn);
        document.write("\n");}
      
    else
    document.write("Invalid Move");
    break;
    
    case "W":
    
    if(((pn.charCodeAt(0))-cn)<=72){
     pn=pn.replace(String.fromCharCode(pn.charCodeAt(0)),String.fromCharCode(pn.charCodeAt(0)-cn));
     document.write(pn);
     document.write("\n");}
    
    else
    document.write("Invalid Move");
    break;  
}
var exit = prompt("Do you wanna Continue (0/1)?","");
if(exit=='0')
break;
}
else
document.write("Invalid Move");
}
</script>
</body>
</html>