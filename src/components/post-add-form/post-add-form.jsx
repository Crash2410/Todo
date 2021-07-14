import React from 'react';
import './post-add-form.css'

const PostAddForm = () => {
    return (
        <form className='bottom-panel d-flex'>
            <input
                className="form-control new-post-label"
                placeholder="О чем вы думаете сейчас?"
                type="text"
            />
            <button
                type='submit'
                className="btn btn-outline-secondary"
            >Добавить</button>
        </form>
    );
};

export default PostAddForm;