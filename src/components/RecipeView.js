import React from 'react';
export default class RecipeView extends React.Component {


    render() {
        return (
            <div className="bookView row">
                <div className="col-xs-4"></div>
                    <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/> 
                <div className="col-xs-4">
                <div>{this.props.book.name} | {this.props.book.time} <br />
                                <h3>Składniki</h3>
                                <p>{this.props.book.componentsRecipe}</p>
                                <p>{this.props.book.preparationDescription}</p>
                            
                </div>
                </div>
                </div>
                
        );
    }
    
}