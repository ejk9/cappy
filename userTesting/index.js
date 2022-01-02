


var gun = GUN();
// var items = gun.get('items');
var user = gun.user();

var name = "";


var allow = true;

$('#signup').on('click', function(e){
    e.preventDefault();
    $('#error').text("");
    // items.set($('#userName').val());
    // $('#userName').val("a");
    
    //console.log($('#userName').val());
    //console.log($('#userName').val().length);
    
    var temp = $('#passWord').val().length;

    if(temp < 8){
        $('#error').append("Password Not Long Enough\<br\>");
        $('#passWord').val("");
        allow = false;
    }

    if($('#userName').val().length < 3){
        $('#error').append("Username Not Long Enough");
        $('#passWord').val("");
        allow = false;
    }

    var temp = "~@";
    temp += $('#userName').val();

    gun.get(temp).once(function(ack){

        //console.log(ack);   
        if(ack == null && allow){
            user.create($('#userName').val(), $('#passWord').val(), function(ack){
                //console.log($('#userName').val());
                name = $('#userName').val();
                window.location.href = "login.html";

            });
        }else{
            $('#error').text("");
            $('#error').append("Username already exists!");
            $('#passWord').val("");
            $('#userName').val("");
        }

    })




    




});






$('#login').on('click', function(e){
    e.preventDefault();

    user.auth($('#user').val(), $('#pass').val(), function(ack){
        //console.log($('#userName').val());

        if(ack.text == "Wrong user or password."){
            $('#error').text(ack.text);
        }else{
            $('#error').text($('#user').val());
        }
    });


});

// $('#passWord').keydown(function(e){
//     //e.preventDefault();
//     if($('#passWord').val().length <= 8){
//         $('#error').val("Password Not Long Enough");
//     }
//     if($('#passWord').val().length > 8){
//         $('#error').val("Password probably okay.");
//     }

// })




