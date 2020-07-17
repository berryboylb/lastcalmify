const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


$(function() {
  $('form').submit(function(e) {

    //prevent default form submission
    e.preventDefault();

   //ajax form submission
      $.ajax({
          type: 'POST',
          url: 'form.php',
          data: $(this).serialize(),
          success: (message) => {
           // add an action to be carried out when submission is successful
            alert(`${message}`)
          },
          // add an action to be carried out when submission is successful
          error: (error) => {
            alert(`${error}`)
          }
      })
  }); 
})

 