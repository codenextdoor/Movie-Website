const arrows = document.querySelectorAll(".arrow");

const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    movieLists[i].style.transform = "translateX(-100px)";
  });
  console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);
});
