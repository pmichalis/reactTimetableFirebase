import React from 'react';
import {connect} from 'react-redux';
import {sendBookToEditAction} from '../store/actions';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody,} from 'react-accessible-accordion';
 
import 'react-accessible-accordion/dist/fancy-example.css';

class BookView extends React.Component {

    render() {
        return (
            <div className="orderView row">

                <div>>
                    <span>{this.props.book.name} | {this.props.book.time} | /{this.props.book.componentsRecipe}/ [{this.props.book.preparationDescription}] 
                    </span>
                </div>
                <div className="col-xs-2">
                    <button className="btn btn-danger" onClick={ (event) => this.props.sendBookToEdit(this.props.book)}>Edit</button>
                </div>
                <div className="col-xs-2">
                    <button className="btn btn-danger" onClick={ (event) => this.props.removeFromInventory(this.props.book.name)}>Remove</button>
                </div>
                
            </div>
                
        );
    }

}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendBookToEdit : (book) => dispatch(sendBookToEditAction(book))
    }
}

const AdminBookView = connect(mapStateToProps,mapDispatchToProps)(BookView);

export default AdminBookView