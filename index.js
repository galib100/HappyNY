var nameSec =  document.getElementById('name')
var name = prompt("What's Your Name ?")
nameSec.innerHTML=`<h3>Hey ${name} </h3>`

anime.timeline({loop: true})
.add({
targets: '.ml15 .word',
scale: [14,1],
opacity: [0,1],
easing: "easeOutCirc",
duration: 800,
delay: (el, i) => 800 * i
}).add({
targets: '.ml15',
opacity: 0,
duration: 1000,
easing: "easeOutExpo",
delay: 1000
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });