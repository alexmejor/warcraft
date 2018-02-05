$(document).ready(function () {
    $("#name").focus();
    $("#newuser").click(function() {
        $(".principal").html("<img src='http://rocarena.com/np/modules/Upload/uploads/59c3c0348520ess.png'>");
        $(".principal").css("background-color","black");
    });
    
    $("#boton").click(function () {
        $.ajax({
            url: "http://rocarena.com/np/mobile/login.php",
            type: "POST",
            data: {
                username: $("#name").val(),
                password: $("#password").val()
            },
            dataType: "json",
            success: function (respuesta) {
                if (respuesta.error) {
                    $("#info").html("<p style='color:red'>Incorrect Password</p>");
                } else {
                    $(".principal").html('<input type="button" class="button" id="top20" value="Top 20"><br><br>');
                    $(".principal").append("<div class='ranking'></div>");
                    $(".wc3logo").css("margin-bottom","25px");
                }
                $("#top20").click(function () {
                    var xmlhttp = new XMLHttpRequest();
                    
                    var informacionUsuario = "&rank=rank";
                    xmlhttp.onreadystatechange = function() {
                    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        //var datos = JSON.parse(xmlhttp.responseText);
                        var mensaje =  xmlhttp.responseText;
                        $(".ranking").html(mensaje).slideToggle();
                        var filaCampos = "<tr><td>Rank</td><td>Lvl</td><td>Clan</td><td>Race</td><td>Player</td></tr>";
                        $("table").eq(0).prepend(filaCampos);
                        $(".ranking").css("padding",0);
                        $(".principal").css("font-family","Roboto");
                    }
                }
                xmlhttp.open("POST", "http://alexdaw.ddns.net/ajax/warcraft/classicbnet.php" , true);
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlhttp.send(informacionUsuario);
//                    $.ajax({
//                        url: "classicbnet.php",
//                        type: "GET",
//                        data: {
//                            rank: ""
//                        },
//                        dataType: "text",
//                        success: function (respuesta) {
//                            $(".principal").html(respuesta);
//                            $(".principal").css("padding",0);
//                        }
//                    });
                });
            }
        });

    });
});