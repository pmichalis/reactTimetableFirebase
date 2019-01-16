import React from 'react';
import {firebaseApp} from '../fbase';
import {connect} from 'react-redux';
import {updateBookAction} from '../store/actions';

class AddBook extends React.Component {

    handleChange = (event) => {

        let newBook;

        if (event.target.name === "onStock") {
            newBook = {
                ...this.props.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.props.book,
                [event.target.name]: event.target.value
            };
        }

        this.props.updateBook(newBook);
    }

    addNewBook = (event) => {

        event.preventDefault();

        if (!this.props.editMode) {

            const newBook = { ...this.props.book };

            this.props.addNewBook(newBook);

            this.props.updateBook({
                   book: {
                    name: "",
                    description: "",
                    image: "",
                   }
            });

        } else {
            
            const newBook = { ...this.props.book };

            this.props.editBook(this.props.titleOfBookForRemoval, newBook);

            this.props.updateBook({
                        name: "",
                        description: "",
                        image: "",
             });
        }

        event.target.reset();

    }


    render(){

        const label = this.props.editMode? "Edit" : "Add";

        return(
            <div className="adminpanel col-md-4">
                    <form onSubmit={this.addNewBook}>
                        <div className="form-group">
                            <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
                                onChange={this.handleChange} value={this.props.book.name} />
                        </div>

                        <div className="form-group">
                            <textarea placeholder="Book description" id="description" name="description" className="form-control"
                                onChange={this.handleChange} value={this.props.book.description} />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                                onChange={this.handleChange} value={this.props.book.image} />
                        </div>

                        
                        <button type="submit" className="btn btn-primary">{label}</button>
                    </form>
                    <a href={firebaseApp.auth().signOut()} className="btn btn-danger loggin">Log Out</a>
                    <a href="javascript:history.back();" className="btn btn-danger loggin">Back</a>
                </div> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBook : book => dispatch(updateBookAction(book))
    }
}

const mapStateToProps = state => {
    return {
        book : state.book,
        editMode : state.editBook,
        titleOfBookForRemoval : state.titleOfBookForRemoval
    }
}

const AddBookForm = connect(mapStateToProps,mapDispatchToProps)(AddBook)

export default AddBookForm;