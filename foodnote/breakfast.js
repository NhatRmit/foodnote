 // Used to toggle the menu on small screens when clicking on the menu button
 function myFunction() {
     var x = document.getElementById("navDemo");
     if (x.className.indexOf("w3-show") == -1) {
         x.className += " w3-show";
     } else {
         x.className = x.className.replace(" w3-show", "");
     }
 }

 // When the user clicks anywhere outside of the modal, close it
 var modal = document.getElementById('ticketModal');
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
 const navSlide = () => {
     const menus = document.querySelector('.menus');
     const nav = document.querySelector('.nav-links');
     const navLinks = document.querySelectorAll('.nav-links li');


     menus.addEventListener('click', () => {
         //Toggle Nav
         nav.classList.toggle('nav-active');

         //Animation Links
         navLinks.forEach((link, index) => {
             if (link.style.animation) {
                 link.style.animation = '';
             } else {
                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
             }
         });
         //menus Animation
         menus.classList.toggle('toggle');
     });
 }

 navSlide();