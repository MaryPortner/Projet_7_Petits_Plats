import { getDatas } from "../utils/getData.js";
import { dropdown } from "../utils/filters.js";
import { displayNumberRecipes } from "../utils/counterRecipes.js";

/** Get recipes */ 
export const { recipes } = await getDatas();



const arrowAppareils = document.querySelector('#btn-filter-appareils .arrow');
const arrowIngredients = document.querySelector('#btn-filter-ingredients .arrow');
const arrowUstensiles = document.querySelector('#btn-filter-ustensiles .arrow');

const btnFilterAppareils = document.querySelector('#btn-filter-appareils');
const btnFilterIngredients = document.querySelector('#btn-filter-ingredients');
const btnFilterUstensiles = document.querySelector('#btn-filter-ustensiles');

const filterBarAppareils = document.querySelector('.main_filter-bar-appareils');
const filterBarIngredients = document.querySelector('.main_filter-bar-ingredients');
const filterBarUstensiles = document.querySelector('.main_filter-bar-ustensiles');




dropdown(filterBarAppareils, arrowAppareils, btnFilterAppareils);
dropdown(filterBarIngredients, arrowIngredients, btnFilterIngredients);
dropdown(filterBarUstensiles, arrowUstensiles, btnFilterUstensiles);
displayNumberRecipes();
