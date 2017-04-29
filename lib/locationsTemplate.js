$(document).ready(function(){
    var locations = $("#locationsTemplate").html();
    var locationsTemplate = Handlebars.compile(locations);
    
    var locationData = {
        location: [
            {
                date: "May 26th",
                address: 'Edmonton Classic Horse Show - Whitemud Equine Centre',
                time: ''
            },
            {
                date: "May 27th",
                address: 'Edmonton Classic Horse Show - Whitemud Equine Centre',
                time: ''
            },
            {
                date: "May 28th",
                address: 'Edmonton Classic Horse Show - Whitemud Equine Centre',
                time: ''
            },
            {
                date: "June 23rd",
                address: 'Dragonfly Festival - Wabamun',
                time: ''
            },
            {
                date: "June 24th",
                address: 'Dragonfly Festival - Wabamun',
                time: ''
            },
            {
                date: "June 25th",
                address: 'Dragonfly Festival - Wabamun',
                time: ''
            },
            {
                date: "July 1st",
                address: 'Canada Day Show and Shine - Stony Plain',
                time: '10am - 3pm'
            },
            {
                date: "July 2nd",
                address: 'Alberta Summer Classic - Sherwood Park',
                time: '11am - 6pm'
            },
            {
                date: "July 3rd",
                address: 'Alberta Summer Classic - Sherwood Park',
                time: '11am - 3pm'
            },
            {
                date: "August 11th",
                address: 'Culinary Cookout - Cardiff Park',
                time: '4pm - 9pm'
            },
            {
                date: "August 19th",
                address: 'Cowboy Festival - Stony Plain',
                time: '10am - 6pm'
            },
            {
                date: "August 20th",
                address: 'Cowboy Festival - Stony Plain',
                time: '10am - 3pm'
            }
        ]
    };

    $("#locationItems").html(locationsTemplate(locationData));    
});