$(document).ready(function () {
    $("#name").focus();
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
                    console.log("contraseña incorrecta");
                } else {
                    $(".principal").html('<input type="button" class="button" id="top10" value="Top 10"><br><br>');
                }
                $("#top10").click(function () {
                    var xmlhttp = new XMLHttpRequest();
                    
                    var informacionUsuario = "&rank=rank";
                    xmlhttp.onreadystatechange = function() {
                    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        //var datos = JSON.parse(xmlhttp.responseText);
                        var mensaje =  xmlhttp.responseText;
                        console.log(mensaje);
                        $(".principal").html(mensaje);
                        $(".principal").css("padding",0);
                    }
                }
                xmlhttp.open("POST", "classicbnet.php" , true);
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
