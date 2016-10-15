$(document).ready(function() {
        console.log("in ready");
        getWeather();
});

function searchWeather() {
        var searchQuery = $('.search').val();
        getWeather(searchQuery);
}

function getWeather() {
        var url = 'http://api.openweathermap.org/data/2.5/weather?';
        var params = {
                units = 'imperial',
                APPID = apiKey,
        }
        console.log(apiKey);
        if (searchQuery) {
                params.id = searchQuery;
        } else {
                params.id = 4930956;
        }
        $.ajax(url + $param(params), {
                sucess:function(data) {
                        $('.city').text(data.name);
                        $('.temp').text(data.main.temp + ' F');
                }
        });
}