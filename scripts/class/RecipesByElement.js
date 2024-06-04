export class RecipesByElements{
    constructor(recipe, elSelected, list){
        this.recipe = recipe;
        this.elSelected = elSelected;
        this.list = list;
    }


    byAppliances(){
        list
        let appByRecipes = this.recipe.getAppliances();
        return appByRecipes;
    }
}