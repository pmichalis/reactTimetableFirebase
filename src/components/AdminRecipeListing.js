import React from 'react';
import AdminRecipeView from './AdminRecipeView'

class AdminRecipeListing extends React.Component {


    render() {

        let list = <div>No recips in state</div>;

        if(this.props.recips && Array.isArray(this.props.recips)) {
            list = this.props.recips.map((recipe) => {
               return (<AdminRecipeView  
                    key = {recipe.name}
                    recipe = {recipe} 
                    removeFromInventory = {this.props.removeFromInventory} 
                />)
               });
        } 

       return (
           <div class="adminrecipeadd col-md-8">
            {list}
           </div>
       )
}
}

export default AdminRecipeListing;