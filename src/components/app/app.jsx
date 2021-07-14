import React from 'react';
import nextId from "react-id-generator";

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
            id: '0wi0hi759'
        },
        {
            label: "That is so good",
            important: false,
            id: '4tflz8dyh'
        },
        {
            label: "I need a break...",
            important: false,
            id: 'j4y8sl7mc'
        }]
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

    render() {
        const { data } = this.state;
        console.log(data)
        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    data={data}
                    onDelete={this.onDeleteItem}
                />
                <PostAddForm onAddPost={this.onAddPost} />
            </AppBlock>
        );
    }
};
