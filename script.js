document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  function adjustScrollPosition() {
    window.scrollBy(0, -40); // Adjust this value to match your header's height
  }

  window.addEventListener("hashchange", adjustScrollPosition);
  window.addEventListener("load", adjustScrollPosition);

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var id = this.getAttribute('href').substring(1); // Get the ID without '#'
      var targetElement = document.getElementById(id);
      var topOffset;

      switch (id) {
        case "home":
        case "work-experience":
          topOffset = 40;
          break;
        case "education":
          topOffset = 60;
          break;
        case "projects":
          topOffset = 110;
          break;
        default:
          topOffset = 40;
      }

      var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - topOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  document.querySelectorAll('a.link-external').forEach(link => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const navIcon = document.querySelector('.nav-icon');
  const nav = document.querySelector('.nav-right');

  navIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});