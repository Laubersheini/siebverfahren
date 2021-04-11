var numberGrid = document.getElementById("numberGrid")
let numberAmmount = 1000

for(let i=1;i<=numberAmmount;i++){
  let node = document.createElement("div")
  node.classList.add("numberGridItem")
  let text = document.createTextNode(i)
  node.appendChild(text)
  numberGrid.append(node)
}



var nodes = document.getElementsByClassName("numberGridItem")
nodes[0].style.backgroundColor = "grey"
var numbersCrossed = [];
var colorAmmount = 0;

let squareroot = Math.sqrt(numberAmmount)
for(let i=2;i<=squareroot;i++){
  if(!numbersCrossed[i]){
    for(let j= 2*i;j<=numberAmmount;j+=i){
      console.log(i);

      if(!numbersCrossed[j]){
      nodes[j-1].style.backgroundColor ="rgba("+colorAmmount*25+",0,100,1)"
      }
      numbersCrossed[j] = true;
    }
    colorAmmount++
  }

}
