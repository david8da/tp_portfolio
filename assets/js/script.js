// initialisation de AOS
AOS.init({
    duration: 1200,
    delay:500,
  });


// Function strobe pour mettre un id en clignotement

var arrayColors = new Array("rgb(255,255,255,1)","rgb(255,255,255,0.95)","rgb(255,255,255,0.90)","rgb(255,255,255,0.85)","rgb(255,255,255,0.80)","rgb(255,255,255,0.75)","rgb(255,255,255,0.70)","rgb(255,255,255,0.65)","rgb(255,255,255,0.60)","rgb(255,255,255,0.55)","rgb(255,255,255,0.50)","rgb(255,255,255,0.45)","rgb(255,255,255,0.40)","rgb(255,255,255,0.35)","rgb(255,255,255,0.30)","rgb(255,255,255,0.25)","rgb(255,255,255,0.20)","rgb(255,255,255,0.15)","rgb(255,255,255,0.10)","rgb(255,255,255,0)");

strobeEffect();


var indiceColorIntense=0;
var incrementTwoDirections=1;

 function strobeEffect(){
    color=arrayColors[indiceColorIntense];
    // on change le signe de l'increment pour balayer le tableau dans un sens puis dans l'autre
    indiceColorIntense+=incrementTwoDirections;if (indiceColorIntense==20) incrementTwoDirections-=2;if (indiceColorIntense==0) incrementTwoDirections+=2;
    // vitesse du fading se regle ici en ms
    xx=setTimeout("strobeEffect()",200);  
    
    var elementsStrobing = document.getElementsByClassName('strobe')
    for (let i = 0 ; i < elementsStrobing.length ; i++ ){
        elementsStrobing[i].style.color = color;
    }
    // document.getElementById('strobe').style.color = color;
}


// Fin function strobe
  

//animation fleche pour revenir au top
window.addEventListener('scroll', function(){
    // window.scrollY nous permet d'avoir la distance entre le haut et le scroll effectué, c'est une valeur en px
    //console.log(window.scrollY);

    //donner un style à la fleche pendant le scrolling puis le retirer à l'arret du scrolling
    var x = setInterval(borderStyleFading, 3000);
    
    function borderStyleFading(){
        document.getElementById('back-to-top').style.border = 'none'; 
    }
    
    document.getElementById('back-to-top').style.border = '3px solid purple';
    
    //je n'ai pas réussi à faire fonctionner le scrollspy de bootstrap
    //je code un équivalent non dynamique
    // je teste les position de scrollY
    console.log("scroll y vaut: " + window.scrollY);
    //fin test
    // code du scrollspy navbar
    //il faut aussi nettoyer ce que fait le clique sur nav-item
    if(this.window.scrollY > 550){
        document.getElementById('nav-item-propos').classList.add('active');
        document.getElementById('nav-item-competences').classList.remove('active');
        document.getElementById('nav-item-parcours').classList.remove('active');
        document.getElementById('nav-item-realisations').classList.remove('active');
        document.getElementById('nav-item-contact').classList.remove('active');
    }
    if(this.window.scrollY > 1400){
        document.getElementById('nav-item-propos').classList.remove('active');
        document.getElementById('nav-item-competences').classList.add('active');
        document.getElementById('nav-item-parcours').classList.remove('active');
        document.getElementById('nav-item-realisations').classList.remove('active');
        document.getElementById('nav-item-contact').classList.remove('active');
    }
    if(this.window.scrollY > 2200){
        document.getElementById('nav-item-propos').classList.remove('active');
        document.getElementById('nav-item-competences').classList.remove('active');
        document.getElementById('nav-item-parcours').classList.add('active');
        document.getElementById('nav-item-realisations').classList.remove('active');
        document.getElementById('nav-item-contact').classList.remove('active');
    }
    if(this.window.scrollY > 3200){
        document.getElementById('nav-item-propos').classList.remove('active');
        document.getElementById('nav-item-competences').classList.remove('active');
        document.getElementById('nav-item-parcours').classList.remove('active');
        document.getElementById('nav-item-realisations').classList.add('active');
        document.getElementById('nav-item-contact').classList.remove('active');
    }
    if(this.window.scrollY > 4900){
        document.getElementById('nav-item-propos').classList.remove('active');
        document.getElementById('nav-item-competences').classList.remove('active');
        document.getElementById('nav-item-parcours').classList.remove('active');
        document.getElementById('nav-item-realisations').classList.remove('active');
        document.getElementById('nav-item-contact').classList.add('active');

    }

    // fin code du scrollspy navbar

    if(window.scrollY > 500){
        document.getElementById('back-to-top').style.display = 'block';
        

    } else{
        document.getElementById('back-to-top').style.display = 'none';
    }

    

});

// Animations sur le mouseenter
var elementsHeading = document.getElementsByClassName("animated_heading");
for (let i = 0 ; i < elementsHeading.length ; i++ ){


elementsHeading[i].addEventListener('mouseenter', function () {
    this.classList.add("animate__shakeX");
    this.classList.add("animate__animated");

    this.addEventListener('mouseout', function () {
        this.classList.remove("animate__shakeX");
        this.classList.remove("animate__animated");
    });


});

};

var elementsButton = document.getElementsByClassName("animated_button");
console.log(elementsButton);
for (let i = 0 ; i < elementsButton.length ; i++ ){

elementsButton[i].addEventListener('mouseenter', function(){
    this.classList.add("animate__flash");
    this.classList.add("animate__animated");

    this.addEventListener('mouseout', function () {
        this.classList.remove("animate__flash");
        this.classList.remove("animate__animated");
    });

});

};


// je repère les clique sur les items de la navbar
elementsNavItems = document.getElementsByClassName("nav-item");

for (let i = 0; i < elementsNavItems.length; i++) {

        
    
    elementsNavItems[i].addEventListener('click', function () {
        
        let elementsNavItemsOld = document.getElementsByClassName("nav-item");
            // avec cette boucle je nettoie
            for (let j = 0; j < elementsNavItems.length; j++) {
                
                elementsNavItems[i].classList.remove('active');
            }

        
            
        
            elementsNavItems[i].classList.add('active');

        
        
        
        
        
        
    });

};



