import React from 'react';

export default class RecipeView extends React.Component {

    render() {
        return (
            <div className="orderView row">
            <div className="col-md-12">
            <div className="col-md-8">
            <div id={this.props.recipe.name}>
                <strong>{this.props.recipe.name}</strong>
            </div>
            </div>
            <div className="col-md-4">
                {this.props.recipe.time}
            </div>
            <div className="col-md-4">
                {this.props.recipe.image}
            </div>
            <div className="col-md-8">
            <strong>Składniki:</strong> <br/>
                {this.props.recipe.componentsRecipe}
            </div>
            <div className="col-md-12">
            <strong>Opis przygotowania:</strong> <br/>
                {this.props.recipe.preparationDescription}
            </div>
            </div>
            <div className="col-xs-4">
                <button className="btn btn-primary" onClick={ (event) => this.props.closeRecipe(this.props.recipe.name)}>Zamknij</button>
            </div>
            </div>
                
        );
    }
    
}