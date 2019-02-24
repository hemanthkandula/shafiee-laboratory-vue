$(document).ready(function () {
        $("card__link--icon-abstract").click(function (event) {
            alert(event.target.id);
        });
    }
);


function abstractselect(el) {


    // var pub   = document.getElementById('pub1')
    // alert(el.target.id);
    if (!jQuery(el).hasClass("is-active")) {
        jQuery(el).addClass("is-active");
    } else jQuery(el).removeClass("is-active");


}


var $menu = $('#header__nav');

$(document).mouseup(function (e) {


    if (!$menu.is(e.target) // if the target of the click isn't the container...
        && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#headerone').removeClass('is-open');


    }
});


function changeActive() {


    var li = document.getElementsByTagName("header");

    if (li[0].classList.contains("is-open")) {
        li[0].classList.remove("is-open");

    } else {
        li[0].classList.add("is-open");
    }
}