import React from 'react';
import {firebaseApp} from '../fbase';
import {connect} from 'react-redux';
import {updateBookAction} from '../store/actions';

class AddBook extends React.Component {


    handleChange = (event) => {

        let newBook;

        if (event.target.name === "onStock") {
            newBook = {
                ...this.props.recipe,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.props.recipe,
                [event.target.name]: event.target.value
            };
        }

        this.props.updateBook(newBook);
    }
    addNewRecipe = (event) => {

        event.preventDefault();

        if (!this.props.editMode) {

            const newBook = { ...this.props.recipe };

            this.props.addNewRecipe(newBook);

            this.props.updateBook({
                recipe: {
                    recipeId: "",
                    name: "",
                    time: "",
                    componentsRecipe: "",
                    preparationDescription: "",
                    image: "",
                   }
            });

        } else {
            
            const newBook = { ...this.props.recipe };

            this.props.editBook(this.props.titleOfBookForRemoval, newBook);

            this.props.updateBook({
                    recipeId: "",
                    name : "",
                    time : "",
                    componentsRecipe : "",
                    preparationDescription : "",
                    image : "",
                });
        }

        event.target.reset();

    }


    render(){

        const label = this.props.editMode? "Edytuj" : "Dodaj";

        return(
            <div className="adminpanel col-md-4 adminrecipeadd">
            <h1>Dodawanie przepisów:</h1>
                    <form onSubmit={this.addNewRecipe}>
                        <div className="form-group">
                            <input type="number" placeholder="numer przepisu" id="name" name="recipeId" className="form-control"
                                onChange={this.handleChange} value={this.props.recipe.recipeId} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Nazwa przepisu" id="name" name="name" className="form-control"
                                onChange={this.handleChange} value={this.props.recipe.name} />
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Potrzebny czas" id="time" name="time" className="form-control"
                                onChange={this.handleChange} value={this.props.recipe.time} />
                        </div>
                        <div className="form-group">
                            <textarea type="text" placeholder="Składniki" id="componentsRecipe" name="componentsRecipe" className="form-control"
                                onChange={this.handleChange} value={this.props.recipe.componentsRecipe} />
                        </div>

                        <div className="form-group">
                            <textarea placeholder="Opis przygotowania" id="preparationDescription" name="preparationDescription" className="form-control"
                                onChange={this.handleChange} value={this.props.recipe.preparationDescription} />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Zdjęcie" id="image" name="image" className="form-control"
                                onChange={this.handleChange} value={this.props.recipe.image} />
                        </div>
                        <button type="submit" className="btn btn-primary">{label}</button>
                    </form>
                    <a href={firebaseApp.auth().signOut()} className="btn btn-danger loggin">Wyloguj się</a>
                </div> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBook : recipe => dispatch(updateBookAction(recipe))
    }
}

const mapStateToProps = state => {
    return {
        recipe : state.recipe,
        editMode : state.editBook,
        titleOfBookForRemoval : state.titleOfBookForRemoval
    }
}

const AddBookForm = connect(mapStateToProps,mapDispatchToProps)(AddBook)

export default AddBookForm;