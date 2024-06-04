let navbar = document.getElementById("sideNav");
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");


navbar.style.right = "-250px"
menuBtn.onclick = function(){
  if(navbar.style.right == "-250px"){
      navbar.style.right = "0";
      menu.src="close.png";
} else{
  navbar.style.right = "-250px";
  menu.src="Barber_Shop_img/menu.png";
}
  }