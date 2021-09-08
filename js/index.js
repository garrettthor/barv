// 1 - This section includes all the logic to toggle the expansion of the RESERVATION section.

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
    if(resoExpanded === false){

        //EXPAND

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
            document.querySelector('.reservation-content').style="display: block;";
        }, 1000)
        
    } else if(resoExpanded === true){

        //COLLAPSE

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
            document.querySelector('.offer-content').style="display: flex;";
        }, 1000)
    } else if(offerExpanded === true){
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
    };
};

// MOBILE Expansion/Collapse logic.
// for the lil squares... they're just little guys...

const square1 = document.querySelector('.square-1');
const square2 = document.querySelector('.square-2');
const square3 = document.querySelector('.square-3');
const square4 = document.querySelector('.square-4');
const square5 = document.querySelector('.square-5');
const square6 = document.querySelector('.square-6');


square1.addEventListener('click', expand1);

let square1Expanded = false;

function expand1() {
    if(square1Expanded === false){
        square1.style="width: 18em; height: 28em;";
        document.querySelector('.sq-1-exp-content').style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start;";
        document.querySelector('.sq-1-init-content').style="display: none;";
        square2.style="display: none";
        square3.style="display: none";
        square4.style="display: none";
        square5.style="display: none";
        square6.style="display: none";

        square1Expanded = true;
    };
};

document.querySelector('#sq-1-close-btn').addEventListener('click', collapse1)

function collapse1(){
    if(square1Expanded === true){
        square1.style="width: 8.25em;"
        document.querySelector('.sq-1-exp-content').style="display: none;";
        document.querySelector('.sq-1-init-content').style="display: flex;";
        square2.style="width: 8.25em;"
        square3.style="width: 8.25em;"
        square4.style="width: 8.25em;"
        square5.style="width: 8.25em;"
        square6.style="width: 8.25em;"
        setTimeout(function(){
            square1Expanded = false;
        },1)

    }
}

// Sqare 2

square2.addEventListener('click', expand2);

let square2Expanded = false;

function expand2() {
    if(square2Expanded === false){
        square2.style="width: 18em; height: 28em;";
        document.querySelector('.sq-2-exp-content').style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start;";
        document.querySelector('.sq-2-init-content').style="display: none;";
        square1.style="display: none";
        square3.style="display: none";
        square4.style="display: none";
        square5.style="display: none";
        square6.style="display: none";

        square2Expanded = true;
    };
};

document.querySelector('#sq-2-close-btn').addEventListener('click', collapse2)

function collapse2(){
    if(square2Expanded === true){
        square2.style="width: 8.25em;"
        document.querySelector('.sq-2-exp-content').style="display: none;";
        document.querySelector('.sq-2-init-content').style="display: flex;";
        square1.style="width: 8.25em;"
        square3.style="width: 8.25em;"
        square4.style="width: 8.25em;"
        square5.style="width: 8.25em;"
        square6.style="width: 8.25em;"
        setTimeout(function(){
            square2Expanded = false;
        },1)

    }
}


// Everything under here is for animated divs and I hated everything about designing it for the moment.  Maybe I'll come back to it, but I just want thigs to work rn, thx.

// // Square sizes
// const initSqSize = 'width: 8.25em; transition: 1s;'
// const expSqSize = 'width: 18em; height: 28em; transition: 1s;'
// const noSquare = 'width: 0; height: 0; transition: 1s;'

// // Square 1 
// square1.addEventListener('click', sq1ToggleExpand);

// let square1Expanded = false;

// function sq1ToggleExpand() {
//     if(square1Expanded === false){
//         square1.style="width: 18em; transition: 1s;"
//         // document.querySelector('.sq-1-init-content').classList.add('fade out');
//         setTimeout(function(){
//             square1.style="width: 18em; height: 28em; transition: 1s;"
//             document.querySelector('.sq-1-exp-content').style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start;"
//             document.querySelector('.sq-1-init-content').style="display: none;"
            
//         }, 1000)
        
//         square2.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-2-init-content').style="display: none";
//         square3.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-3-init-content').style="display: none";
//         square4.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-4-init-content').style="display: none";
//         square5.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-5-init-content').style="display: none";
//         square6.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-6-init-content').style="display: none";

//         square1Expanded = true;
//     }
// }

// const sq1CloseBtn = document.querySelector('#sq-1-close-btn');

// sq1CloseBtn.addEventListener('click', sq1ToggleClose);

// function sq1ToggleClose(){
//     if(square1Expanded === true){
//         document.querySelector('.sq-1-exp-content').style="display: none;"
//         square1.style=initSqSize
//         square2.style=initSqSize
//         square3.style=initSqSize
//         square4.style=initSqSize
//         square5.style=initSqSize
//         square6.style=initSqSize

//         // square1Expanded = false;
//         setTimeout(function(){
//             document.querySelector('.sq-1-init-content').style="display: flex;"
//             document.querySelector('.sq-2-init-content').style="display: flex;"
//             document.querySelector('.sq-3-init-content').style="display: flex;"
//             document.querySelector('.sq-4-init-content').style="display: flex;"
//             document.querySelector('.sq-5-init-content').style="display: flex;"
//             document.querySelector('.sq-6-init-content').style="display: flex;"
//             square1Expanded = false
//         }, 1000)
//     }
// }

// // Square 2

// square2.addEventListener('click', sq2ToggleExpand);

// let square2Expanded = false;

// function sq2ToggleExpand() {
//     if(square1Expanded === false){
//         square2.style="width: 18em; transition: 1s;"
//         // document.querySelector('.sq-1-init-content').classList.add('fade out');
//         setTimeout(function(){
//             square2.style="width: 18em; height: 28em; transition: 1s;"
//             document.querySelector('.sq-2-exp-content').style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start;"
//             document.querySelector('.sq-2-init-content').style="display: none;"
            
//         }, 1000)
        
//         square1.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-1-init-content').style="display: none";
//         square3.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-3-init-content').style="display: none";
//         square4.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-4-init-content').style="display: none";
//         square5.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-5-init-content').style="display: none";
//         square6.style="width: 0; height: 0; transition: 1s;"
//         document.querySelector('.sq-6-init-content').style="display: none";

//         square2Expanded = true;
//     }
// }

// const sq2CloseBtn = document.querySelector('#sq-2-close-btn');

// sq2CloseBtn.addEventListener('click', sq2ToggleClose);

// function sq2ToggleClose(){
//     if(square2Expanded === true){
//         document.querySelector('.sq-2-exp-content').style="display: none;"
//         square1.style=initSqSize
//         square2.style=initSqSize
//         square3.style=initSqSize
//         square4.style=initSqSize
//         square5.style=initSqSize
//         square6.style=initSqSize

//         // square1Expanded = false;
//         setTimeout(function(){
//             document.querySelector('.sq-1-init-content').style="display: flex;"
//             document.querySelector('.sq-2-init-content').style="display: flex;"
//             document.querySelector('.sq-3-init-content').style="display: flex;"
//             document.querySelector('.sq-4-init-content').style="display: flex;"
//             document.querySelector('.sq-5-init-content').style="display: flex;"
//             document.querySelector('.sq-6-init-content').style="display: flex;"
//             square2Expanded = false
//         }, 1000)
//     }
// }