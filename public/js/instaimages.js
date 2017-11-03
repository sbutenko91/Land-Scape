$(document).ready(function () {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '4117912388',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '4117912388.1677ed0.e96261a3e4ae40d8b9cfb663c2e1f34a',
        sortBy: 'most-recent',
        template: '<div class="gallery col-6 col-md-3"><a href="{{image}}" target="_blank" title=""><div class="mask"><img src="{{image}}" alt="" class="img-fluid"/><div class="zoom"></div></div></a></div>',
    })
    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});