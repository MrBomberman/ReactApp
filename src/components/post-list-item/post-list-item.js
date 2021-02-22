import React, {Component} from 'react';
import './post-list-item.css';


export default class PostListItem extends Component {


    render() { //  метод наших классов в виде компонентов

        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props; // свойство, которое будет приходить в каждый новосозданный компонент PostListItem
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames = classNames + ' important'; // передадим калсс важности, если его нет у объекта
        }

        if (like) {
            classNames = classNames + ' like'; // передадим калсс важности, если его нет у объекта
        }

        return (
            <div className={classNames}> 
            <span className='app-list-item-label' onClick={onToggleLiked}>
                {label} 

            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button' className='btn-star btn-sm'
                onClick={onToggleImportant}>
                    <i className='fa fa-star'></i>
                </button>
                <button type='button' className='btn-trash btn-sm'
                onClick={onDelete}>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart' ></i>
            </div>
        </div>
        )
    }
}

