

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar").slideToggle("slow").addClass("mobile-menu");
        $(".fa-solid").toggleClass("fa-xmark");
    });
});
