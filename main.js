const button = document.getElementById("showTranslation");
const translation = document.querySelector(".translation");

translation.style.display = "none";

button.addEventListener("click", function () {

    translation.style.display = "block";

});