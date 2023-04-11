$(function(){

    // Código JS / jQuery
    



// var sexta = document.getElementById("teste").innerHTML;
// console.log(sexta);

// var sexta1= $("#teste").html( );
// console.log(sexta1);

// $("#esconder").click(function(){
// $(".exemplo").hide();
// });

// $("#ver").click(function(){
//     $(".exemplo").css("display","initial");
//     });

//     var bingo = $("#h").html();
//     console.log(bingo);

//   $("#h").html("Este é o novo titulo HTML");


// var verde= $("#paragrafo-html").html();
// console.log(verde);

// var link = $("#paragrafo-link").attr("href");
// confirm(link);

// $("#paragrafo-link").attr("href","http://www.df.senac.br");

// $("#mudar_imagem").click(function(){
//     $("#imagem_js").attr("src","/img/xp.jpg");
//     $("#mudar_imagem").hide();
//     $("#imagem_js").css("width","400px");
// })

// $("#mudar_paragrafo").click(function(){
//     $("#paragrafo-empty").empty();
//     $("#mudar_paragrafo").hide();
//     $("#mudar_remove").hide();
// })

// $("#mudar_remove").click(function(){
//     $("#paragrafo-empty").remove();
//     $("#mudar_remove").hide();
//     $("#mudar_paragrafo").hide();
// })
// var nome= $("#campo_nome").val();
// alert(nome);
// $("#campo_nome").val("Clenio Emidio");

  // Adicionar classe:
  $("#adicionar_classe").click(function(){
    $("#paragrafo-classes").addClass("styling");
});

// Remover classe:
$("#remover_classe").click(function(){
    $("#paragrafo-classes").removeClass("styling");
});

// Alternar classe:
$("#alternar_classe").click(function(){
    $("#paragrafo-classes").toggleClass("styling");
});

$( "#botao-esconder" ).click(function() {
    $(this).hide(1000, function(){
        $("#texto-escondido").show();
    });
    
});

$("#toggle-tab").click(function() {

    $("#tab-content").fadeToggle();
    $("#toggle-tab").toggleClass("flip");

});

$("#animar").click(function(){
    $("#quadrado").animate({
        width: '+=20px',
        height: '+=20px'
    });
}); 



});