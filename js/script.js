const portImage = $('.portfolio-image');

$('.navigation__link').on('click', function() {
    $('.navigation__button').click();
})

$('.modal-x').on('click', function() {
    $('.modal-outer-in').toggleClass('modal-outer-away', true);
    $('.modal-outer-in').toggleClass('modal-outer-in', false);
    window.removeEventListener('click', clickRemove);
})

for (let i = 0; i < portImage.length; i++) {
    let num = portImage[i].dataset.index;

    $(portImage[i]).on('click', function(){
        switch(num) {
            case '1':
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('Texas Food Fight');
                $('#modal-img').html('<img class="modal-image" src="img/tx_food_fight.png" alt="texas food fight" />')
                //$('#visit').html('<a class="modal-visit" href="https://texas-food-fight-dloruwxifd.now.sh/" target="_blank"> Click here to visit Texas Food Fight </a>')
                $('#modal-content').html("<span> Texas Food Fight is an app that allows users to enter Texas Restaurants in an attempt to prove which city has the best cuisine in the state. <br><br> Full-stack, mobile-responsive app built with JavaScript, Pug template engine, Node and Express, and MongoDB. Has full user authentication and password reset via Postmark, and photos upload and resize to Cloudinary. Also includes Google Maps, user validation and error handling via flash messages, AJAX search interface, and a cool animation when you favorite a restaurant. Custom icons and logo made in Adobe Illustrator. </span>");
                return;
            case '2': 
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('Instacool');
                $('#modal-img').html('<img class="modal-image" src="img/instacool.png" alt="instacool" />')
                //$('#visit').html('<a class="modal-visit" href="https://insta-cool.herokuapp.com/" target="_blank"> Click here to visit Instacool </a>')
                $('#modal-content').html("<span> Behold InstaCool, the internet's #1 second-rate photo-uploading app. Upload, like, and comment on photos. In a world of endless camera ops, the only question is, are you InstaCool cool? The answer? Yes, yes you are :).<br><br>Full-stack and mobile-responsive app built with the MERN stack: React, Node, Express, and MongoDB. Authentication with Facebook and photos upload via Cloudinary. Custom icons and logo made in Adobe Illustrator. </span>");
                return;
            case '3': 
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('Vintage Things');
                $('#modal-img').html('<img class="modal-image" src="img/vintage-things.png" alt="vintage things" />')
                //$('#visit').html('<a class="modal-visit" href="http://vintage-things.camerontharp.com/" target="_blank"> Click here to visit Vintage Things </a>')
                $('#modal-content').html("<span> Vintage Things is a prototype of an ecommerce website where people can buy and sell their vintage items. Embrace your inner hipster and get your vintage on! <br><br> Front-end, mobile-responsive project built with Sass, JavaScript, and jQuery. Firebase used for saving items in the shopping cart and persistence. </span>");
                return;
            case '4': 
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('Sports Bro');
                $('#modal-img').html('<img class="modal-image" src="img/sportsbro.png" alt="sports bro" />')
                //$('#visit').html('<a class="modal-visit" href="https://sports-bro.herokuapp.com/" target="_blank"> Click here to visit Sports Bro </a>')
                $('#modal-content').html("<span>  If you love perusing all the sports news, than Sports Bro is for you. Sports Bro gives you easy access to top headlines from ESPN, Bleacher Report, Fox Sports, and more! <br><br>Full-stack and mobile-responsive app built with the MERN stack: React, Node, Express, and MongoDB. Authentication with Passport.js and sessions. Custom logo made in Adobe Illustrator. Sports news via the News API @ newsapi.org.</span>");
                return;
            case '5': 
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('Travel Austin');
                $('#modal-img').html('<img class="modal-image" src="img/travelaustin.png" alt="travel austin" />')
                //$('#visit').html('<a class="modal-visit" href="http://travel-austin.camerontharp.com" target="_blank"> Click here to visit Travel Austin </a>')
                $('#modal-content').html("<span> Travel Austin is a travel agency that allows the user to book some of the best tours in one the of best cities in the country, Austin, TX! <br><br>Front-end, mobile-responsive project meant to showcase how CSS can replace some JavaScript and jQuery, such as in dropdowns and animations. Built with Sass. JavaScript only used once to toggle a click event to close the dropdown. </span>");
                return;
            case '6': 
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('API Bakery');
                $('#modal-img').html('<img class="modal-image" src="img/api-bakery.png" alt="api bakery" />')
                //$('#visit').html('<a class="modal-visit" href="http://api-bakery.camerontharp.com/" target="_blank"> Click here to visit API Bakery </a>')
                $('#modal-content').html("<span> Want to see 6 of the hottest APIs in action? API Bakery is cooking up some seriously delicous web cookies. See in action real-life data from Iframely, News API, Zomato, Giphy, Youtube, and Spotify. <br><br> Front-end, mobile-responsive project built with Sass, JavaScript, and using AJAX to query the APIs. Custom bunny logo made in Illustrator. </span>");
                return;
            default:
                return;
        }
    });
}

function closeModal() {
  window.addEventListener('click', clickRemove);
} 

const clickRemove = function (event) {
    const modal = document.querySelector('.modal-outer');
    if (event.target === modal) {
        $('.modal-outer-in').toggleClass('modal-outer-away', true);
        $('.modal-outer-in').toggleClass('modal-outer-in', false);
        window.removeEventListener('click', clickRemove);
    }
}

    
