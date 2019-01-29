import {SEND_RECIPE_TO_EDIT, UPDATE_RECIPE} from './actions';

const initialState = {
    recipe : {
        name: "",
        time: "",
        componentsRecipe: "",
        preparationDescription: "",
        image: "",
    },
    editMode : false,
    titleOfRecipeForRemoval: ""
}

const adminPanelReducer = (state = initialState, action) => {

    console.log("Action received " + action.type);

    switch(action.type) {
        case UPDATE_RECIPE:
            const recipe = action.payload;
            return {...state, recipe};
        case SEND_RECIPE_TO_EDIT:
            const recipeToEdit = action.payload
            return { 
                ...state,
                recipe : {...recipeToEdit},
                editMode: true,
                titleOfRecipeForRemoval: recipeToEdit.name
            }
        default:
            return state;
    }
}

export default adminPanelReducer;