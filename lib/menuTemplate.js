$(document).ready(function(){
    var flavours = $("#flavoursTemplate").html();
    var flavoursTemplate = Handlebars.compile(flavours);
    var flavourData = {
        flavours: [
            {
                flavour: "Birthday Cake",
                image: 'images/flavours/birthdayCake.jpg',
                description: 'Cheesecake flavoured ice cream, topped with rainbow sprinkles'
            },
            {
                flavour: "Maple Bacon",
                image: 'images/flavours/mapleBacon.jpg',
                description: 'Maple ice cream using maple syrup and caramelized bacon'
            },
            {
                flavour: "Wild Blueberry",
                image: 'images/flavours/wildBlueberry.jpg',
                description: 'Blueberry ice cream chockfull of blueberries'
            },
            {
                flavour: "Pina Colada",
                image: 'images/flavours/pinaColada.jpg',
                description: 'A blend of coconut and pineapple topped with shredded toasted coconut'
            },
            {
                flavour: "Creamsicle",
                image: 'images/flavours/creamsicle.jpg',
                description: 'Tastes like an Orange ice cream bar'
            },
            {
                flavour: "Peanut Butter",
                image: 'images/flavours/peanutButter.jpg',
                description: 'For peanut butter lovers'
            },
            {
                flavour: "Salted Caramel",
                image: 'images/flavours/saltedCaramel.jpg',
                description: 'Caramel base ice cream with sea salt.  You get both salty and sweet in one taste'
            },
            {
                flavour: "King Cake",
                image: 'images/flavours/kingCake.jpg',
                description: 'A unique blend of cake, rum, butter and vanilla to taste like the traditional Mardi Gras cake'
            },
            {
                flavour: "Raspberry Punch",
                image: 'images/flavours/raspberryPunch.jpg',
                description: 'Real raspberries, with a hint of pineapple flavour'
            },            
            {
                flavour: "Vanilla",
                image: 'images/flavours/vanilla.jpg',
                description: 'Real, rich, vanilla bean flavour'
            },
            {
                flavour: "Tiger's Blood",
                image: 'images/flavours/tigersBlood.jpg',
                description: 'A mix of watermelon and strawberry with a hint of coconut'
            },
            {
                flavour: "Bubblegum",
                image: 'images/flavours/bubblegum.jpg',
                description: "So real you'll wanna blow bubbles"
            },
            {
                flavour: "Mango Pineapple",
                image: 'images/flavours/mangoPineapple.jpg',
                description: 'Delicious blend of mango and pineapple'
            }
        ],
        lollywaffles: [
            {
                flavour: "Belgian",
                image: 'images/waffle_belgian.bmp'
            },
            {
                flavour: "Cinnamon",
                image: 'images/cinnamon.jpg'
            },
            {
                flavour: "Smores",
                image: 'images/waffle_cinnamon.bmp'
            },
            {
                flavour: "Pizza 'n Mozza",
                image: 'images/waffle_pizza.bmp'
            },
            {
                flavour: "Waffle Dog",
                image: 'images/waffle_dog.bmp'
            }
        ],
        drizzles: [
            {
                flavour: "Maple Syrup",
            },
            {
                flavour: "Chocolate",
            },
            {
                flavour: "White Chocolate",
            },
            {
                flavour: "Cheesecake",
            }
        ]
    };

    $("#menuItems").html(flavoursTemplate(flavourData));
    
});