import React, { Component } from 'react';
import './styles.css'

export class SessionInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'testTitle',
            start: '02.03.2019',
            finish: '03.03.2019',
            count: 10,
            form: 5.5,
            interest: 5.3,
            content: 3.7,
            comments:[]
        }
    }

    componentDidMount(){
        //TODO collect all data from back
    }

    render() {
        return (
            <div className="sessinoInfo">
                <div className='sessionTitle'><b>Название сессии: </b>{this.state.title}</div>
                <div className='sessionStart'><b>Начало сессии: </b>{this.state.start}</div>
                <div className='sessionFinish'><b>Окончание сессии: </b>{this.state.finish}</div>
                <div className='sessionCount'><b>Кол-во проголосовавших: </b>{this.state.count}</div>
                <div className='sessionForm'><b>Форма: </b>{this.state.form}</div>
                <div className='sessionInterest'><b>Интерес: </b>{this.state.interest}</div>
                <div className='sessionContent'><b>Содеражание: </b>{this.state.content}</div>
                <div className='sessionComments'><b>Коментарии: </b>
                {this.state.comments.length === 0 ? (
                    <span>Никто не оставил коментариев</span>
                ): (
                    <ul>
                        {this.state.comments.map((comment, key) => <li key={key}>{comment}</li>)}
                    </ul>
                )}
                </div>
            </div>
        );
    }
}