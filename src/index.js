function displayPoem(response){
    console.log("poem generated");
// response.data.answer
new Typewriter("#poem", {
  strings: response.data.answer,
   delay:1,
   cursor:"🌟",
   autoStart: true,
});
}


function generatePoem(event){
    event.preventDefault ();

    //build the API URL
    //Make a call to the API using Axios
    //diplay the generated poem
     let instructionsInput=document.querySelector("#user-instructions");

    let apiKey="oa13410f1922d7b4t12b44ae83ead081";
        let context="You are a romantic love expert and love to write short poems. Your mission is to generate a 4 line poem  in basic HTML . Separate each line with a <br/>.  Sign the poem with `karina Smith` inside a <strong> element, at the end of the poem. Make sure to follow the user instructions.";
        let prompt=`User-instructions: Generate a french poem about ${instructionsInput.value}`;
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log (`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);

     //alert("Generating Poem");
}



let poemFormElement = document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener ("submit", generatePoem);