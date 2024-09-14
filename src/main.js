function generateRecipe(event) {
  event.preventDefault();

  let inputResult = document.querySelector("#prompt-input");
  let recipeResponse = document.querySelector("#recipe-response");

  new Typewriter("#recipe-response", {
    strings: inputResult.value.trim(),
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

const recipeGeneratorForm = document.querySelector("#recipe-generator-form");

recipeGeneratorForm.addEventListener("submit", generateRecipe);
