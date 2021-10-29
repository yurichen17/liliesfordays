function first(){
  var x= document.getElementById("firstbtn");
  x.value='my val';
  x.innerHTML="My name is Yuri Chen and I'm majoring in Computer Science and minoring in Art and Design at the University of Michigan. I'll be graduating in April 2023. I'm currently taking web development classes this semester. I have ideas of how to turn my Team Balancer project into more of a full-stack project, and will be starting that soon!";
  var y=document.getElementById("secondbtn");
  y.style.display='block';
  var z=document.getElementById("aboutpic");
  z.src="../assets/peach_umich.jpg";
}

function second(){
  var x= document.getElementById("secondbtn");
  x.value='my val';
  x.innerHTML="Besides classes, I am also a mentor for Renew CS. This group focuses on supporting undergraduate women in computer science by providing mentoring sessions weekly, and longer skill sessions on Sundays. I love to help people and hope that my work will be about making things easier and more accessible for the rest of the population.";
  var y=document.getElementById("thirdbtn");
  y.style.display='block';
  var z=document.getElementById("aboutpic");
  z.src="../assets/peach_book.jpg";
}

function third(){
  var x= document.getElementById("thirdbtn");
  x.value='my val';
  x.innerHTML="In my free time, I love to make art. It keeps me thinking creatively when in a static classes about computer science. I also like running outside, doing jigsaw puzzels, knitting, learning about video game design, and making music. ";
  var z=document.getElementById("aboutpic");
  z.src="../assets/peach_brush.jpg";
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