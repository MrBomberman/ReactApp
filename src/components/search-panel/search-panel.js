import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) { // принимает e чтобы следить за тем, что вводим пользователь
        const term = e.target.value;
        this.setState({term}); //  стейт не зависит от предыдуещего, что ввел пользователь, то мы и выполняем
        this.props.onUpdateSearch(term); // берем из пропс функцию, которую мы передали и туда засовываем наш term
    }
    
    render() {
        return (
            <input
            className='form-control search-input'
            type='text'
            placeholder='Поиск по записям с английской раскладкой'
            onChange={this.onUpdateSearch}
            />
        )
    }
}

