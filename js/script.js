let correctas = [1,3,2,4];

//arreglo donde se guardean las respuestas del usaurio
let opcion_elegida=[];
let opcion_elegidaO=[];

let cantidad_correctas=0;

let cantidad_omitidas=0;



//funcion que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //Guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;
    opcion_elegidaO[num_pregunta] = seleccionada;


    id="p" + num_pregunta;
    
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "";
    labels[5].style.backgroundColor = "";
    labels[7].style.backgroundColor = "";
    labels[9].style.backgroundColor = "";

        seleccionada.parentNode.style.backgroundColor = "#B3B6B7";    
}


function corregir(pxPantalla){
    cantidad_correctas=0;
    cantidad_omitidas=0;
    num_pregunta=0;
    paes_puntos=250;
    for(i=0;i<correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
            opcion_elegidaO[i].parentNode.style.backgroundColor="#26F9CA";           
       }
       if(correctas[i]!=opcion_elegida[i]){
        opcion_elegidaO[i].parentNode.style.backgroundColor="#FC6A6A"; 
       }
             
      
    }
    $(".alternativa").removeClass("alternativa");
        
    document.getElementById("input01").disabled = true;
    document.getElementById("input02").disabled = true;
    document.getElementById("input03").disabled = true;
    document.getElementById("input04").disabled = true;
    document.getElementById("input05").disabled = true;
    document.getElementById("input06").disabled = true;
    document.getElementById("input07").disabled = true;
    document.getElementById("input08").disabled = true;
    document.getElementById("input09").disabled = true;
    document.getElementById("input10").disabled = true;
    document.getElementById("input11").disabled = true;
    document.getElementById("input12").disabled = true;
    document.getElementById("input13").disabled = true;
    document.getElementById("input14").disabled = true;
    document.getElementById("input15").disabled = true;
    document.getElementById("input16").disabled = true;
    document.getElementById("bot").disabled = true;
    
        $('.botonvideo').css("display","");
        $('.botonvideo2').css("display","");
        $('.botonvideo3').css("display","");
        $('.resultado').css("display","");
        paes_puntos =paes_puntos * cantidad_correctas;
        document.getElementById("resultado").innerHTML = cantidad_correctas;
        document.getElementById("resultado2").innerHTML = paes_puntos;
    /*document.getElementById("resultado").innerHTML = cantidad_correctas;*/
    
    
    
    
}
/*
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('tema', 'dark');
    } else {
        document.documentElement.setAttribute('tema', 'light');
    }
}
colorSwitch.addEventListener('change', cambiaTema);
*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.botonQ').fadeIn('slow');
    } else {
        $('.botonQ').fadeOut('slow');
    }
});
$('.botonQ').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});

    $('.resultado').css("display","none");
    $('.botonvideo').css("display","none");
    $('.botonvideo2').css("display","none");
    $('#video02').css("display","none");
    $('.botonvideo3').css("display","none");
    $('#video03').css("display","none");

    $("#video1").on("click", function(){
        $('#video01').css("display","");
        $('#video01').fadeIn('slow');
        $('#video1').css("display","none");
    });

    $("#video2").on("click", function(){
        $('#video02').css("display","");
        $('#video02').fadeIn('slow');
        $('#video2').css("display","none");
    });

    $("#video3").on("click", function(){
        $('#video03').css("display","");
        $('#video03').fadeIn('slow');
        $('#video3').css("display","none");
    });

   /*
    $(document).ready(function(){
        var altura = $('.menuP').offset().top;
        
        $(window).on('scroll', function(){
            if ( $(window).scrollTop() > altura ){
                $('.menuP').addClass('menu-fixed');
            } else {
                $('.menuP').removeClass('menu-fixed');
            }
        });
        $("#bot").click(function(){
            $(".botonQ").addClass("disabled");
        });
    });
    */