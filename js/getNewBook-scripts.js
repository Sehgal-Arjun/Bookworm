
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

function displayBook(){
    let userBooks = JSON.parse(localStorage.getItem('userbooks') || '[]');
    let usercategories = [];
    let sortedpossbooks = [];
    for (let i = 0; i < userBooks.length; i++){
        let currcat = userBooks[i].categories; 
        let arraycat = currcat.split(", ");
        for (let j = 0; j < arraycat.length; j++){
            if (!(usercategories.includes(arraycat[j]))){
                usercategories.push(arraycat[j]);
            }
        }
    }

    let possbooks = [];
    let books = [];
    books = JSON.parse(localStorage.getItem('books'));

    for (let i = 0; i < books.length; i++){
        let cats = books[i].categories.split(', ');
        let inList = false;
        for (let j = 0; j < cats.length; j++){
            if (usercategories.includes(cats[j])){
                if (!inList){
                    possbooks.push(books[i]);
                }
            }
        }
    }

    let finalName = "";
    let finalAuthor = "";
    let finalURL = "";

    let removebooks = [];
    
    if (userBooks.length !== 0 && possbooks.length != 0){
        sortedpossbooks = possbooks;
        for (let i = 0; i < possbooks.length; i++){
            let score = possbooks[i].average_rating;
            let possbookscats = possbooks[i].categories.split(', ');
            for (let j = 0; j < possbookscats.length; j++){
                if (usercategories.includes(possbookscats[j])){ 
                    score = score + 1;
                }
            }
            possbooks[i].score = score;
        }

        for (let i = 0; i < possbooks.length; i++){
            for (let j = 0; j < userBooks.length; j++){
                let addscore = stringSimilarity.compareTwoStrings(userBooks[j].title.toLowerCase(),possbooks[i].title.toLowerCase()); // above 0.4/0.5 is pretty decent similarity after testing
                if (addscore > 0.35){
                    console.log('comparison between ' + userBooks[j].title.toLowerCase() + ' and ' + possbooks[i].title.toLowerCase() + ": " + addscore);
                    possbooks[i].score = possbooks[i].score + addscore + 1;
                }
            }
        }


        for(let i = 0; i < sortedpossbooks.length; i++){ // ordering by score order
            for(let j = 0; j < sortedpossbooks.length - i - 1; j++){
                if(sortedpossbooks[j + 1].score < sortedpossbooks[j].score){
                    [sortedpossbooks[j + 1],sortedpossbooks[j]] = [sortedpossbooks[j],sortedpossbooks[j + 1]];
                }
            }
        }

        for (let i = 0; i < sortedpossbooks.length; i++){
            if (sortedpossbooks[i].read == true){
                removebooks.push(sortedpossbooks[i]);

            }
        }

        let usersbooks = JSON.parse(localStorage.getItem('userbooks'));
        let nameslist = [];
        for (let i = 0; i < usersbooks.length; i++){
            nameslist.push(usersbooks[i].title);
        }
        for (let i = 0; i < sortedpossbooks.length; i++){
            if (nameslist.includes(sortedpossbooks[i].title)){
                removebooks.push(sortedpossbooks[i]);
            }
        }
        
        for (let i = 0; i < removebooks.length; i++){
            sortedpossbooks.splice(sortedpossbooks.indexOf(removebooks[i]));
        }

        sortedpossbooks = sortedpossbooks.reverse();
        
        console.log(sortedpossbooks);
        
    
        let book = sortedpossbooks[0];
        if (book != undefined){
            let authorString = book.authors.replace(/;/g,', ');
 
            finalName = book.title;
            finalAuthor = authorString;
            finalURL = book.thumbnail;
            console.log(book);
        }
        else{
            console.log('empty list!');
        }
    }
    else{
        let num = Math.floor(Math.random() * books.length);
        let newnum = Math.floor(Math.random() * books.length);
        let newernum = Math.floor(Math.random() * books.length);

        while (num == newnum || num == newernum || newnum == newernum){
            num = Math.floor(Math.random() * books.length);
            newnum = Math.floor(Math.random() * books.length);
            newernum = Math.floor(Math.random() * books.length);
        }

        let book = books[num];
        let authorString = book.authors.replace(/;/g,', ');
        finalAuthor = authorString;
        finalName = book.title;
        finalURL = book.thumbnail;
        let finalText = "Name: " + finalName + ", Author(s): " + finalAuthor;

        document.getElementById("thumb").src = finalURL;
        document.getElementById('nameauthor').innerHTML = finalText;
        console.log(book);

        book = books[newnum];
        finalAuthor = book.authors.replace(/;/g,', ');
        finalName = book.title;
        finalURL = book.thumbnail;
        finalText = "Name: " + finalName + ", Author(s): " + finalAuthor;

        document.getElementById("thumb1").src = finalURL;
        document.getElementById('nameauthor1').innerHTML = finalText;
        console.log(book);

        book = books[newernum];
        finalAuthor = book.authors.replace(/;/g,', ');
        finalName = book.title;
        finalURL = book.thumbnail;
        finalText = "Name: " + finalName + ", Author(s): " + finalAuthor;

        document.getElementById("thumb2").src = finalURL;
        document.getElementById('nameauthor2').innerHTML = finalText;
        console.log(book);
    }

    if (sortedpossbooks.length != 0){
        let finalText = "Name: " + finalName + ", Author(s): " + finalAuthor;

        document.getElementById("thumb").src = finalURL;
        document.getElementById('nameauthor').innerHTML = finalText;
    }
    
    if (sortedpossbooks != null && sortedpossbooks.length > 1){
        let book = sortedpossbooks[1];
        let authorString = book.authors.replace(/;/g,', ');
 
        let finalName = book.title;
        let finalAuthor = authorString;
        let finalURL = book.thumbnail;
        let finalText = "Name: " + finalName + ", Author(s): " + finalAuthor;
        document.getElementById("thumb1").src = finalURL;
        document.getElementById('nameauthor1').innerHTML = finalText;

        if (sortedpossbooks.length > 2){
            book = sortedpossbooks[2];
            authorString = book.authors.replace(/;/g,', ');
     
            finalName = book.title;
            finalAuthor = authorString;
            finalURL = book.thumbnail;
            finalText = "Name: " + finalName + ", Author(s): " + finalAuthor;
            document.getElementById("thumb2").src = finalURL;
            document.getElementById('nameauthor2').innerHTML = finalText;
        }

    }


}

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
/*google.maps.event.addDomListener(window, 'load', init);*/

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'templates/grayscale/images/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
