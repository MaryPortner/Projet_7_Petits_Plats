export class RecipesFiltered{

    constructor(recipe, elSelected, list){
        this.recipe = recipe;
        this.elSelected = elSelected;
        this.list = list;
        // console.log(this.list);
    }


    byAppliances(){
        let appByRecipes = this.recipe.getAppliances();
        let count = 0;
        this.elSelected.forEach(app => {
            /** count recipes that contain selected tags */
            if(appByRecipes.indexOf(app) > -1){
                count ++;
            }
        });
    
        if( count ==   this.elSelected.length){
            /** Create a new recipe list when filtering by appliance selected */
            this.list.push(this.recipe);
        }
    }
   



}