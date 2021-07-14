import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
import './post-list-item.scss';

export default class PostListItem extends React.Component {

    state = {
        important: false,
        like: false
    }

    onImportant = () => {
        this.setState(({ important }) => ({
            important: !important
        }))
    }

    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    render() {
        const { label, onDelete } = this.props;
        const { important = false, like = false } = this.state;

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
                    onClick={this.onLike}
                    className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center aling-items-center">
                    <button onClick={this.onImportant} type="submit" className="btn-star btn-sm">
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
