var gun = GUN();
// var items = gun.get('items');
var user = gun.user().recall({sessionStorage: true});

var username = "";

var allow = true;

var newMessages;
var Messages = [];

const d = new Date();

var UN;
var ID;

$('#signup').on('click', function(e){
    e.preventDefault();

    user.auth($('#userName').val(), $('#passWord').val(), function(ack){
        //console.log($('#userName').val());

        if(ack.text == "Wrong user or password."){
            $('#error').text(ack.text);
        }else{
            UN = $('#userName').val();
            gun.get('nicks').get(UN).put(UN);

            gun.get('connectedUsers').get(UN).put(user.is);

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

    gun.get('connectedUsers').map().once(function(data, id){
        //console.log(data);
        //console.log(id);
        if(data && user.is){

        
            if(data.pub == user.is.alias || id == user.is.alias){
                UN = id;
            }
        }   

    });





});





$('#send').on('click', function(e){
    e.preventDefault();

    if(user.is && $('#typeBox').val() != ""){
        
        
       newMessages = UN + ": " + $('#typeBox').val();
    //    Messages.push(newMessages);

       gun.get('chat').get(Date.now()).put(newMessages);
       newMessages = "";
    }

    //$('#typeBox').val("");
    user.recall(function(e){
        console.log(e);
    });

});


gun.get('chat').map().on(async function(item, id){
    // var mes = $('#' +id).get(0) || $('<p>').attr('id',id).appendTo('#messages');
    // $(mes).text(item);
    Messages.push(item);

});
let count = 0;
Messages.forEach((x) => {
    let m = $('<p>').attr('id', count).appendTo('#messages');
    m.text(x);
})
