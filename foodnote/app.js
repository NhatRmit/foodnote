const navSlide = () => {
    const menus = document.querySelector('.menus');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    menus.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animation Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //menus Animation
        menus.classList.toggle('toggle');
    });
} 

navSlide();


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function(){
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#cartoonVideo").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#myModal").on('hide.bs.modal', function(){
      $("#cartoonVideo").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#myModal").on('show.bs.modal', function(){
      $("#cartoonVideo").attr('src', url);
  });
});

$(function() {
  for (var i = 0; i < 100; i++) {
      $('.modal-body').append(i + '<br>');
  }
});

