function displayRecipe(response) {
  new Typewriter("#recipe-response", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 5,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt-input");
  let response = document.querySelector("#recipe-response");
  const apiKey = "c3tf38bfdaaca9c9406e786o84b5cbf8";
  let context =
    "You are an AI assistant that loves all kinds of recipes. You like to share easy recipes with the metric system. Output the recipe using basic HTML but do not change the styling of other elements other than what you're outputting. Add a line height of 1.5 to your output, you don't need to notify the user that it's written in HTML nor display it.";
  let prompt = promptInput.value.trim();
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  response.innerHTML = `<div class="blink">🍽 Generating recipe about ${prompt}..</div>`;

  axios.get(apiURL).then(displayRecipe);
}

const recipeGeneratorForm = document.querySelector("#recipe-generator-form");

recipeGeneratorForm.addEventListener("submit", generateRecipe);
