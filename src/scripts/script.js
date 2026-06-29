$(document).ready(function () {
  $("#hamburguer").on("click", function () {
    $("#mobileNavigationLinks").toggleClass("active");
    $("#mobileDefaultButton").toggleClass("active");
    $("#hamburguer").find("i").toggleClass("fa-x");
  });
});
