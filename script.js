//nombre instrucciones y foto
//www.thecocktaildb.com/api/json/v1/1/random.php
//buscar cocteles por nombre
//www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

let nombre_coctel = document.querySelector(".nombre");
let foto_coctel = document.querySelector("#foto_coctel");
let instrucciones_coctel = document.querySelector(".instrucciones");
let boton_generar = document.querySelector(".generar_coctel");
let texto_intro = document.getElementById("intro");
let ingredientes = document.querySelector(".ingredientes");

boton_generar.addEventListener("click", llamarApi);

function llamarApi() {
  ingredientes.innerHTML = "<h3>Ingredients</h3>";
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then(function dameCoctel(coctel) {
      console.log(coctel.drinks[0]);

      let lista_ingredientes = [
        coctel.drinks[0].strIngredient1,
        coctel.drinks[0].strIngredient2,
        coctel.drinks[0].strIngredient3,
        coctel.drinks[0].strIngredient4,
        coctel.drinks[0].strIngredient5,
        coctel.drinks[0].strIngredient6,
        coctel.drinks[0].strIngredient7,
        coctel.drinks[0].strIngredient8,
        coctel.drinks[0].strIngredient9,
        coctel.drinks[0].strIngredient10,
        coctel.drinks[0].strIngredient11,
        coctel.drinks[0].strIngredient12,
        coctel.drinks[0].strIngredient13,
        coctel.drinks[0].strIngredient14,
        coctel.drinks[0].strIngredient15,
      ];

      let lista_medidas = [
        coctel.drinks[0].strMeasure1,
        coctel.drinks[0].strMeasure2,
        coctel.drinks[0].strMeasure3,
        coctel.drinks[0].strMeasure4,
        coctel.drinks[0].strMeasure5,
        coctel.drinks[0].strMeasure6,
        coctel.drinks[0].strMeasure7,
        coctel.drinks[0].strMeasure8,
        coctel.drinks[0].strMeasure9,
        coctel.drinks[0].strMeasure10,
        coctel.drinks[0].strMeasure11,
        coctel.drinks[0].strMeasure12,
        coctel.drinks[0].strMeasure13,
        coctel.drinks[0].strMeasure14,
        coctel.drinks[0].strMeasure15,
      ];

      for (let i = 0; i < lista_ingredientes.length; i++) {
        if (lista_ingredientes[i] != null && lista_ingredientes[i] != "") {
        }
      }

      for (let i = 0; i < lista_medidas.length; i++) {
        if (lista_medidas[i] != null && lista_medidas[i] != "") {
          ingredientes.innerHTML +=
            "<li>" + lista_medidas[i] + " " + lista_ingredientes[i] + "</li>";
        }
      }

      boton_generar.innerHTML = "Try another one";
      intro.style.display = "none";
      nombre_coctel.innerHTML = coctel.drinks[0].strDrink;
      foto_coctel.src = coctel.drinks[0].strDrinkThumb;
      foto_coctel.classList.add("foto_aparece");
      instrucciones_coctel.innerHTML =
        "<h3>Instructions</h3>" + coctel.drinks[0].strInstructions;
    });
}
