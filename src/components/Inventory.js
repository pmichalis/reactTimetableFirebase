import React from 'react';
import RecipesView from './RecipesView';
import {fbase} from '../fbase';


class Inventory extends React.Component {
    
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount() {
        this.ref = fbase.syncState('MyFevoriteRecipes/recipes',{
            context: this,
            state: 'Recipes'
        });
   }

   componentWillUnmount() {
    fbase.removeBinding(this.ref);
   }
    
    render() {

        let recipeListing = <h3>Brak przepisów</h3>

        if(Array.isArray(this.state.recipes))
        recipeListing = this.state.recipes.map( recipe => {
                return <RecipesView recipe={recipe}/>
        });


        
        return (
        <div className="inventory col-md-6">
                <h2>Przepiski</h2>
                {recipeListing}
        </div>
        );
    }
}

export default Inventory;