import React from 'react';


export default class RecipesView extends React.Component {


    render() {
        return (
            <div className="recipeView row">
            
                   
                <div className="col-xs-4">
                    <b>Nazwa przepisu: {this.props.recipe.name}</b><br/>
                    <p>Składniki: {this.props.recipe.components}</p> 
                    <p>Czas przygotowania:</p>
                    <p>Sposób przygotowania: {this.props.recipe.preparation}</p>
                </div>
                
                </div>
                
        );
    }
    
}