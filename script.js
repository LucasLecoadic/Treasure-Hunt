$(document).ready(function() {

    $("#hiddenPic").hide();
    $(".hooray").hide();

    $("button").click(function(){
    $("#secretMessage").append("Now double click here...");
    
    });
    $("#secretMessage").dblclick(function(){
    $("#hiddenPic").show();
    $("#secretMessage").text("Boop one of the dogs");
    });
    $("#hiddenPic").hover(function(){
    $("#secretMessage").text("Nice one! Cute dogs right? Now double click the ruby crystal in the treasure chest");
    });
    $("#treasure").dblclick(function(){
    $("body").css("background", "red");
    });
    $("h1").click(function(){
    $("p").hide();
    $("img").hide();
    $("button").hide();
    $(".hooray").show();
    $("body").css("background-color","white");  
    });
    
    $(".hidebutton").click(function(){
     $("#treasure").fadeToggle(); 
    });

});
