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
                {label: 'Going to learn React', important:true,like:false, id :1},
                {label: 'That is good...', important:false,like:false, id: 2},
                {label: 'I need to relax', important:false,like:false, id: 3}
            ],
            term: '', // будем использовать, чтобы проходится по нашим постам и пытаться найти пост, который понравился пользователю
            filter: 'all' // состояние говорит о том, как именно отфильтровать наши посты
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

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

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); // получаем номер поста данных, берем каждый элемент и проверяем
            
            const old = data[index]; // получаем элемент, в который кликнули по индексу
            const newItem = {...old, important: !old.important} // меняем свойство объекта, который получили

            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)]; // формируем новый объект с уже измененным элементом
            // помещаем новый объект на место старого

            return {
                data: newArr // перезаписываем наш стейт, присваивая новый массив
            }
        })
    }

    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); // получаем номер поста данных, берем каждый элемент и проверяем
            
            const old = data[index]; // получаем элемент, в который кликнули по индексу
            const newItem = {...old, like: !old.like} // меняем свойство объекта, который получили

            const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)]; // формируем новый объект с уже измененным элементом
            // помещаем новый объект на место старого

            return {
                data: newArr // перезаписываем наш стейт, присваивая новый массив
            }
        })
    }


    searchPost(items, term) { //  в items дуем искать посты и строка поиска - term    
        if (term.length === 0){ // если пользователь ничего не ввел, просто возвращаем наши посты
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1; // в каждом элементе находим свойство label, а внутри этого свойства находим то, что ввел пользователь
        });
    }

    filterPost(items, filter){
        if (filter === 'like') {
            return items.filter(item => item.like) //  через эту функцию формируем новый объект пролайканых элементов
        } else {
            return items // иначе возвращаем все элементы, которые попали в нашу главную функцию
        }
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

    
    render () {
        const {data, term, filter} = this.state; // деструктурируем массив

        const liked = data.filter(item => {
            return item.like; // проходимся по каждому элементу, проверяя состояние like, если true, то мы возвращаем элемент с лайком
        }).length; // получаем кол-во лайкнутых элементов в новом массиве

        const allPosts = data.length; // узнаем кол-во постов в общем


        const visiblePosts = this.filterPost(this.searchPost(data, term), filter); // передаем данные, из которых будут вытаскиваться посты
        // сначала передаем массив, которые был сформирован функцией  searchPost,а второй аргумент - фильтер
        return (
            <AppBlock>
            <AppHeader
            liked={liked}
            allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}

