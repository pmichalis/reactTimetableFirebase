import React from 'react';
export default class RecipeView extends React.Component {


    render() {
        return (
            <div className="orderView row">
            <div className="col-md-12">
                <p><strong>Nazwa przepis:</strong><br/>{this.props.book.name} </p>
                <i>Potrzebny czas: {this.props.book.time}</i><br/><br/>
                <p><strong>Składniki:</strong> <br/>{this.props.book.componentsRecipe}</p>
                <p><strong>Opis przygotowania:</strong> <br/>{this.props.book.preparationDescription}</p>
                
            </div>
            <div className="col-xs-4">
                <button className="btn btn-primary" onClick={ (event) => this.props.removeFromOrder(this.props.book.name)}>Zamknij</button>
            </div>
            </div>
                
        );
    }
    
}