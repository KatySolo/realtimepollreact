import React, { Component } from 'react';
import './SessionsList.css';

export class SessionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [{
                title: 'Очень классная сессия была',
                start: '2020-03-19T12:00',
                finish: '2020-03-20T11:45',
                isActive: false,
                count: 5,
                id: 23,
            },
            {
                title: 'Очень классная сессия будет',
                start: '2020-03-25T12:00',
                finish: '2020-03-26T11:45',
                isActive: false,
                count: 0,
                id: -1
            },
            {
                title: 'Очень классная сессия сейчас',
                start: '2020-03-19T12:00',
                finish: '2020-03-29T11:45',
                isActive: true,
                count: 10,
                id: -1
            }]
        }
    }

    componentDidMount() {
        //get data from db
    }

    render() {
        return (
            <div className="sessionsList">
                <table>
                    <thead>
                    <tr>
                        <td>Название сессии</td>
                        <td>Начало голосования</td>
                        <td>Конец голосования</td>
                        <td>Кол-во проголосовавших</td>
                        <td>Статус</td>
                        <td>Результаты</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.results.map((result, key) => {
                        return (<tr key={key}>
                                    <td>{result.title}</td>
                                    <td>{new Date(result.start).toLocaleString()}</td>
                                    <td>{new Date(result.finish).toLocaleString()}</td>
                                    <td>{result.count}</td>
                                    <td><span className={result.id === -1 ? result.isActive ? 'current' : 'future' : 'finished'} /></td>
                                    <td><a className={result.id === -1 ? 'disabled' : ''} href='#'>Посмотреть</a></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}