let layer1 = document.getElementById('Layer1');
let layer2 = document.getElementById('Layer2');
let layer3 = document.getElementById('Layer3');
let layer4 = document.getElementById('Layer4');

window.addEventListener('scroll', function() {
    
    let value = window.scrollY;

    layer1.style.top = value * 0.7 + 'px';
    layer2.style.top = value * 0.4 + 'px';
    layer3.style.top = value * 0.2 + 'px';
    layer4.style.top = value * 0 + 'px';
})

document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".parallax").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateY(" + y + "px)";
  });
}