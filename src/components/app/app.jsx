import React from 'react';

import AppHeader from '../app-header/app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list/post-list';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends React.Component {
    state = {
        data: [{
            label: "Going  to learn React",
            important: true,
            like: false,
            id: '0wi0hi759'
        },
        {
            label: "That is so good",
            important: false,
            like: false,
            id: '4tflz8dyh'
        },
        {
            label: "I need a break...",
            important: false,
            like: false,
            id: 'j4y8sl7mc'
        }],
        term: "",
        filter: "all"
    };

    // Генерация уникальных ID
    generateID = () => {
        return Math.random().toString(36).substr(2, 9);
    }
    // Удаление элемента со списка
    onDeleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        });
    }
    // Добавление элемента на страницу
    onAddPost = (body) => {
        if(body === ''){
            return alert('Напишите свою запись в поле ввода.')
        }
        const newPost = {
            label: body,
            important: false,
            id: this.generateID()
        }
        this.setState(({ data }) => {
            const newArray = [...data, newPost];

            return {
                data: newArray
            }
        })
    }
    // Пометка "Избранный пост"
    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            return this.onToggle(data, "important", id);
        })
    }
    // Пометка "Понравившегося поста"
    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            return this.onToggle(data, "like", id);
        })
    }
    // Изменение параметров для 'Пометок' в State
    onToggle = (data, param, id) => {
        const index = data.findIndex(elem => elem.id === id);

        const old = data[index];
        const newItem = { ...old, [param]: !old[param] };

        const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        return {
            data: newArray
        }
    }
    // Поиск постов
    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        })
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({
            term
        })
    }

    onFilterSelect = (filter) => {
        this.setState({
            filter
        })
    }

    render() {

        const { data, term, filter } = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    data={visiblePosts}
                    onDelete={this.onDeleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAddPost={this.onAddPost} />
            </AppBlock>
        );
    }
};
