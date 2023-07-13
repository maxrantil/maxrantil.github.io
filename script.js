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
    window.location.hash = ''; // Remove the current hash
    window.location.hash = this.getAttribute('href');
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.querySelectorAll('a.link-external').forEach(link => {
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});