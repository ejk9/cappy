


var gun = GUN();
// var items = gun.get('items');
var user = gun.user();

var name = "";




$('form').on('submit', function(e){
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
    }

    if($('#userName').val().length < 3){
        $('#error').append("Username Not Long Enough");
        $('#passWord').val("");
    }

    user.create($('#userName').val(), $('#passWord').val(), function(ack){
        //console.log($('#userName').val());
        name = $('#userName').val();
        window.location.href = "userPage.html";
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




