$(document).ready(function () {
  $("#openSidebar").click(function (e) {
    e.stopPropagation();
    $("#sidebar").slideToggle(300)
  });

  $("#closeSidebar").click(function () {
    $("#sidebar").slideUp(300);
  });

  $("html").click(function () {
    $("#sidebar").slideUp(300);
  });

});

// Image Gallery
function onClick(element) {
  document.getElementById("galleryimgs").src = element.src;
  document.getElementById("modalgallery").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}