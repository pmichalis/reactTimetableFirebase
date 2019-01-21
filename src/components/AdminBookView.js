import React from 'react';
import newId from './newid';
import {connect} from 'react-redux';
import {sendBookToEditAction} from '../store/actions';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


class BookView extends React.Component {

componentWillMount() {
    this.id = newId();
}
   
render() {
        return (
            <div className="orderView row adminRecipeAdd tgrecipe">
               <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <div>
                        <div class="col-md-8 btrecipeadmin"><strong>{this.id}. {this.props.book.name}</strong></div>
                        <div class="col-md-2 btrecipeadmin">{this.props.book.time} minut</div>
                        <div className="col-xs-1 btrecipeadmin">
                            <button className="btn btn-danger" onClick={ (event) => this.props.sendBookToEdit(this.props.book)}>Edytuj</button>
                        </div>
                                <div className="col-xs-1 btrecipeadmin"> 
                            <button className="btn btn-danger" onClick={(event) => 
                            window.confirm("Czy napewno chcesz usunąć ten przepis?") &&
                            this.props.removeFromInventory(this.props.book.name)
                            }>Usuń
                            </button>
                        </div>
                        </div>
                    </AccordionItemTitle>
                <AccordionItemBody>
                    <div>
                        <div class="col-md-4 btrecipeadmin">{this.props.book.image}</div>
                        <div class="col-md-8 btrecipeadmin"><strong>Składniki</strong><br/>
                        <div class="descriptioncomponents">{this.props.book.componentsRecipe}</div></div>
                    </div>  
                    <div class="col-md-12">
                        <strong>Opis przygotowania</strong><br/>
                        <div class="descriptioncomponents">{this.props.book.preparationDescription}</div>
                    </div>
                 </AccordionItemBody>
                </AccordionItem>
            </Accordion>
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