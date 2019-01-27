import React from 'react';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';
import Footer from './Footer';

import '../index.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            order : []
        }
    }


    showRecipe = (recipe) => {
        this.setState({
            order : [...this.state.order, recipe]
        })
    }

    closeRecipe = (title) => {
        this.setState({
            order : this.state.order.filter(recipe => title!==recipe.name)
        })
    }
    render() {
        return (
            <div className="app container">
                <Header />
                <input type="text" ></input>
                <div className="row">
               
                <Inventory recips={this.state.recips} showRecipe={this.showRecipe}/>
                    <Order order={this.state.order} closeRecipe={this.closeRecipe}/>
                </div>
                <Footer />
            </div>
        )
    }

}


export default App;