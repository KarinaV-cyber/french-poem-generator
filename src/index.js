function generatePoem(event){
    event.preventDefault ();

new Typewriter('#poem', {
  strings: "Que par la douleur du partir Aimer a perdre la raison",
   autoStart: true,
   delay:1,
   cursor:"",
});
 
    //alert("Generating Poem");
}



let poemFormElement = document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener ("submit", generatePoem);