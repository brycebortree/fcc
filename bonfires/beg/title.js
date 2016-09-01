//for loop solution
//used splice instead of slice
//didn't lower case intially
function titleCase(str) {
  str = str.split(" ");
  
  for(var i = 0; i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].slice(1, str[i].length).toLowerCase();
  }
  
  return str.join(" ");
}

titleCase("I'm a little tea pot");


//intermediate solution:  solve w/ map
//doesn't work for lowercasing rest
function titleCase(str){
  var arr = str.split(" ");
  
  var ans = arr.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  
  return ans.join(" ");
}

titleCase("I'm a little teapot");
