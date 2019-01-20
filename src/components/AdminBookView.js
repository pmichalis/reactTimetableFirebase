import React from 'react';
import newId from './newid';
import {connect} from 'react-redux';
import {sendBookToEditAction} from '../store/actions';


class BookView extends React.Component {

    componentWillMount() {
        this.id = newId();
    }

    
    render() {
        return (

            
            <div className="orderView row adminRecipeAdd tgrecipe">
               
                <div class="col-md-12 recipebody ">
                <div class="headerpercipe">
                   <div class="col-md-10 btrecipeadmin">
                   <h4>{this.id}. {this.props.book.name}</h4></div>
                    <div class="col-md-2 btrecipeadmin">
                    <i>Czas: {this.props.book.time} min</i></div>
                </div>
                <div>
                    <div class="col-md-4 btrecipeadmin">
                    {this.props.book.image}</div>
                    <div class="col-md-8 btrecipeadmin">
                    <strong>Składniki</strong><br/>
                    <div class="descriptioncomponents">
                    {this.props.book.componentsRecipe}</div>
                    </div>
                    <div class="col-md-12">
                    <strong>Opis przygotowania</strong><br/>
                    <div class="descriptioncomponents">
                    {this.props.book.preparationDescription}</div>
                    </div>
                    </div> 
                </div>
               <div className="col-md-12">
               <div className="col-xs-2 btrecipeadmin">
                    <button className="btn btn-danger" onClick={ (event) => this.props.sendBookToEdit(this.props.book)}>Edytuj</button>
                </div>
                <div className="col-xs-2 btrecipeadmin">
                    <button className="btn btn-danger" onClick={
                         (event) => 
                         window.confirm("Czy napewno chcesz usunąć ten przepis?") &&
                         this.props.removeFromInventory(this.props.book.name)
                         }>Usuń</button>
                </div>
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