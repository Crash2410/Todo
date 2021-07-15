import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
import './post-list-item.scss';

export default class PostListItem extends React.Component {



    render() {
        const { label, onDelete, onToggleLiked, onToggleImportant, important, like } = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span
                    onClick={onToggleLiked}
                    className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center aling-items-center">
                    <button onClick={onToggleImportant} type="submit" className="btn-star btn-sm">
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                    <button
                        type="submit"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <FontAwesomeIcon icon={faTrash} color='black' />
                    </button>
                    <FontAwesomeIcon icon={faHeart} className="fa-heart" />
                </div>
            </div>
        );
    }
}
