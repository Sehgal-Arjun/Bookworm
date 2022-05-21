jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

if (localStorage.getItem('cleared') == "1"){
    document.getElementById('response').innerHTML = "Cleared.";
    localStorage.setItem('cleared', '0');
}
else{
    document.getElementById('response').innerHTML = "";
}
var userBooksObj = JSON.parse(localStorage.getItem('userbooks') || '[]');
var userBooks = [];
if ((userBooksObj.length !== 0)){
    for (let i = 0; i < userBooksObj.length; i++){
        userBooks.push(userBooksObj[i]);
    }
    console.log("User's reading: ")
    console.log(userBooks);
}
books = JSON.parse(localStorage.getItem('books'));
let tempbooks = books;

function fillbox(){
    let name = localStorage.getItem('autofillbox');
    let inputbox = document.getElementById('input');
    inputbox.value = name;
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
      });
}

function add0() {
    localStorage.setItem('autofillbox', tempbooks[0].title);
    fillbox();
}

function add1(){
    localStorage.setItem('autofillbox', tempbooks[1].title);
    fillbox();
}

function add2(){
    localStorage.setItem('autofillbox', tempbooks[2].title);
    fillbox();
}


function add(){
    document.getElementById('similar').innerHTML = "";
    document.getElementById('thumb').src = "";
    document.getElementById('nameauthor').innerHTML = "";
    document.getElementById('thumb1').src = "";
    document.getElementById('nameauthor1').innerHTML = "";
    document.getElementById('thumb2').src = "";
    document.getElementById('nameauthor2').innerHTML = "";
    document.getElementById('similar').innerHTML = "";


    userBooks = JSON.parse(localStorage.getItem('userbooks') || '[]');
    var name = document.getElementById("input").value;  
    
    while (name.slice(-1) == " ") {
        name = name.slice(0,-1);

    }

    let adding = true;

    let inList = false;
    for (let i = 0; i < books.length; i++)
    {   
        adding = true;
        if (books[i].title.toLowerCase() == name.toLowerCase())
        {     
            inList = true;             
            for (let j = 0; j < userBooks.length; j++){
                if (userBooks[j].title.toLowerCase() == name.toLowerCase()){
                    console.log(userBooks);
                    adding = false;
                    document.getElementById('response').innerHTML = "You've already added that.";
                }
            }
            console.log('adding: ' + adding);
            if (adding){
                userBooks.push(books[i]);
                books[i].read = true;
                document.getElementById('response').innerHTML = "Added.";
            }
        }
    }
    if (inList == false){
        let tempbooks = books;
        let removelist = [];
        console.log("adding: " + !adding);
        document.getElementById('response').innerHTML = "That's not a valid book.";
        let count = 0;
        for (let i = 0; i < tempbooks.length; i++){
            let addscore = stringSimilarity.compareTwoStrings(tempbooks[i].title.toLowerCase(),name.toLowerCase()); // above 0.4/0.5 is pretty decent similarity after testing
            if (addscore >= 0.4){
                tempbooks[i].isbn10 = addscore;
                count = count + 1;
            }
            else{
                removelist.push(tempbooks[i]);
            }
        }
        if (count == 0){
            document.getElementById('similar').innerHTML = "There were no matches for that book.";
        }
        else{
            for (let i = 0; i < removelist.length; i++){
                let index = tempbooks.indexOf(removelist[i]);
                tempbooks.splice(index, 1);
            }
            for (let i = 0; i < tempbooks.length; i++){
                tempbooks[i].isbn13 = tempbooks[i].isbn10 + tempbooks[i].average_rating;
            }
            tempbooks.sort(function(a, b){
                return a.isbn13-b.isbn13;
            })
            tempbooks.reverse();
            console.log(tempbooks);
            console.log("count: " + count);


            if (count == 1){
                document.getElementById('similar').innerHTML = "There was one similar match.";
                document.getElementById('thumb').src = tempbooks[0].thumbnail;
                document.getElementById('nameauthor').innerHTML = "<a onclick = 'add0()'> Name: " + tempbooks[0].title + ", Author(s): " + tempbooks[0].authors.replace(/;/g, ", ") + "</a>";
            }
            if (count == 2){
            document.getElementById('similar').innerHTML = "There were two similar matches for that book.";
            document.getElementById('thumb').src = tempbooks[0].thumbnail;
            document.getElementById('nameauthor').innerHTML = "<a onclick = 'add0()'> Name: " + tempbooks[0].title + ", Author(s): " + tempbooks[0].authors.replace(/;/g, ", ") + "</a>";
            document.getElementById('thumb1').src = tempbooks[1].thumbnail;
            document.getElementById('nameauthor1').innerHTML = "<a onclick = 'add1()'> Name: " + tempbooks[1].title + ", Author(s): " + tempbooks[1].authors.replace(/;/g, ", ") + "</a>";
            }
            if (count == 3){
            document.getElementById('similar').innerHTML = "There were three similar matches for that book.";
            document.getElementById('thumb').src = tempbooks[0].thumbnail;
            document.getElementById('nameauthor').innerHTML = "<a onclick = 'add0()'> Name: " + tempbooks[0].title + ", Author(s): " + tempbooks[0].authors.replace(/;/g, ", ") + "</a>";
            document.getElementById('thumb1').src = tempbooks[1].thumbnail;
            document.getElementById('nameauthor1').innerHTML = "<a onclick = 'add1()'> Name: " + tempbooks[1].title + ", Author(s): " + tempbooks[1].authors.replace(/;/g, ", ") + "</a>";
            document.getElementById('thumb2').src = tempbooks[2].thumbnail;
            document.getElementById('nameauthor2').innerHTML = "<a onclick = 'add2()'> Name: " + tempbooks[2].title + ", Author(s): " + tempbooks[2].authors.replace(/;/g, ", ") + "</a>";
            }
            if (count > 3){
            document.getElementById('similar').innerHTML = "There were three similar matches for that book.";
            document.getElementById('thumb').src = tempbooks[0].thumbnail;
            /*let nameofbook = tempbooks[0].title;
            let addingname = "<a onclick = 'fillbox()'>" + tempbooks[0] + "</a>"*/
            document.getElementById('nameauthor').innerHTML = "<a onclick = 'add0()'> Name: " + tempbooks[0].title + ", Author(s): " + tempbooks[0].authors.replace(/;/g, ", ") + "</a>";
            document.getElementById('thumb1').src = tempbooks[1].thumbnail;
            document.getElementById('nameauthor1').innerHTML = "<a onclick = 'add1()'> Name: " + tempbooks[1].title + ", Author(s): " + tempbooks[1].authors.replace(/;/g, ", ") + "</a>";
            document.getElementById('thumb2').src = tempbooks[2].thumbnail;
            document.getElementById('nameauthor2').innerHTML = "<a onclick = 'add2()'> Name: " + tempbooks[2].title + ", Author(s): " + tempbooks[2].authors.replace(/;/g, ", ") + "</a>";
            document.getElementById('similar').innerHTML = "There were " + count + " similar matches for that book. Here's the top three.";
            }
        }
    }

    console.log(userBooks);

    localStorage.setItem('userbooks', JSON.stringify(userBooks));
    localStorage.setItem('first', 1);
    document.getElementById('input').value = '';
}

function remove(){
    var name = document.getElementById("input").value;
    while (name.slice(-1) == " ") {
        name = name.slice(0,-1);

    }
    let removebooks = [];
    let userbooks = JSON.parse(localStorage.getItem('userbooks'));
    let lengthofbooks = userbooks.length;
    for (let i = 0; i < userbooks.length; i++){
        if (userbooks[i].title.toLowerCase() == name.toLowerCase()){
            removebooks.push(userbooks[i]);
            userbooks[i].read = false;
        }
    }
    for (let i = 0; i < removebooks.length; i++){
        let num = userbooks.indexOf(removebooks[i]);
        userbooks.splice(num, 1);
    }
    
    if (userbooks.length < lengthofbooks){
        document.getElementById('response').innerHTML = "Removed.";
    }

    console.log(userbooks);
    localStorage.setItem('userbooks', JSON.stringify(userbooks));
    document.getElementById('input').value = '';
}

function emptyReading(){
    if (confirm("Are you sure you want to cancel?")){
        let removebooks = [];
        let userbooks = JSON.parse(localStorage.getItem('userbooks'));
        for (let i = 0; i < userbooks.length; i++){
            removebooks.push(userbooks[i]);
        }
        for (let i = 0; i < removebooks.length; i++){
            userbooks.splice(userbooks.indexOf(removebooks[i]));
        }
        localStorage.setItem('userbooks', JSON.stringify(userbooks));
        console.log('cleared!');
        location.reload();
        document.getElementById('response').innerHTML = "Cleared.";
        localStorage.setItem('cleared', "1");
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
}