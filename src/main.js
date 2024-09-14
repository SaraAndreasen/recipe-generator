function displayRecipe(response) {
  new Typewriter("#recipe-response", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt-input");
  let response = document.querySelector("#recipe-response");
  const apiKey = process.env.API_KEY;
  let context =
    "You are an AI assistant that loves all kinds of recipes. You like to share easy recipes with the metric system. Output the recipe using basic HTML and a line height of 1.5, you don't need to notify the user that it's written in HTML.";
  let prompt = promptInput.value.trim();
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  response.innerHTML = "Generating recipe...";

  axios.get(apiURL).then(displayRecipe);
}

const recipeGeneratorForm = document.querySelector("#recipe-generator-form");

recipeGeneratorForm.addEventListener("submit", generateRecipe);
