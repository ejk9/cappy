var gun = GUN();
// var items = gun.get('items');
var user = gun.user().recall({sessionStorage: true});

var username = "";

var allow = true;




$('#signup').on('click', function(e){
    e.preventDefault();

    user.auth($('#userName').val(), $('#passWord').val(), function(ack){
        //console.log($('#userName').val());

        if(ack.text == "Wrong user or password."){
            $('#error').text(ack.text);
        }else{
            $('#login').hide();
            $('#messages').show();
            $('#newMess').show();
        }
    });

    

});




window.addEventListener('load', function(e){
    if(user.is){
        $('#messages').show();
        $('#newMess').show();
        $('#login').hide();

    }else{
        $('#messages').hide();
        $('#newMess').hide();
    }


});


$('#newMess').on('click', function(e){
    e.preventDefault();

    if(user.is && $('#typeBox').val() != ""){
        $('#messages').append(user.is.alias +": " + $('#typeBox').val() + "\<br\>");
    }

    //$('#typeBox').val("");
    user.recall(function(e){
        console.log(e);
    });

});



chatWindow = document.getElementById('messages'); 
var xH = chatWindow.scrollHeight; 
chatWindow.scrollTo(0, xH);