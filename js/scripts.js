selectedEmotion = null;

function demarrer($emotion) {
    selectedEmotion = $emotion;
    convoyer();
}

function convoyer() {
    //Descente arm
    gsap.to(".arm", { duration: 2, delay: 0, y: 200 });
    // monter arm + emoji
    gsap.to(".arm", { duration: 2, delay: 3, y: 0 });
    gsap.to("#emoji", { duration: 2, delay: 3, y: -200 });
    //tourner
    gsap.to(".arm", { duration: 2, delay: 5, x: 300 });
    gsap.to("#emoji", { duration: 2, delay: 5, x: 300 });
    gsap.to(".arm2", { duration: 2, delay: 5, x: 300, width: 30 });

    gsap.to(".arm", { duration: 2, delay: 7, x: 500 });
    gsap.to("#emoji", { duration: 2, delay: 7, x: 500 });
    gsap.to(".arm2", { duration: 2, delay: 7, x: 300, width: 245 });
    //descente arm + emoji
    gsap.to(".arm", { duration: 2, delay: 9, y: 144 });
    gsap.to("#emoji", { duration: 2, delay: 9, y: -50 });
    //monter arm
    gsap.to(".arm", { duration: 2, delay: 11, y: 0, onComplete: tapis1 });

}

function tapis1() {
    gsap.to("#emoji", { duration: 1, delay: 0, x: 582, onComplete: emotions });
}


function emotions() {
    gsap.to("#" + selectedEmotion + "-eyes", { duration: 1, delay: 0, y: 540 });
    gsap.to("#" + selectedEmotion + "-mouth", { duration: 1, delay: 1, y: 570, onComplete: tapis2 });
}

function tapis2() {
    gsap.to("#" + selectedEmotion + "-eyes", { duration: 2, delay: 1, left: 350 });
    gsap.to("#" + selectedEmotion + "-mouth", { duration: 2, delay: 1, left: 370 });
    gsap.to("#emoji", { duration: 2, delay: 1, x: 920 });
    gsap.to("#color1", { duration: 1, delay: 3, backgroundColor: 'red' });
    gsap.to("#color2", { duration: 1, delay: 3, backgroundColor: 'green' });
}

function selectColor($color) {
    gsap.to("#lever", { duration: 1, x: 20, ease: "elastic.out(1, 0.3)" });
    gsap.to("#lever", { duration: 1, x: 0, delay: 1, ease: "elastic.out(1, 0.3)" });
    gsap.to("#emoji", { duration: 2, delay: 2, x: 1130, backgroundColor: $color });
    gsap.to("#" + selectedEmotion + "-eyes", { duration: 2, delay: 2, left: 550 });
    gsap.to("#" + selectedEmotion + "-mouth", { duration: 2, delay: 2, left: 560 });
}