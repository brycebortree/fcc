
function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var newString = "";
  
  if(vowels.indexOf(str[0]) !== -1){
    newString = str + "way";
    return newString;
  } else {
    str = str.split("");
    var temp = str[0] + "ay";
    str = str.join("");
    newString = str.substr(1, str.length) + temp;
    return newString;
  }

  
}

translatePigLatin("consonant");
