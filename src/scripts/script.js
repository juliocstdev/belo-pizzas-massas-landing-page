$(document).ready(function () {
  $("#hamburguer").on("click", function () {
    $("#mobileNavigationLinks").toggleClass("active");
    $("#mobileDefaultButton").toggleClass("active");
    $("#hamburguer").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItens = $(".link");

  $(window).on("scroll", function () {
    const header = $("header");
    const scrollPosicao = $(window).scrollTop() - header.outerHeight();

    let sectionIndex = 0;

    if(scrollPosicao <= 0) {
        header.css("box-shadow", "none");
    } else {
        header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.51)");
    }

    sections.each(function(i) {
        const section = $(this);

        const topSection = section.offset().top - 96;
        const botSection = topSection + section.outerHeight();

        if(scrollPosicao > topSection && scrollPosicao < botSection) {
            sectionIndex = i;
            return false;
        }
    });

    navItens.removeClass("bar");
    $(navItens[sectionIndex]).addClass("bar");
  });

  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%"
  }); 

  ScrollReveal().reveal(".prato", {
    origin: "left",
    duration: 2000,
    distance: "20%"
  }); 

  ScrollReveal().reveal("#chefSection", {
    origin: "left",
    duration: 1000,
    distance: "20%"
  }); 

  ScrollReveal().reveal(".depoimento", {
    origin: "right",
    duration: 1000,
    distance: "20%"
  }); 
});
