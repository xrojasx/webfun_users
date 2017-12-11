$(document).ready(function(){
    $('form').on('submit',function(e) {
        e.preventDefault();
        var newname= $('#fn').val();
        var newlast= $('#ln').val();
        var newemail= $('#em').val();
        var newcontact= $("#con").val();
        $('tbody').append( 
        `<tr>
            <td>  ${newname}  </td>
            <td>  ${newlast}  </td>
            <td>  ${newemail}  </td>
            <td>  ${newcontact} </td>
        </tr>
        `
    )
    });
}); 