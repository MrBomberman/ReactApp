import React from 'react';
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

const App = () => {

    const data = [
        {label: 'Going to learn React', important:true, id :'uu'},
        {label: 'That is good...', important:false, id: 'iol'},
        {label: 'I need to relax', important:false, id: 'uyt'}
    ];

    return (
        <AppBlock>
        <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;