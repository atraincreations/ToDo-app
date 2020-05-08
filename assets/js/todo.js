var total = $("ul").children().length;
var done = 0;

init();

function init() {
    $("#add").hide();
    $("#total").text(total);
    $("#done").text(done);
    $("#celebrate").hide();
    $("#clear").hide();
}

function doNotCelebrate() {
    if(done < total) {
        $("#celebrate").hide();
        $("#clear").hide();
    }
}

function doCelebrate() {
    if(done === total && total !== 0) {
        $("#celebrate").show();
        $("#clear").show();
    }
}

// check off by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    if($(this).hasClass("completed")) {
        done++;
        $("#done").text(done);
        doCelebrate();
    } else {
        done--;
        $("#done").text(done);
        doNotCelebrate();
    }
    
}); 

// X to remove li
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        total--;
        $("#total").text(total);
        if($(this).hasClass("completed")){
            done--;
            $("#done").text(done);
        }
        doCelebrate();
        doNotCelebrate();
    });
    event.stopPropagation();
});

// add a new item
$("#add").keypress(function(event){
    if(event.which === 13){
        // grab text
        var todoText = $(this).val();
        $(this).val("")
        // create new li
        $("ul").append("<li><span class='can'><i class='far fa-times-circle'></i></span> " + todoText + "</li>")
        total++;
        $("#total").text(total);
        doNotCelebrate();
    }
});

// expand text box
$(".fa-edit").click(function(){
    $("#add").fadeToggle();
});

// hover add todo icon
$(".fa-edit").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Add A ToDo');
});

// Clear all list items
$("#clear").click(function(){
    $("li").fadeOut(500, function(){
        $("#add").fadeIn(1000);
        // the worst line of code but it's the only thing that seems to work? .vel() does nothing
        done = done - done;
        total = total - total;
        $("#total").text(total);
        $("#done").text(done);
        $("#celebrate").hide();
        $("#clear").hide();
    });
    
});
$("#clear").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Clear your list');
});

// hover remove todo icon
$("span").hover(function() {
    $(this).attr('title', 'Remove Task');
});

// hover todo to complete
$("li").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Click To Complete Task');
}, function() {
    $(this).css('cursor','auto');
});

// DRY this up a bit once you solve the scaling background issue
function styleOptionalBackground(){
    $("body").css("object-fit", "cover");
    $("body").css("height", "100%");
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-size", "cover");
    $("body, html").css("min-height", "100%");
    $("body").css("-webkit-background-size", "cover");
    $("body").css("-moz-background-size", "cover");
    $("body").css("-o-background-size", "cover");
}

// BAckground reset icon listener
$("#bgReset").click(function(){
    $("body").css("background", "-webkit-linear-gradient(to right, #F8FFAE, #43C6AC)");
    $("body").css("background", "linear-gradient(to right, #F8FFAE, #43C6AC)");
    $("body").css("background", "#43C6AC");
});
$("#bgReset").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Reset To Default');
});

// Font reset icon listener
$("#fontReset").click(function(){
    $("ul").css("font-family", "Roboto", "sans-serif");
    $("#add").css("font-family", "Roboto", "sans-serif");
    $(".title").css("font-family", "Roboto", "sans-serif");
    $(".title").css("width", "80%");
    $(".progress").css("font-family", "Roboto", "sans-serif");
    $("#clear").css("font-family", "Roboto", "sans-serif");
});
$("#fontReset").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Reset To Default');
});

// Background image listeners
$("#imageOne").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/rainbow-galaxy.jpeg')");
    styleOptionalBackground();
});

$("#imageTwo").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/unicorn-sky.jpeg')");
    styleOptionalBackground();
});

$("#imageThree").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/usa-space.jpg')");
    styleOptionalBackground();
});

$("#imageFour").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/nasa.jpg')");
    styleOptionalBackground();
});

// Font listeners
$("#specialElite").click(function(){
    $("ul").css("font-family", "Special Elite", "cursive");
    $("#add").css("font-family", "Special Elite", "cursive");
    $(".title").css("font-family", "Special Elite", "cursive");
    $(".title").css("width", "80%");
    $(".progress").css("font-family", "Special Elite", "cursive");
    $("#clear").css("font-family", "Special Elite", "cursive");
});
$("#indieFlower").click(function(){
    $("ul").css("font-family", "Indie Flower", "cursive");
    $("#add").css("font-family", "Indie Flower", "cursive");
    $(".title").css("font-family", "Indie Flower", "cursive");
    $(".title").css("width", "80%");
    $(".progress").css("font-family", "Indie Flower", "cursive");
    $("#clear").css("font-family", "Indie Flower", "cursive");
});
$("#luckiestGuy").click(function(){
    $("ul").css("font-family", "Luckiest Guy", "cursive");
    $("#add").css("font-family", "Luckiest Guy", "cursive");
    $(".title").css("font-family", "Luckiest Guy", "cursive");
    $(".title").css("width", "80%");
    $(".progress").css("font-family", "Luckiest Guy", "cursive");
    $("#clear").css("font-family", "Luckiest Guy", "cursive");
});
$("#lobster").click(function(){
    $("ul").css("font-family", "Lobster", "cursive");
    $("#add").css("font-family", "Lobster", "cursive");
    $(".title").css("font-family", "Lobster", "cursive");
    $(".title").css("width", "80%");
    $(".progress").css("font-family", "Lobster", "cursive");
    $("#clear").css("font-family", "Lobster", "cursive");
});
$("#permanentMarker").click(function(){
    $("ul").css("font-family", "Permanent Marker", "cursive");
    $("#add").css("font-family", "Permanent Marker", "cursive");
    $(".title").css("font-family", "Permanent Marker", "cursive");
    $(".title").css("width", "80%");
    $(".progress").css("font-family", "Permanent Marker", "cursive");
    $("#clear").css("font-family", "Permanent Marker", "cursive");
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}