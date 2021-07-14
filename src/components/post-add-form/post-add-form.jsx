import React from 'react';
import './post-add-form.css'

const PostAddForm = ({ onAddPost }) => {
    return (
        <div className='bottom-panel d-flex'>
            <input
                className="form-control new-post-label"
                placeholder="О чем вы думаете сейчас?"
                type="text"
            />
            <button
                onClick={() => onAddPost('Hello')}
                type='submit'
                className="btn btn-outline-secondary"
            >Добавить</button>
        </div>
    );
};

export default PostAddForm;