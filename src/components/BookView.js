import React from 'react';
export default class BookView extends React.Component {


    render() {
        return (
            <div className="bookView row">
                <div className="col-xs-4"></div>
                    <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/> 
                <div className="col-xs-4">
                    <b>{this.props.book.name}</b><br/>
                    <p>Description: {this.props.book.description}</p>
                </div>
                </div>
                
        );
    }
    
}