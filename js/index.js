// 1 - This section includes all the logic to toggle the expansion of the RESERVATION section.

const resoToggleBtn = document.querySelector('.reso-expand-toggle');
const expandResoBtn = document.querySelector('.expand-reso');
const unExpandResoBtn = document.querySelector('.unexpand-reso');

resoToggleBtn.addEventListener('click', expandReso);

let resoExpanded = false;

function expandReso() {
    if(resoExpanded === false){

        // Hide expand button and display collapse button instead
        expandResoBtn.style="display: none;";
        unExpandResoBtn.style="display: inline-block;";

        // Shifts the sun and hero over to the right and up a little
        document.querySelector('.sun').style="transition: 1s; left: 60%; top: 2%;"

        document.querySelector('.colband-1').style="height: 30em; transition: 1s;";
        document.querySelector('.colband-2').style="height: 1.5em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 1em; transition: 1s;";
        document.querySelector('.colband-4').style="height: .75em; transition: 1s;";
        document.querySelector('.colband-5').style="height: .5em; transition: 1s;";
        document.querySelector('.band-content-2').style="display: none;";
        document.querySelector('.band-content-3').style="display: none;";
        document.querySelector('.band-content-4').style="display: none;";
        document.querySelector('.band-content-5').style="display: none;";
        resoExpanded = true;
        setTimeout(function(){
            document.querySelector('.reservation-content').style="display: block;";
        }, 1000)
        
    } else if(resoExpanded === true){

        // Hide collapse button and display expand button instead
        expandResoBtn.style="display: inline-block;";
        unExpandResoBtn.style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 12%"

        document.querySelector('.colband-1').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-2').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-4').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-5').style="height: 5em; transition: 1s;";
        document.querySelector('.reservation-content').style="display: none;";
        resoExpanded = false;
        setTimeout(function(){
            document.querySelector('.band-content-2').style="display: block;";
            document.querySelector('.band-content-3').style="display: block;";
            document.querySelector('.band-content-4').style="display: block;";
            document.querySelector('.band-content-5').style="display: block;";
        }, 1000)  
    };
};

// 2 - Toggle expansion/unexpansion of the OFFER section

const offerToggleBtn = document.querySelector('.offer-expand-toggle');

offerToggleBtn.addEventListener('click', expandOffer);

let offerExpanded = false;

function expandOffer() {
    if(offerExpanded === false){
        document.querySelector('.expand-offer').style="display: none;";
        document.querySelector('.unexpand-offer').style="display: inline-block;";

        // Shifts the sun and hero over to the right and up a little
        document.querySelector('.sun').style="transition: 1s; left: 60%; top: 2%;"

        document.querySelector('.colband-2').style="height: 30em; transition: 1s;";
        document.querySelector('.colband-1').style="height: 1.5em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 1.5em; transition: 1s;";
        document.querySelector('.colband-4').style="height: 1em; transition: 1s;";
        document.querySelector('.colband-5').style="height: .75em; transition: 1s;";
        document.querySelector('.band-content-1').style="display: none;";
        document.querySelector('.band-content-3').style="display: none;";
        document.querySelector('.band-content-4').style="display: none;";
        document.querySelector('.band-content-5').style="display: none;";
        offerExpanded = true;
        setTimeout(function(){
            document.querySelector('.offer-content').style="display: block;";
        }, 1000)
    } else if(offerExpanded === true){
        document.querySelector('.expand-offer').style="display: inline-block;";
        document.querySelector('.unexpand-offer').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 12%"

        document.querySelector('.colband-2').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-1').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-4').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-5').style="height: 5em; transition: 1s;";
        document.querySelector('.offer-content').style="display: none;";
        setTimeout(function(){
            document.querySelector('.band-content-1').style="display: block;";
            document.querySelector('.band-content-3').style="display: block;";
            document.querySelector('.band-content-4').style="display: block;";
            document.querySelector('.band-content-5').style="display: block;";
        }, 1000)
        offerExpanded = false;
    }
};

// 3 - Toggle Gallery expansion

const galleryToggleBtn = document.querySelector('.gallery-expand-toggle');

galleryToggleBtn.addEventListener('click', expandGallery);

let galleryExpanded = false;

function expandGallery() {
    if(galleryExpanded === false){
        document.querySelector('.expand-gallery').style="display: none;";
        document.querySelector('.unexpand-gallery').style="display: inline-block;";

        // Shifts the sun and hero over to the right and up a little
        document.querySelector('.sun').style="transition: 1s; left: 60%; top: 2%;"

        document.querySelector('.colband-3').style="height: 30em; transition: 1s;";
        document.querySelector('.colband-1').style="height: .5em; transition: 1s;";
        document.querySelector('.colband-2').style="height: .75em; transition: 1s;";
        document.querySelector('.colband-4').style="height: .75em; transition: 1s;";
        document.querySelector('.colband-5').style="height: .5em; transition: 1s;";
        document.querySelector('.band-content-1').style="display: none;";
        document.querySelector('.band-content-2').style="display: none;";
        document.querySelector('.band-content-4').style="display: none;";
        document.querySelector('.band-content-5').style="display: none;";

        galleryExpanded = true;

        setTimeout(function(){
            document.querySelector('.gallery-content').style="display: block;";
        }, 1000)

    } else if(galleryExpanded === true){
        document.querySelector('.expand-gallery').style="display: inline-block;";
        document.querySelector('.unexpand-gallery').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 12%"

        document.querySelector('.colband-1').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-2').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-4').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-5').style="height: 5em; transition: 1s;";
        galleryExpanded = false;
        document.querySelector('.gallery-content').style="display: none;";
        setTimeout(function(){
            document.querySelector('.band-content-1').style="display: block;";
            document.querySelector('.band-content-2').style="display: block;";
            document.querySelector('.band-content-4').style="display: block;";
            document.querySelector('.band-content-5').style="display: block;";
        }, 1000);

        
    };
};

// 4 - Contact Expander

const contactToggleBtn = document.querySelector('.contact-expand-toggle');

contactToggleBtn.addEventListener('click', expandContact);

let contactExpanded = false;

function expandContact(){
    if(contactExpanded === false){
        document.querySelector('.expand-contact').style="display: none;";
        document.querySelector('.unexpand-contact').style="display: inline-block;";

        // Shifts the sun and hero over to the right and up a little
        document.querySelector('.sun').style="transition: 1s; left: 60%; top: 2%;"

        document.querySelector('.colband-4').style="height: 30em; transition: 1s;";
        document.querySelector('.colband-1').style="height: .5em; transition: 1s;";
        document.querySelector('.colband-2').style="height: 1em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 1.5em; transition: 1s;";
        document.querySelector('.colband-5').style="height: .75em; transition: 1s;";
        document.querySelector('.band-content-1').style="display: none;";
        document.querySelector('.band-content-2').style="display: none;";
        document.querySelector('.band-content-3').style="display: none;";
        document.querySelector('.band-content-5').style="display: none;";

        contactExpanded = true;

        setTimeout(function(){
            document.querySelector('.contact-content').style="display: block;";
        }, 1000)

    }else if(contactExpanded === true){
        document.querySelector('.expand-contact').style="display: inline-block;";
        document.querySelector('.unexpand-contact').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 12%"

        document.querySelector('.colband-1').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-2').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-4').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-5').style="height: 5em; transition: 1s;";
        document.querySelector('.reservation-content').style="display: none;";
        setTimeout(function(){
            document.querySelector('.band-content-1').style="display: block;";
            document.querySelector('.band-content-2').style="display: block;";
            document.querySelector('.band-content-3').style="display: block;";
            document.querySelector('.band-content-5').style="display: block;";
        }, 1000)

        contactExpanded = false;
        document.querySelector('.contact-content').style="display: none;";
    };
};

// 5 - Menu Expander

const menuToggleBtn = document.querySelector('.menu-expand-toggle');

menuToggleBtn.addEventListener('click', expandMenu);

let menuExpanded = false;

function expandMenu(){
    if(menuExpanded === false){
        document.querySelector('.expand-menu').style="display: none;";
        document.querySelector('.unexpand-menu').style="display: inline-block;";

        // Shifts the sun and hero over to the right and up a little
        document.querySelector('.sun').style="transition: 1s; left: 60%; top: 2%;"

        document.querySelector('.colband-5').style="height: 30em; transition: 1s;";
        document.querySelector('.colband-1').style="height: .5em; transition: 1s;";
        document.querySelector('.colband-2').style="height: .75em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 1em; transition: 1s;";
        document.querySelector('.colband-4').style="height: 1.5em; transition: 1s;";
        document.querySelector('.band-content-1').style="display: none;";
        document.querySelector('.band-content-2').style="display: none;";
        document.querySelector('.band-content-3').style="display: none;";
        document.querySelector('.band-content-4').style="display: none;";

        menuExpanded = true;

        setTimeout(function(){
            document.querySelector('.menu-content').style="display: block;";
        }, 1000)
    }else if(menuExpanded === true){
        document.querySelector('.expand-menu').style="display: inline-block;";
        document.querySelector('.unexpand-menu').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 12%"

        document.querySelector('.colband-1').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-2').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-3').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-4').style="height: 5em; transition: 1s;";
        document.querySelector('.colband-5').style="height: 5em; transition: 1s;";
        document.querySelector('.reservation-content').style="display: none;";
        setTimeout(function(){
            document.querySelector('.band-content-1').style="display: block;";
            document.querySelector('.band-content-2').style="display: block;";
            document.querySelector('.band-content-3').style="display: block;";
            document.querySelector('.band-content-4').style="display: block;";
        }, 1000)

        menuExpanded = false;
        document.querySelector('.menu-content').style="display: none;";
    };
};