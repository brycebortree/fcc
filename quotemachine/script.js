var digiRay = [
  "Sora Takenouchi: Too bad your brain isn't as big as your hair.",
  "Tentomon: The name's Mon... Tento Mon.",
  "Matt: I've been living a lie.",
  "Gabumon: You're not a natural blonde?",
  "Kari: What could be worse than living your life without a single friend?",
  "Gatomon: A litter box full of fly paper.",
  "Sora: Now that you boys have holes in your heads, maybe your brains will get more oxygen.",
  "Recording on telephone: This number only exists in your imagination. Please hang up and don't call back.",
  "T.K.: What's more boring? Paint drying or math?",
  "Leomon: [dying] Why... can't you see? Why won't you try to understand the truth?",
  "Joe: I wanted to go to summer school but would my parents listen to me? NO.",
  "Recording over telephone: At the tone, the time will be exactly 45 miles per hour and 90 seconds.",
  "Ken: [reading] Dear Ken, I hope that someday you'll join the Digidestined. Signed Yolei."
]


var click = document.getElementById("clickEvent");

click.addEventListener('click', function(){
  var rand = digiRay[Math.floor(Math.random() * digiRay.length)];

  console.log(rand); document.getElementById("quote").innerHTML = rand;
});




