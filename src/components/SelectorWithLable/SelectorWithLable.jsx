import React, { Component } from 'react';
import './styles.css'
import  axios from 'axios';
import { setSessions, setSessionId } from '../../actions/sessionActions';
import { store } from '../../index';

export class SelectorWithLable extends Component {
    componentDidMount(){
        axios.get('https://realtimepoll-server.herokuapp.com/current')
        .then(res => {
            store.dispatch(setSessions(res.data));
        });
    } 

    handleSelect(value) {
        store.dispatch(setSessionId(value.target.value));
    }

    render() {
        return(
            <div className='selectorContainer'>
            <span className='selectorName'>{this.props.lable}</span>
            {this.props.sessions === undefined && <span className='loadingMsg'>Загрузка...</span>}
            {this.props.sessions !== undefined && 
            <select className='selector' onChange={this.handleSelect}>
                <option value={-1}>Показать все варианты</option>
                {this.props.sessions !== undefined && this.props.sessions.map(option => { return (
                    <option value={option.id} key={option.id}>{option.title}</option>
                )})}
            </select>}
            </div>
        );
    }
}