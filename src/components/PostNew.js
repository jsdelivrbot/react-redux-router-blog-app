import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';

class PostNew extends Component {


    renderField(field) {


        const {meta} = field;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;


        return (
            <div className={className}>
                <label>{ field.label }</label>
                <input type="text" placeholder={field.placeholder}
                       className="form-control"
                       {...field.input}/>
                <small className="text-help">{ meta.touched ? meta.error : '' }</small>
            </div>
        )

    }

    /**
     *
     * @param values
     */
    onSubmit(values) {

        this.props.createPost(values, ()=> {
            this.props.history.push('/');
        });

    }

    render() {

        const {handleSubmit} = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
                <h3>New PostPosts</h3>

                <Field label="Title" name="title" placeholder="Title" component={this.renderField}/>
                <Field label="Categories" name="categories" placeholder="Category 1, Category 2"
                       component={this.renderField}/>
                <Field label="Content" name="content" placeholder="" component={this.renderField}/>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }

}

function validate(values) {

    const errors = {};

    // validate the inputs from 'values'

    // if (values.title.length < 3){
    //     errors.title = "Title must be at least 3 character";
    // }

    if (!values.title) {
        errors.title = "Enter a title!"
    }

    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }


    //logic to validate inputs

    return errors;
}


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost})(PostNew)

);
