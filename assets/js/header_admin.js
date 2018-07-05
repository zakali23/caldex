
//"use strict";

var Dashboard = function () {
    var global = {
        tooltipOptions: {
            placement: "right"
        },
        menuClass: ".c-menu"
    };

    var menuChangeActive = function menuChangeActive(el) {
        var hasSubmenu = $(el).hasClass("has-submenu");
        $(global.menuClass + " .is-active").removeClass("is-active");
        $(el).addClass("is-active");

        // if (hasSubmenu) {
        //     $(el).find("ul").slideDown();
        // }
    };

    var sidebarChangeWidth = function sidebarChangeWidth() {
        var $menuItemsTitle = $("li .menu-item__title");

        $("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
        $(".hamburger-toggle").toggleClass("is-opened");

        if ($("body").hasClass("sidebar-is-expanded")) {
            $('[data-toggle="tooltip"]').tooltip("destroy");
        } else {
            $('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
        }
    };

    return {
        init: function init() {
            $(".js-hamburger").on("click", sidebarChangeWidth);

            $(".js-menu li").on("click", function (e) {
                menuChangeActive(e.currentTarget);
            });

            $('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
        }
    };
}();

Dashboard.init();
//# sourceURL=pen.js

$(document).ready(function()
{
    $("li#MC").click(function() {

        $("#Utilisateurs").css({"display": "none"});
        $("#Mes-Consos").show();
        $("#GestionConsommations").show();
        $("#ConsultParc").css({"display": "none"});
        $("#Gestion-Materiel").css({"display": "none"});
        $("#Gestion-Parc").css({"display": "none"});
        $("#Gestion-Utilisateurs").css({"display": "none"});


    });


    $("li#GPU").click(function() {

        $("#Utilisateurs").show();
        $("#Mes-Consos").css({"display": "none"});
        $("#GestionConsommations").css({"display": "none"});
        $("#ConsultParc").css({"display": "none"});
        $("#Gestion-Materiel").css({"display": "none"});
        $("#Gestion-Parc").css({"display": "none"});
        $("#Gestion-Utilisateurs").show();


    });

    $("li#GPI").click(function() {

        $("#Utilisateurs").css({"display": "none"});
        $("#Mes-Consos").css({"display": "none"});
        $("#GestionConsommations").css({"display": "none"});
        $("#ConsultParc").show();
        $("#Gestion-Materiel").css({"display": "none"});
        $("#Gestion-Parc").show();
        $("#Gestion-Utilisateurs").css({"display": "none"});


    });
    $("li#GM").click(function() {

        $("#Utilisateurs").css({"display": "none"});
        $("#Mes-Consos").css({"display": "none"});
        $("#GestionConsommations").css({"display": "none"});
        $("#ConsultParc").css({"display": "none"});
        $("#Gestion-Materiel").show();
        $("#Gestion-Parc").css({"display": "none"});
        $("#Gestion-Utilisateurs").css({"display": "none"});

    });
    /* ------ List Immeubles -------------   */


    $("#btnListImmeuble").click(function() {

        $("#cardForUser").css({"display": "none"});
        $("#listFromCopro").css({"display": "none"});
        $("#listFromLot").css({"display": "none"});
        $("#listFromImmeuble").show();
        $("#cardForImmeuble").css({"display": "none"});


    });
    $("#scrollList").click(function() {

        $("#cardForImmeuble").css({"display": "flex"});
        $("#scrollList").css({"display": "none"});
        $("#scrollUp").show();

    });

    $("#scrollUp").click(function() {

        $("#cardForImmeuble").css({"display": "none"});
        $("#scrollList").show();
        $("#scrollUp").css({"display": "none"});


    });

    /* ------ List Lots -------------   */
    $("#btnListLot").click(function() {

        $("#cardForUser").css({"display": "none"});
        $("#listFromCopro").css({"display": "none"});
        $("#listFromLot").show();
        $("#listFromImmeuble").css({"display": "none"});
        $("#cardForLot").css({"display": "none"});


    });
    $("#scrollDownLot").click(function() {

        $("#cardForLot").css({"display": "flex"});
        $("#scrollDownLot").css({"display": "none"});
        $("#scrollUpLot").show();


    });
    $("#scrollUpLot").click(function() {

        $("#cardForLot").css({"display": "none"});
        $("#scrollDownLot").show();
        $("#scrollUpLot").css({"display": "none"});


    });

    /* ------ List rooms -------------   */


    $("#btnListCopro").click(function() {

        $("#cardForUser").css({"display": "none"});
        $("#listFromCopro").show();
        $("#listFromLot").css({"display": "none"});
        $("#listFromImmeuble").css({"display": "none"});


    });


});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        trigger : 'hover',
        html: true,
        content: function(){
            return $('#profil').html();
        }
    });

    $("#btnAddLot").click(function() {

        $("#addFormLot").show();
        $("#btnAddLot").hide();

    });
});

$(document).ready(function(){
    $('#appbundle_radiateur_type').change(function() {
        if ($(this).val() === 'Fonte') {
            $('#appbundle_radiateur_profondeur').val('null');
        }
        else if ($(this).val() === 'type10') {
            $('#appbundle_radiateur_profondeur').val("1 panneau");
        }
        else if ($(this).val() === 'type11') {
            $('#appbundle_radiateur_profondeur').val("1 panneau 1rang d'ailettes");
        }
        else if ($(this).val() === 'type20') {
            $('#appbundle_radiateur_profondeur').val("2 panneaux");
        }
        else if ($(this).val() === 'type21') {
            $('#appbundle_radiateur_profondeur').val("2 panneaux 1 rang d'ailettes");
        }
        else if ($(this).val() === 'type22') {
            $('#appbundle_radiateur_profondeur').val("2 panneaux 2 rangs d'ailettes");
        }
        else if ($(this).val() === 'type30') {
            $('#appbundle_radiateur_profondeur').val("3 panneaux");
        }
        else if ($(this).val() === 'type32') {
            $('#appbundle_radiateur_profondeur').val("3 panneaux 2 rangs d'ailettes");
        }
        else {
            $('#appbundle_radiateur_profondeur').val('choisir');
        }

    });
});


// changement dynamique du pouvoir émissif : Fonte

$(document).ready(function() {


    function regimeEmissif() {
        var hauteur = $('#appbundle_radiateur_hauteur').val();
        var type = $('#appbundle_radiateur_type').val();
        var profondeur = $('#appbundle_radiateur_profondeur').val();

        if (hauteur === '0.3') {
            if( type === "Fonte" ){
                if( profondeur === '15' ){
                    $('#appbundle_radiateur_regimeDimension').val(3290);
                }
                else if ( profondeur === '25' ){
                    $('#appbundle_radiateur_regimeDimension').val(4825);
                }
                else if ( profondeur === '35' ){
                    $('#appbundle_radiateur_regimeDimension').val(7090);
                }
            }
        }
        else if (hauteur === '0.6') {
            if( type === "Fonte" ){
                if ( profondeur === "15" ){
                    $('#appbundle_radiateur_regimeDimension').val(3165);
                }
                else if ( profondeur === '25' ){
                    $('#appbundle_radiateur_regimeDimension').val(4645);
                }
                else if ( profondeur === '35' ){
                    $('#appbundle_radiateur_regimeDimension').val(6820);
                }
            }
        }
        if (hauteur === '0.8') {
            if( type === "Fonte") {
                if( profondeur === '15' ){
                    $('#appbundle_radiateur_regimeDimension').val(3080);
                }
                else if ( profondeur === '25' ){
                    $('#appbundle_radiateur_regimeDimension').val(4525);
                }
                else if ( profondeur === '35' ){
                    $('#appbundle_radiateur_regimeDimension').val(6645);
                }
            }

        }
    }

    $('#appbundle_radiateur_type').on('input', regimeEmissif);
    $('#appbundle_radiateur_hauteur').on('input', regimeEmissif);
    $('#appbundle_radiateur_profondeur').on('input', regimeEmissif);

});


// changement dynamique du pouvoir émissif : Acier

$(document).ready(function() {


    function regimeEmissif() {
        var hauteur = $('#appbundle_radiateur_hauteur').val();
        var type = $('#appbundle_radiateur_type').val();

        if (hauteur === '0.3') {
            if( type === "type10" ){
                $('#appbundle_radiateur_regimeDimension').val(1330);
            }
            if( type === "type11" ){
                $('#appbundle_radiateur_regimeDimension').val(1880);
            }
            if( type === "type20" ){
                $('#appbundle_radiateur_regimeDimension').val(2150);
            }
            if( type === "type21" ){
                $('#appbundle_radiateur_regimeDimension').val(2780);
            }
            if( type === "type22" ){
                $('#appbundle_radiateur_regimeDimension').val(3210);
            }
            if( type === "type30" ){
                $('#appbundle_radiateur_regimeDimension').val(3045);
            }
            if( type === "type32" ){
                $('#appbundle_radiateur_regimeDimension').val(4185);
            }
        }
        else if (hauteur === '0.6') {
            if( type === "type10" ){
                $('#appbundle_radiateur_regimeDimension').val(1200);
            }
            if( type === "type11" ){
                $('#appbundle_radiateur_regimeDimension').val(1720);
            }
            if( type === "type20" ){
                $('#appbundle_radiateur_regimeDimension').val(1950);
            }
            if( type === "type21" ){
                $('#appbundle_radiateur_regimeDimension').val(2510);
            }
            if( type === "type22" ){
                $('#appbundle_radiateur_regimeDimension').val(2900);
            }
            if( type === "type30" ){
                $('#appbundle_radiateur_regimeDimension').val(2765);
            }
            if( type === "type32" ){
                $('#appbundle_radiateur_regimeDimension').val(3800);
            }
        }
        if (hauteur === '0.8') {
            if( type === "type10" ){
                $('#appbundle_radiateur_regimeDimension').val(1170);
            }
            if( type === "type11" ){
                $('#appbundle_radiateur_regimeDimension').val(1685);
            }
            if( type === "type20" ){
                $('#appbundle_radiateur_regimeDimension').val(1910);
            }
            if( type === "type21" ){
                $('#appbundle_radiateur_regimeDimension').val(2465);
            }
            if( type === "type22" ){
                $('#appbundle_radiateur_regimeDimension').val(2840);
            }
            if( type === "type30" ){
                $('#appbundle_radiateur_regimeDimension').val(2710);
            }
            if( type === "type32" ){
                $('#appbundle_radiateur_regimeDimension').val(3730);
            }

        }
    }

    $('#appbundle_radiateur_type').on('input', regimeEmissif);
    $('#appbundle_radiateur_hauteur').on('input', regimeEmissif);

});

// Calcule du pouvoir émissif

$(document).ready(function(){
    function puissanceDelta() {
        var hauteur =  $('#appbundle_radiateur_hauteur').val();
        var longueur =  $('#appbundle_radiateur_longueur').val();
        var regime = $('#appbundle_radiateur_regimeDimension').val();
        if (hauteur !== false  && longueur !== false ){
            var res = Math.round(hauteur * longueur * regime) ;

            $('#appbundle_radiateur_puissanceDeltaT50').val(res);
        }
    }
    $('#appbundle_radiateur_hauteur' ).on('input', puissanceDelta);
    $('#appbundle_radiateur_longueur' ).on('input', puissanceDelta);
    $('#appbundle_radiateur_regimeDimension' ).on('input', puissanceDelta);
    $('#appbundle_radiateur_profondeur' ).on('input', puissanceDelta);
    $('#appbundle_radiateur_type' ).on('input', puissanceDelta);


<<<<<<< HEAD
});


/*$('#appbundle_radiateur_hauteur').change(function () {
    if ( $(this).val() === '0.3') {
        $('#appbundle_radiateur_regimeDimension').val(3325);
    }
    else if ( $(this).val() === '0.6') {
        $('#appbundle_radiateur_regimeDimension').val(3185);
    }
    else if ( $(this).val() === '0.8') {
        $('#appbundle_radiateur_regimeDimension').val(3105);
    }
});




});*/
=======
});
>>>>>>> aa3868c6eec46aa782fdc55c4a3d9dd8834e7a4f
