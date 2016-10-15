$(document).ready(function() {
        getWeather();
});
function myFunction() {
  document.getElementById("demo").innerHTML = "NEWWW PARAGRAPH #javascript #swag";
}

function searchWeather() {
        var searchQuery = $('.search').val();
        getWeather(searchQuery);
}

function getWeather() {
        var url = 'http://api.openweathermap.org/data/2.5/weather?';
        var params = {
                units = 'imperial',
                APPID = process.env.API_KEY,
        }
        if (searchQuery) {
                params.q = searchQuery;
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