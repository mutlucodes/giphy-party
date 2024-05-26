$(document).ready(function () {
    const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

    $('#gifForm').on('submit', async function (e) {
        e.preventDefault();
        const term = $('#searchTerm').val();
        const response = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
            params: {
                q: term,
                api_key: apiKey,
                limit: 1
            }
        });

        const gifUrl = response.data.data[0]?.images?.downsized?.url;
        if (gifUrl) {
            const $img = $('<img>').attr('src', gifUrl);
            $('#gifContainer').append($img);
        }
        $('#searchTerm').val('');
    });

    $('#removeGifs').on('click', function () {
        $('#gifContainer').empty();
    });
});
