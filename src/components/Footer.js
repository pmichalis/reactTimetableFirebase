import React from 'react';

class Footer extends React.Component {

    constructor(){
        super();
        this.state = {
            projectAuthorName : " programmed by P.Michalis",
            clicked : true,
            textColor : "white",
            backgroundColor : "black"

        }
    }



    render() {

        let  footerCss = {
            color : this.state.textColor,
            backgroundColor : this.state.backgroundColor
        }

        return ( 
            <div className="row footer" style={footerCss} onClick={this.handleClick}>
                <p>{this.state.projectAuthorName}</p>
            </div>
        );
    }
}

export default Footer;