function render(data){
    var html = "<div class=commentBox><div class='leftPanelImg'><img src=google.com></div></div>";
    $('#container').append(html);
}

$(document).ready(function(){

    var comment = ['name', 'Malik', 'date'];

    for(var i=0; i<comment.length;i++){
        render(comment[i]);
    }

    $('#addComment').click(function() {
        var addObj = {
            'name': $('name').val(),
            'date': $('#date').val(),
            'body': $('#bodytext').val()

        }

    });

})