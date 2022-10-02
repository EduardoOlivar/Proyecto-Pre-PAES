
$("#formulario").validate({
    rules:{
        nombre:{
            required: true,
            minlength: 3,
            maxlength: 14
        },
        email:{
            required: true,
            email: true
        },
        password:{
            required: true,
            minlength: 5
            
        }
    }
})

$("#formularioL").validate({
    rules:{
        emailL:{
            required: true,
            email:true
        },
        passwordL:{
            required: true,
            minlength: 5
        }
    }
})

$("#enviar").click(function(){
   
    if($("#formulario").valid()== false){
        return;
    }
   
})

$("#login").click(function(){
   
    if($("#formularioL").valid()== false){
        return;
    }

})