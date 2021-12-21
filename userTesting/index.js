


var gun = GUN();
var items = gun.get('items');




$('form').on('submit', function(e){
    e.preventDefault();
    items.set($('#userName').val());
    $('#userName').val("a");


});

items.map().on(function(item, id){
    var li = $('#' + id).get(0) || $('<li>').attr('id', id).appendTo('ul');
    if(item){
        $(li).text(item);
    } else {
        $(li).hide();
    }
});

