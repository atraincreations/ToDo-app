var total = $("ul").children().length;
var done = 0;

init();

function init() {
    $("#add").hide();
    $("#total").text(total);
    $("#done").text(done);
    $("#celebrate").hide();
}

function doNotCelebrate() {
    if(done < total) {
        $("#celebrate").hide();
    }
}

function doCelebrate() {
    if(done === total) {
        $("#celebrate").show();
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

// add another ToDo List
$(".fa-plus-circle").click(function(){
    alert("add new list");
});

// expand text box
$(".fa-edit").click(function(){
    $("#add").fadeToggle();
});

// hover add todo icon
$(".fa-edit").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Add A ToDo');
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

$("#imageOne").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/rainbow-galaxy.jpeg')");
    $("body").css("background-size", "cover");
    $("body").css("-webkit-background-size", "cover");
    $("body").css("-moz-background-size", "cover");
    $("body").css("-o-background-size", "cover");
});

$("#imageTwo").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/unicorn-sky.jpeg')");
    $("body").css("background-size", "cover");
});

$("#imageThree").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/usa-space.jpg')");
    $("body").css("background-size", "cover");
});

$("#imageFour").click(function(){
    $("body").css("background", "url('assets/imgs/backgrounds/nasa.jpg')");
    $("body").css("background-size", "cover");
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