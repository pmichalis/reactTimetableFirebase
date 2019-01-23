import React from 'react';
import RecipeList from './RecipeList';
import {fbase} from '../fbase';

class Inventory extends React.Component {
    
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount() {
        this.ref = fbase.syncState('myrecipes/recipes',{
            context: this,
            state: 'recips'
        });
   }

   componentWillUnmount() {
       fbase.removeBinding(this.ref);
   }
    
    render() {

        let bookListing = <h3>No recips on firebase!</h3>

        if(Array.isArray(this.state.recips))
            bookListing = this.state.recips.map( recipe => {
                return <RecipeList recipe={recipe} addToOrder={this.props.addToOrder}/>
        });
        
        return (
        <div className="inventory col-md-4">
                {bookListing}
        </div>
        );
    }
}

export default Inventory;