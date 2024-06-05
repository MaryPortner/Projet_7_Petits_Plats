import { Recipe } from "./Recipe.js";

export class ListElements {

    constructor(recipe){
        this.recipes = recipe;
    }


    listAllIngredients(){
        const getIng = new Set();
        let allIng;

        this.recipes.forEach(r => {
            const rec = new Recipe(r);
            rec.getIngredients().forEach(ing => {
                getIng.add(ing);
            });
        });

        allIng = [...getIng].sort();
        return allIng;
    }


    listAllAppliances(){
        const getApp = new Set();
        let allApp;

        this.recipes.forEach(r => {
            const rec = new Recipe(r);
            getApp.add(rec.getAppliances());
        });

        allApp = [...getApp].sort();
        return allApp;

    }


    listAllUstensils(){
        const getUst = new Set();
        let allUst;

        this.recipes.forEach(r => {
            const rec = new Recipe(r);
            rec.getUstensils().forEach(ust =>{
                getUst.add(ust);
            });
        });

        allUst = [...getUst].sort();
        return allUst;
    }


}

