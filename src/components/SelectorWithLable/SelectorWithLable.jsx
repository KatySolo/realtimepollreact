import React, { Component } from 'react';
import './styles.css'
import  axios from 'axios';
import { setSessions } from '../../actions/sessionActions';
import { store } from '../../index';

export class SelectorWithLable extends Component {
    componentDidMount(){
        // console.log(this.props)
        axios.get('https://realtimepoll-server.herokuapp.com/current')
        .then(res => {
            store.dispatch(setSessions(res.data));
        });
    } 
    render() {
        return(
            <div className='selectorContainer'>
            <span className='selectorName'>{this.props.lable}</span>
            {this.props.sessions === undefined && <span className='loadingMsg'>Загрузка...</span>}
            {this.props.sessions !== undefined && 
            <select className='selector'>
                {this.props.sessions !== undefined && this.props.sessions.map(option => { return (
                    <option value={option.id} key={option.id}>{option.title}</option>
                )})}
            </select>}
            </div>
        );
    }
}