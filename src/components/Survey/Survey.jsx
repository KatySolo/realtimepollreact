import React, { Component } from 'react';
import { InputWithLable } from './components/InputWithLable/InputWithLable';
import { SelectorWithLable } from './components/SelectorWithLable/SelectorWithLable';
import { RatingWithLable } from './components/RatingWithLable/RaitingWithLable';
import { ThreeColumnsLayout } from './components/containers/ThreeColumnsLayout';
import { SubmitButton } from './components/SubmitButton/SubmitButton';


export class Survey extends Component {
    constructor(props) {
        super(props);
        // TODO вынести это в высший state
        this.state = {
            name: '',
            form: 0,
            interest: 0,
            constent: 0,
            comment: '',
            sessionId: -1
        }
        // TODO тюкнуть сагу бы сюда... 
    }

    render() {
        return (
            <div className='survey'>
                {/* name */}
                <InputWithLable inline={true} lable="Введите имя"/> 
                {/* sessionId */}
                <SelectorWithLable lable="Выбирете лекцию"/>
                {/* form, interest, content */}
                <ThreeColumnsLayout>
                    <RatingWithLable lable='Форма' />
                    <RatingWithLable lable='Интерес' />
                    <RatingWithLable lable='Содержание' />
                </ThreeColumnsLayout>
                {/* comment */}
                <InputWithLable inline={false} lable="Введите коментарии, что понравилось, а что нужно подтянуть"/>
                <SubmitButton text='Отправить'/>
            </div>
        );
    }
}