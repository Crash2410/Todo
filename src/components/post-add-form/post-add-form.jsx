import React from 'react';
import './post-add-form.css'

export default class PostAddForm extends React.Component {

    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddPost(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {

        return (
            <form
                onSubmit={this.onSubmit}
                className='bottom-panel d-flex'
            >
                <input
                    className="form-control new-post-label"
                    placeholder="О чем вы думаете сейчас?"
                    type="text"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type='submit'
                    className="btn btn-outline-secondary"
                >Добавить</button>
            </form>
        );
    }
};
