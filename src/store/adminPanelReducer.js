import {SEND_BOOK_TO_EDIT, UPDATE_BOOK} from './actions';

const initialState = {
    recipe : {
        recipeId: "",
        name: "",
        time: "",
        componentsRecipe: "",
        preparationDescription: "",
        image: "",
    },
    editMode : false,
    titleOfBookForRemoval: ""
}

const adminPanelReducer = (state = initialState, action) => {

    console.log("Action received " + action.type);

    switch(action.type) {
        case UPDATE_BOOK:
            const recipe = action.payload;
            return {...state, recipe};
        case SEND_BOOK_TO_EDIT:
            const bookToEdit = action.payload
            return { 
                ...state,
                recipe : {...bookToEdit},
                editMode: true,
                titleOfBookForRemoval: bookToEdit.name
            }
        default:
            return state;
    }
}

export default adminPanelReducer;