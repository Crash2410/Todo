import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({ data, onDelete }) => {

    const elements = data.map((post) => {
        if (typeof post === 'object' && !isEmptyObj(post)) {
            const { id, ...postProps } = post;
            return (
                <ListGroupItem key={id} className='list-group-item'>
                    <PostListItem
                        {...postProps}
                        onDelete={() => onDelete(id)}   
                    />
                </ListGroupItem>
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
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    );
};

export default PostList;