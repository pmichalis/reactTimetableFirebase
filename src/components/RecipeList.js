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

                    <div className="btn" onClick={ (event) => this.props.addToOrder(this.props.recipe)}>{this.id}. {this.props.recipe.name} </div>
                </div>
                </div>
                
        );
    }
    
}