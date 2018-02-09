$(document).ready(function () {
    $("#rocrank").hide();
    $("#tftrank").hide();

    $("#name").focus();
    $("#newuser").click(function () {
        $.ajax({
            url: "http://alexdaw.ddns.net/ajax/warcraft/php/login.php",
            type: "POST",
            dataType: "json",
            data: {
                username: $("#name").val(),
                newuser: $("#newuser").val(),
                password: $("#password").val()
            },
            success: function (response) {
                if (response[0].error == "false") {
                    $("#info").html("<p style='color:green'>The user has been created!</p>");
                } else if (response[0].error == "empty") {
                    $("#info").html("<p style='color:red'>Please fill the fields</p>");
                } else if (response[0].error == "true") {
                    $("#info").html("<p style='color:red'>This name is already taken</p>");
                }
            }
        });
    });

    $("#logon").click(function () {
        $("#info").html("");
        $.ajax({
            url: "http://alexdaw.ddns.net/ajax/warcraft/php/login.php",
            type: "POST",
            data: {
                username: $("#name").val(),
                login: $("#logon").val(),
                password: $("#password").val()
            },
            success: function (response) {
                if (response[0].error == "false") {
                    $("#login").html('');
                    $(".wc3logo").css("margin-bottom", "25px");
                    $("#rocrank").show();
                    $("#tftrank").show();
                    $("#rocrank").click(function () {
                        var xmlhttp = new XMLHttpRequest();

                        var informacionUsuario = "&bnetrocranking=rank";
                        xmlhttp.onreadystatechange = function () {
                            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                                //var datos = JSON.parse(xmlhttp.responseText);
                                var mensaje = xmlhttp.responseText;
                                var filaCampos = "<tr><td>Rank</td><td>Lvl</td><td>Clan</td><td>Race</td><td>Player</td></tr>";
                                $("#login").html(mensaje);
                                $("table").eq(0).prepend(filaCampos);
                                $(".principal").css("font-family", "Roboto");
                                $(".principal").css("padding", '10px');
                            }
                        }
                        xmlhttp.open("POST", "http://alexdaw.ddns.net/ajax/warcraft/php/classicbnet.php", true);
                        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlhttp.send(informacionUsuario);
                    });
                    $("#tftrank").click(function () {
                        var xmlhttp = new XMLHttpRequest();

                        var informacionUsuario = "&bnettftranking=rank";
                        xmlhttp.onreadystatechange = function () {
                            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                                //var datos = JSON.parse(xmlhttp.responseText);
                                var mensaje = xmlhttp.responseText;
                                $("#login").html(mensaje);
                                var filaCampos = "<tr><td>Rank</td><td>Lvl</td><td>Clan</td><td>Race</td><td>Player</td></tr>";
                                $("table").eq(0).prepend(filaCampos);
                                $(".principal").css("font-family", "Roboto");
                                $(".principal").css("padding", '10px');
                            }
                        }
                        xmlhttp.open("POST", "http://alexdaw.ddns.net/ajax/warcraft/php/classicbnet.php", true);
                        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlhttp.send(informacionUsuario);
                    });
                } else if (response[0].error == "true") {
                    $("#info").html("<p style='color:red'>Incorrect Password</p>");
                }

            }
        });
        //ROCARENA LOGIN
        //        $.ajax({
        //            url: "http://rocarena.com/np/mobile/login.php",
        //            type: "POST",
        //            data: {
        //                username: $("#name").val(),
        //                password: $("#password").val()
        //            },
        //            dataType: "json",
        //            success: function (respuesta) {
        //                if (respuesta.error) {
        //                } else {
        //                    
        //                }
        //            }
        //        });

    });
});

function bnetRocRanking() {
    var xmlhttp = new XMLHttpRequest();

    var informacionUsuario = "&bnetrocranking=rank";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            //var datos = JSON.parse(xmlhttp.responseText);
            var mensaje = xmlhttp.responseText;
            var filaCampos = "<tr><td>Rank</td><td>Lvl</td><td>Clan</td><td>Race</td><td>Player</td></tr>";
            $("#login").html(mensaje);
            $("table").eq(0).prepend(filaCampos);
            $(".principal").css("font-family", "Roboto");
            $(".principal").css("padding", '10px');
        }
    }
    xmlhttp.open("POST", "http://alexdaw.ddns.net/ajax/warcraft/php/classicbnet.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(informacionUsuario);
}

function bnetTftRanking() {
    var xmlhttp = new XMLHttpRequest();

    var informacionUsuario = "&bnettftranking=rank";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            //var datos = JSON.parse(xmlhttp.responseText);
            var mensaje = xmlhttp.responseText;
            $("#login").html(mensaje);
            var filaCampos = "<tr><td>Rank</td><td>Lvl</td><td>Clan</td><td>Race</td><td>Player</td></tr>";
            $("table").eq(0).prepend(filaCampos);
            $(".principal").css("font-family", "Roboto");
            $(".principal").css("padding", '10px');
        }
    }
    xmlhttp.open("POST", "http://alexdaw.ddns.net/ajax/warcraft/php/classicbnet.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(informacionUsuario);
}
