import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`

    margin: 0 auto;
    max-width: 800px;
`; // если хотим создать див со стилями

// const StyledAppBlock = styled(AppBlock)` 
//     backgroud-color: red;
// ` // один компонент будет создан на основе другого, используя правила обоих

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important:true, id :1},
                {label: 'That is good...', important:false, id: 2},
                {label: 'I need to relax', important:false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;

    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); // находим индекс id каждого объекта, находящегося в массиве и сравниваем с id элемента, на который нажали
            
            const before = data.slice(0, index); // вырезаем массив до индекса, на который кликнули
            const after = data.slice(index+1); // вырезаем оставшуюся часть массива, не включающую индекс(вырезанный элемент)

            const newArr = [...before, ...after]

            return {
                data : newArr
            }
        });
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render () {
        return (
            <AppBlock>
            <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data}
                onDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}

