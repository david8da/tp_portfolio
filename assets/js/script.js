// initialisation de AOS
AOS.init({
    duration: 500,
    delay:500,
  });

// mettre une animation de chargement
  function chargement(){
    document.getElementById('chargement').style.display='none';
    document.getElementById('site').style.visibility='visible';
 }
// fin animation de chargement

// Function strobe pour mettre un id en clignotement
strobeEffect();

var indiceOpacities =0;

var incrementTwoDirections=1;

function strobeEffect(){
            
    arrayOpacities = ["1","0.95","0.90","0.85","0.80","0.75","0.70","0.65","0.60","0.55","0.50","0.45","0.40","0.35","0.30","0.25","0.20","0.15","0.10","0.05","0"];
    
    opacity=arrayOpacities[indiceOpacities];
    // on change le signe de l'increment pour balayer le tableau dans un sens puis dans l'autre
    
    indiceOpacities+=incrementTwoDirections;if (indiceOpacities==20) incrementTwoDirections-=2;if (indiceOpacities==0) incrementTwoDirections+=2;
    // vitesse du fading se regle ici en ms
    xx=setTimeout("strobeEffect()",200);  
    
    var elementsStrobing = document.getElementsByClassName('strobe')
    for (let i = 0 ; i < elementsStrobing.length ; i++ ){
        
        elementsStrobing[i].style.opacity = opacity;
    }
    
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



