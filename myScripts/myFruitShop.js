let counters=[0,0,0,0,0,0]
let gTotal=0
function addtoCart(item){
    switch(item){
      case 0 : document.getElementById("qtty"+item).innerHTML=++counters[item]
               document.getElementById("amount"+item).innerHTML=counters[item]*allFruits[item].price
               gTotal+=allFruits[item].price
               break;  
      case 1 : document.getElementById("qtty"+item).innerHTML=++counters[item]
      document.getElementById("amount"+item).innerHTML=counters[item]*allFruits[item].price
      gTotal+=allFruits[item].price
      break;  
      case 2 :document.getElementById("qtty"+item).innerHTML=++counters[item]
      document.getElementById("amount"+item).innerHTML=counters[item]*allFruits[item].price
      gTotal+=allFruits[item].price
      break;  
      case 3 :document.getElementById("qtty"+item).innerHTML=++counters[item]
      document.getElementById("amount"+item).innerHTML=counters[item]*allFruits[item].price
      gTotal+=allFruits[item].price
      break;  
      case 4 :  
      document.getElementById("qtty"+item).innerHTML=++counters[item]
      document.getElementById("amount"+item).innerHTML=counters[item]*allFruits[item].price
      gTotal+=allFruits[item].price
      break;  
      case 5 :  
      document.getElementById("qtty"+item).innerHTML=++counters[item]
      document.getElementById("amount"+item).innerHTML=counters[item]*allFruits[item].price
      gTotal+=allFruits[item].price
      break; 
    }
    document.getElementById("gtotal").innerHTML=gTotal
}
for(let i=0;i<allFruits.length;i++)
 {
       let el=document.createElement("li") //el is a new li
       el.setAttribute("id",i)
       el.innerHTML="<div style='display:flex;flex-direction:row'><span style='display:inline-block;width:160px;margin-top:50px'>"+
       allFruits[i].fruitName+" "+
       allFruits[i].price+"  "+allFruits[i].color+"</span>"+
       "<img src='"+allFruits[i].imageUrl+"' width='100px' height='100px'>"+
       "<button id='buy' onclick='addtoCart("+i+")'>Buy</button>"+
       "<button id='cancel'>Cancel</button>"+
       "<span style='font-weight:bold;font-style:arial;display:flex;margin-top:50px;margin-left:30px;color:blue; width:200px'><div id='qtty"+i+"'>0</div>*"+allFruits[i].price+"=<div id='amount"+i+"'>0</div></span></div>"
       //Add el under unorderlist ul
       document.getElementById("fruitList").appendChild(el)
 }

                  