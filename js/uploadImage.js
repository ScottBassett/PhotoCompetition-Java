'use strict';
// JavaScript for use with the index page.

function uploadImage() {
    
    var metaData = {
        name: $('#name').val(),
        author: $('#author').val(),
        license: $('#license').val()
    };
    console.log(metaData);

    var blob = new Blob([JSON.stringify(metaData)], {type : 'application/json'})

    var formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('rawdata', fileField.files[0]);
    formData.append('metadata', blob);

    fetch(buildUrl(''), {
        method: 'POST',
        body: formData,           
    })
    .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

function registerUploadHandler() {
    $('#submit').click(function(event) {
        event.preventDefault();    
        uploadImage();
    })
}

$(function() {
    registerUploadHandler();
})
