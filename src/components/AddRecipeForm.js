import React from 'react';
import {firebaseApp} from '../fbase';
import {connect} from 'react-redux';
import {updateRecipeAction} from '../store/actions';

class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }

    handleChange = (event) => {

        let newRecipe;

        if (event.target.name === "onStock") {
            newRecipe = {
                ...this.props.recipe,
                [event.target.name]: event.target.checked
            };
        } else {
            newRecipe = {
                ...this.props.recipe,
                [event.target.name]: event.target.value
            };
        }

        this.props.updateRecipe(newRecipe);
    }
    addNewRecipe = (event) => {

        event.preventDefault();

        if (!this.props.editMode) {

            const newRecipe = { ...this.props.recipe };

            this.props.addNewRecipe(newRecipe);

            this.props.updateRecipe({
                recipe: {
                    name: "",
                    time: "",
                    componentsRecipe: "",
                    preparationDescription: "",
                    image: "",
                   }
            });

        } else {
            
            const newRecipe = { ...this.props.recipe };

            this.props.editRecipe(this.props.titleOfRecipeForRemoval, newRecipe);

            this.props.updateRecipe({
                    name : "",
                    time : "",
                    componentsRecipe : "",
                    preparationDescription : "",
                    image : "",
                });
        }

        event.target.reset();

    }
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

    render(){

        const label = this.props.editMode? "Edytuj" : "Dodaj";
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        }
        return(
            <div className="adminpanel col-md-4 adminrecipeadd">
            <h1>Dodawanie przepisów:</h1>
                    <form onSubmit={this.addNewRecipe}>
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
                        <form onSubmit={this._handleSubmit}>
                        <input type="file" onChange={this._handleImageChange} value={this.props.recipe.image}/>
                        </form>
                            <div>{$imagePreview}</div>
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
        updateRecipe : recipe => dispatch(updateRecipeAction(recipe))
    }
}

const mapStateToProps = state => {
    return {
        recipe : state.recipe,
        editMode : state.editRecipe,
        titleOfRecipeForRemoval : state.titleOfRecipeForRemoval
    }
}

const AddRecipeForm = connect(mapStateToProps,mapDispatchToProps)(AddRecipe)

export default AddRecipeForm;