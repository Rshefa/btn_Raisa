

const button = document.querySelector("button");
button.addEventListener("click", updateName);

var colors = [ "#eeef3e", "#f368e0", "#ee5253" ];
var i = 0;
 const btncolor = document.querySelector('color');
 btncolor.addEventListener("click", updateColor);



/* let btncolor = document.querySelector('color');
btncolor.addEventListener("click", btncolor.style.backgroundColor= '#337ab7'); */



function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

function updateColor(){
  i = 1 < colors.length ? ++i : 0;
  btncolor.document.querySelector("body").style.background = colors[i];
}



