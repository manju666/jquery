$(function () {
            var flag = true;
            $("#onoroff").click(function () {
                if (flag) {
                    var img = "img/off.jpg"
                    flag = false;
                } else {

                    var img = "img/download.jpg"
                    flag = true;
                }


                $("img").attr("src", img);


            });


            /*show hide example */


            $("#btnhide").click(function () {
                $("#randomtext").hide();

            });


            $("#btnshow").click(function () {
                $("#randomtext").show();
            });


            $("#btntgle").click(function () {
                $("#randomtext").toggle();

            });


            $("#fadein").click(function () {
                $("#box").fadeIn();

            });


            $("#fadeout").click(function () { 
                $("#box").fadeOut();

               });
    
    
                $("#fadetgle").click(function () {
                    $("#box").toggle();


                });
        });
