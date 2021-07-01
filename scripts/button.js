function first(){
  var x= document.getElementById("firstbtn");
  x.value='my val';
  x.innerHTML=" My name is Yuri Chen and I'm a Computer Science major and Art and Design minor at the University of Michigan. I'll be graduating in April 2023. I'm currently working on a script that will help me balance teams as the League of Legends community director at UMich.";
  var y=document.getElementById("secondbtn");
  y.style.display='block';
  var z=document.getElementById("sneak");
  z.style.display='block';
}

function second(){
  var x= document.getElementById("secondbtn");
  x.value='my val';
  x.innerHTML="Besides classes, I am also part of a volunteer program called Center for Sucess in Detroit that helps increase literacy in children. I love to help people and hope that my work will be about making things easier and more accessible for the rest of the population.";
  var y=document.getElementById("thirdbtn");
  y.style.display='block';
  var z=document.getElementById("sneak");
  z.src="../assets/email.png";
}

function third(){
  var x= document.getElementById("thirdbtn");
  x.value='my val';
  x.innerHTML="In my free time, I love to make art. It keeps me thinking creatively when in a static classes about computer science. I also like running outside, doing jigsaw puzzels, knitting, learning about video game design, and making music. ";
  var z=document.getElementById("sneak");
  z.src="../assets/linkedin.png";
}


var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

  
var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}