import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({ data }) => {

    const elements = data.map((post) => {
        if (typeof post === 'object' && !isEmptyObj(post)) {
            const { id, ...postProps } = post;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem
                        {...postProps}
                    />
                </li>
            );
        } else {
            return null;
        }
    });
    // Проверка на пустой объект
    function isEmptyObj(object) {
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default PostList;