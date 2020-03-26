import React, { Component } from 'react';
import './SessionsList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

export class SessionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isDataReady: false
        }
    }

    componentDidMount() {
        axios.get('https://realtimepoll-server.herokuapp.com/sessions')
            .then(res => {
                this.setState({results: res.data, isDataReady: true});
            })
    }

    render() {
        if (!this.state.isDataReady){
            return <Loader type="ThreeDots" color="black"/>
        } else {
        return (
            <div className="sessionsList">
                <table>
                    <thead>
                    <tr>
                        <td>Название сессии</td>
                        <td>Начало голосования</td>
                        <td>Конец голосования</td>
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
                                    <td><span className={result.id === -1 ? result.isActive ? 'current' : 'future' : 'finished'} /></td>
                                    <td>
                                        <Link to={"/admin/sessions/"+result.id}>
                                            <span className={result.id === -1 ? 'disabled' : ''}>Посмотреть</span>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )}
    }
}