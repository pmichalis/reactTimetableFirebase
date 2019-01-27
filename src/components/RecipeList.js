import React from 'react';
import newId from './newid';


export default class RecipeList extends React.Component {


        componentWillMount() {
            this.id = newId();
        }

   
    render() {
        
        
        return (
            <div className="bookView row">
                <div className="col-xs-4"> 
                    <div className="btn" onClick={ (event) => this.props.showRecipe(this.props.recipe)}>{this.props.recipe.recipeId}. {this.props.recipe.name} </div>
                     </div>
                </div>
                
        );
    }
    
}