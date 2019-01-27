import React from 'react';
import RecipeView from './RecipeView';




class Order extends React.Component {
   
    render() {
        const orderedBooks = this.props.order.map( order => {
            return <RecipeView recipe={order} 
            closeRecipe={this.props.closeRecipe}
            />
        })


        return (
        <div className="order col-md-8">
           {orderedBooks}
        </div>
        );
    }
}

export default Order;