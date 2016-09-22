// ugly if else
// function pairElement(str) {
//   var bigArr = [];
    
  
//   var split = str.split("");
  
//   for(var i = 0; i < split.length; i++){
//     if(str[i] === "G"){
//       bigArr.push(["G", "C"]);
//     } else if (str[i] === "C") {
//       bigArr.push(["C", "G"]);
//     } else if (str[i] === "A"){
//       bigArr.push(["A", "T"]);
//     } else {
//       bigArr.push(["T", "A"]);
//     }
//   }

//   return bigArr;
// }

// pairElement("GCG");


// prettier switch

function pairElement(str) {
  var bigArr = [];
    
  
  var split = str.split("");
  
  for(var i = 0; i < split.length; i++){
    
    switch(str[i]) {
    case "G":
        bigArr.push(["G", "C"]);
        break;
    case "C":
        bigArr.push(["C", "G"]);
        break;
    case "A":
        bigArr.push(["A", "T"]);
        break;
    case "T":
        bigArr.push(["T", "A"]);
        break;
    default: break;
    }
  }

  return bigArr;
}

pairElement("GCG");

//intermediate: map object