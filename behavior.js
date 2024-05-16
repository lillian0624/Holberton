var thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function () {
  var isSmall = thumbnailElement.classList.contains("small");

  if (isSmall) {
    thumbnailElement.classList.remove("small");
  } else {
    thumbnailElement.classList.add("small");
  }
});
