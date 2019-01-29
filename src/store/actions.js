export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const SEND_RECIPE_TO_EDIT = 'SEND_RECIPE_TO_EDIT';


export const updateRecipeAction = (recipe) => {
    return { 
        type: UPDATE_RECIPE, 
        payload: recipe 
    }
}

export const sendRecipeToEditAction = (recipe) => { 
 return {
    type: SEND_RECIPE_TO_EDIT,
    payload: recipe
 }
}