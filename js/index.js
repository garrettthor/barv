// 1 - This section includes all the logic to toggle the expansion of the RESERVATION section.


let btnDisable = false;

const resoToggleBtn = document.querySelector('.reso-expand-toggle');
const expandResoBtn = document.querySelector('.expand-reso');
const unExpandResoBtn = document.querySelector('.unexpand-reso');

resoToggleBtn.addEventListener('click', expandReso);

let resoExpanded = false;

const colBand1 = document.querySelector('.colband-1')
const colBand2 = document.querySelector('.colband-2')
const colBand3 = document.querySelector('.colband-3')
const colBand4 = document.querySelector('.colband-4')
const colBand5 = document.querySelector('.colband-5')

function expandReso() {
    if(resoExpanded === false && btnDisable === false){

        //EXPAND

        // Disable button during animation
        btnDisable = true;

        // Hide expand button and display collapse button instead
        expandResoBtn.style="display: none;";
        unExpandResoBtn.style="display: inline-block;";

        // Shifts the sun and hero over to the right and up a little
        document.querySelector('.sun').style="transition: 1s; left: 60%; top: 2%;"

        document.querySelector('.colband-1').style="height: 30em; transition: 1s;";


        //trying to do it better?  i dont think this is much better tho...theres gotta be a cleaner way.


        // colBand1.classList.add('colband-expanded');
        // colBand1.classList.remove('colband-init');


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
            document.querySelector('.reservation-content').style="display: flex;";
        }, 1000)

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
        
    } else if(resoExpanded === true && btnDisable === false){

        //COLLAPSE

        // Disable button during animation
        btnDisable = true;

        // Hide collapse button and display expand button instead
        expandResoBtn.style="display: inline-block;";
        unExpandResoBtn.style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 4%"

        document.querySelector('.colband-1').style="height: 5em; transition: 1s;";


        // colBand1.classList.add('colband-init');
        // colBand1.classList.remove('colband-expanded');

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

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
    };
};

// 2 - Toggle expansion/unexpansion of the OFFER section

const offerToggleBtn = document.querySelector('.offer-expand-toggle');

offerToggleBtn.addEventListener('click', expandOffer);

let offerExpanded = false;

function expandOffer() {
    if(offerExpanded === false && btnDisable === false){

        // Disable button during animation
        btnDisable = true;

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
            document.querySelector('.offer-content').style="display: flex;";
        }, 1000)
        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
    } else if(offerExpanded === true && btnDisable === false){
        // Disable button during animation
        btnDisable = true;
        document.querySelector('.expand-offer').style="display: inline-block;";
        document.querySelector('.unexpand-offer').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 4%"

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

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
    };
};

// 3 - Toggle Gallery expansion

const galleryToggleBtn = document.querySelector('.gallery-expand-toggle');

galleryToggleBtn.addEventListener('click', expandGallery);

let galleryExpanded = false;

function expandGallery() {
    if(galleryExpanded === false && btnDisable === false){

        // Disable button during animation
        btnDisable = true;

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

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)

    } else if(galleryExpanded === true && btnDisable === false){
        // Disable button during animation
        btnDisable = true;
        document.querySelector('.expand-gallery').style="display: inline-block;";
        document.querySelector('.unexpand-gallery').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 4%"

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

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
    };
};

// 4 - Story Expander

const storyToggleBtn = document.querySelector('.story-expand-toggle');

storyToggleBtn.addEventListener('click', expandStory);

let storyExpanded = false;

function expandStory(){
    if(storyExpanded === false && btnDisable === false){
        // Disable button during animation
        btnDisable = true;
        document.querySelector('.expand-story').style="display: none;";
        document.querySelector('.unexpand-story').style="display: inline-block;";

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

        storyExpanded = true;

        setTimeout(function(){
            document.querySelector('.story-content').style="display: block;";
        }, 1000)

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)

    }else if(storyExpanded === true && btnDisable === false){
        // Disable button during animation
        btnDisable = true;
        document.querySelector('.expand-story').style="display: inline-block;";
        document.querySelector('.unexpand-story').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 4%"

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

        storyExpanded = false;
        document.querySelector('.story-content').style="display: none;";

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
    };
};

// 5 - Menu Expander

const menuToggleBtn = document.querySelector('.menu-expand-toggle');

menuToggleBtn.addEventListener('click', expandMenu);

let menuExpanded = false;

function expandMenu(){
    if(menuExpanded === false && btnDisable === false){
        // Disable button during animation
        btnDisable = true;
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

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
        
    }else if(menuExpanded === true && btnDisable === false){
        // Disable button during animation
        btnDisable = true;
        document.querySelector('.expand-menu').style="display: inline-block;";
        document.querySelector('.unexpand-menu').style="display: none;";

        // Shifts the sun and hero back to original position
        document.querySelector('.sun').style="transition: 1s; left: 50%; top: 4%"

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

        // Allow button pushing again after animation is finished and content has been displayed
        setTimeout(function(){
            btnDisable = false;
        }, 1000)
    };
};

// MOBILE Expansion/Collapse logic.
// for the lil squares... they're just little guys...
