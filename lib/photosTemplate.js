$(document).ready(function(){
    var photos = $("#photosTemplate").html();
    var photosTemplate = Handlebars.compile(photos);
    var photoData = {
        photos: [
            {
                title: 'July 1 in Stony Plain',
                image: 'images/events/outside06.jpg'
            },
            {
                title: 'Freeride Rodeo at Rollyview',
                image: 'images/events/outside07.jpg'
            },
            {
                title: 'Block Party in Spruce Grove',
                image: 'images/events/outside08.jpg'
            },
            {
                title: 'What The Truck Blatchford - June 2016',
                image: 'images/events/blatchford1.jpg'
            },
            {
                title: 'What The Truck Blatchford - June 2016',
                image: 'images/events/blatchford2.jpg'
            },
            {
                title: 'What The Truck Blatchford - June 2016',
                image: 'images/events/blatchford3.jpg'
            },
            {
                title: 'Aboriginal Day - June 2015',
                image: 'images/events/outside01.jpg'
            },
            {
                title: '',
                image: 'images/nitro01.jpg'
            },
            {
                title: '',
                image: 'images/nitro02.jpg'
            }
        ]
    };

    $("#photoItems").html(photosTemplate(photoData));
    
});