

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar").slideToggle("slow").addClass("mobile-menu");
        $(".fa-solid").toggleClass("fa-xmark");
    });
});

var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
