import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){ // нужен, чтобы получить значение из нашего инпута
        this.setState({ //  не передаем функцию так как стейт не зависит от того, что мы вводим
            text: e.target.value // перезаписываем в состояние то, что мы вводим
        })
    }
    
    onSubmit(e) {
        e.preventDefault(); // позволяет отменить стандартное поведение браузера и отправку формы
        this.props.onAdd(this.state.text) // добавляем в форму изменение нашего состояния
        this.setState({
            text: '' // автоматически очищаем стейт после отправки
        });
    }

    render() {
        return (
            <form className='bottom-panel d-flex'
            onSubmit={this.onSubmit}>
                <input  
                type='text'
                placeholder='О чем вы думаете сейчас?'
                className='form-control new-post-label'
                onChange={this.onValueChange}
                value={this.state.text}
                />
                <button
                type='submit'
                className='btn btn-outline-secondary'>Добавить</button>
            </form>
        )
    }
}

