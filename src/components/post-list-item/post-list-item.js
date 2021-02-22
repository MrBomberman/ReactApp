import React, {Component} from 'react';
import './post-list-item.css';


export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important: false, // состояние компонента
            like: false
        };

        this.onImportant = () =>  {
            this.setState(state => ({ // работает с состоянием компонента
                important: !state.important
            }))
        }

        this.onLike = () =>  {
            this.setState(state => ({ // работает с состоянием компонента
                like: !state.like
            }))
        }
    }



    render() { //  метод наших классов в виде компонентов

        const {label, onDelete} = this.props; // свойство, которое будет приходить в каждый новосозданный компонент PostListItem
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames = classNames + ' important'; // передадим калсс важности, если его нет у объекта
        }

        if (like) {
            classNames = classNames + ' like'; // передадим калсс важности, если его нет у объекта
        }

        return (
            <div className={classNames}> 
            <span className='app-list-item-label' onClick={this.onLike}>
                {label} 

            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button' className='btn-star btn-sm'
                onClick={this.onImportant}>
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

