/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$('#searchButton').click(function() {
    var searchTerm = $("#searchTerm").val();
    console.log('this is my search term', searchTerm)
    // replace spaces with encoded space
    var formattedSearchTerm = searchTerm.replace(' ', '%20')
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=3c29e935498d124ef58372d0141ec744`;
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            console.log('response', response)
        }
    })
})