import React, { Component } from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';


export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) =>{ // вытаскиваем оба элемента из массива объектов
            // формирует массив из кнопок, в зависимости от их кол-ва
            const {filter, onFilterSelect} = this.props;
            const active = filter === name; // если совпадут фильтры по активности, станет тру и кнопка автоматически станет активной
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={name} type='button' className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)}>{label}</button>
            )
        });
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
     }
}

