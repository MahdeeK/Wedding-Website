document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-text a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          } else {
              console.error('Target element not found:', targetId);
          }
      });
  });
});

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active');
});

var countDownDate = new Date("July 13, 2024 18:00:00").getTime();
var x = setInterval(function() {

   var now = new Date().getTime();

   var distance = countDownDate - now;

   if (distance <= 0) {
       clearInterval(x);
       document.getElementById("countdown").style.display = "none";
       document.getElementById("countdown-message").style.display = "block";
       return;
   }

   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = formatTime(days);
   document.getElementById("hours").innerHTML = formatTime(hours);
   document.getElementById("minutes").innerHTML = formatTime(minutes);
   document.getElementById("seconds").innerHTML = formatTime(seconds);

}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
 
 // Get all accordion buttons
 var accordionBtns = document.querySelectorAll('.accordion-btn');
              
 // Add event listener to each accordion button
 accordionBtns.forEach(function(btn) {
   btn.addEventListener('click', function() {
     // Toggle the active class on the clicked button
     this.classList.toggle('active');

     // Get the content associated with the button
     var content = this.nextElementSibling;

     // Toggle the active class on the content
     content.classList.toggle('active');

     // Collapse other accordion sections if open
     var allContent = document.querySelectorAll('.accordion-content');
     allContent.forEach(function(item) {
       if (item !== content && item.classList.contains('active')) {
         item.classList.remove('active');
         item.previousElementSibling.classList.remove('active');
       }
     });
   });
 });

// Function to scroll to the top of the page
function topFunction() {
  var wrapper = document.querySelector('.wrapper');
  // Smooth scroll to the top of the wrapper
  wrapper.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Function to update the digital clock
function updateClock() {
  // Get the current date and time
  var now = new Date();

  // Format hours, minutes, and seconds with leading zeros
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');

  // Update the time in the HTML element
  document.getElementById('local-time').textContent = hours + ':' + minutes;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function once to ensure the clock is immediately displayed
updateClock();
