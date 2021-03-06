function getWeather(searchQuery) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?';
        var params = {
                units: 'imperial',
                APPID: apiKey,
        };
        if (searchQuery) {
                params.q = searchQuery;
        } else {
                params.id = 4930956;
        }
        $.ajax(url + $.param(params), {
                success: function (data) {

                        $('.city').text(data.name);
                        $('.temp').text(data.main.temp + ' °F');
                }, error: function (error) {
                        $('.error-message').text('An error occurred!');
                }
        });
}
function searchWeather() {
        var searchQuery = $('.search').val();
        getWeather(searchQuery);
}