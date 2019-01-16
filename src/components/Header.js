import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            recipeInvName : "Pzepiśnik",
            clicked : true,
            textColor : "white",
            backgroundColor : "black"

        }
    }
    render() {
        let  headerCss = {
            color : this.state.textColor,
            backgroundColor : this.state.backgroundColor
        }
        return ( 
            <div className="row header" style={headerCss}>
                <h1>{this.state.recipeInvName}</h1>
                <Link to="/admin"><button className="btn btn-info gotoadmin">Admin</button></Link>
            </div>
        );
    }
}

export default Header;