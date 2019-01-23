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


    addToOrder = (recipe) => {
        this.setState({
            order : [...this.state.order, recipe]
        })
    }

    removeFromOrder = (title) => {
        this.setState({
            order : this.state.order.filter(recipe => title!==recipe.name)
        })
    }
    render() {
        return (
            <div className="app container">
                <Header />
                <div className="row">
                <Inventory recips={this.state.recips} addToOrder={this.addToOrder}/>
                    <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                </div>
                <Footer />
            </div>
        )
    }

}


export default App;