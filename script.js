// Utilisation de JS (et un bout de jquery)

//
// // Initialiser un déplacement
// var dragImg = new Image(); //Préchargement d'une image de drag, dans un objet issu de la classe Image. Il est conseillé de le faire pour etre sûr qu'elle s'affiche pendant le déplacement.
// dragImg.src = "dog.jpg";
// document.querySelector('*[draggable="true"]').addEventListener('dragstart', function(e){
//     e.dataTransfer.setData('text/plain',"");
//     e.dataTransfer.setDragImage(dragImg, 183, 183);
// });
// // Définir une zone de drop
//
// var dropper = document.querySelector('.dropper');
//
// dropper.addEventListener('dragover', function(e){
//   e.preventDefault(); // Annule l'interdiction de drop
// });
//
// dropper.addEventListener('dragover', function(e){
//   e.preventDefault(); // Annule l'interdiction de drop
//   dropper.style.backgroundColor = "yellow";
// });
//
// // Terminer un déplacement
//

// Initialiser le déplacement
function drag(e) {
  e.dataTransfer.setData("text/plain",e.target.id);
}

// Autoriser le drop dans un dropper
function allowDrop(e) {
  e.preventDefault();
  $('.dropper').css("background-color","yellow");
}


function drop(e) {
  e.preventDefault(); // Pour autoriser à nouveau le drop
  var data = e.dataTransfer.getData("text/plain"); //Récupérer les données
  e.target.appendChild(document.getElementById(data)); //Ajouter la donnée à la cible
}
