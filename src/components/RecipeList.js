import React from 'react';
import _ from 'lodash'

export default class RecipeList extends React.Component {
   
    constructor(props) {
        super(props);
        this.id = _.uniqueId("")
    }
    
    render() {
        
        return (
            <div className="bookView row">
                <div className="col-xs-4"> 
                    <div className="btn" onClick={ (event) => this.props.showRecipe(this.props.recipe)}>{this.id}. {this.props.recipe.name} </div>
                     </div>
                </div>
                
        );
    }
    
}