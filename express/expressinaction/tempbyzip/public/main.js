$(function() {
    var $h1 = $('h1');
    var $zip = $('input[name="zip"]');
    $('form').on('submit', evt => {
        evt.preventDefault();
        var zipCode = $.trim($zip.val());
        $h1.text('Loading...');

        var request = $.ajax({
            url: '/' + zipCode,
            dataType: 'json'
        });

        request.done(data => {
            var temperature = data.temperature;
            $h1.html('it is ' + temperature + '&#176; in ' + zipCode + '.');
        });

        request.fail(() => {
            $h1.text('Error!');
        });
    });
});
