import React,  { Component } from 'react';
import InputWithLable from '../InputWithLable/InputWithLable';
import { DatePicker } from '../DatePicker/DatePicker';
import { connect } from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';
import axios from 'axios'
import './SessionForm.css'

const mapStateToProps = store => {
    return {
        title: store.session.title,
        username: store.session.username,
        start: store.session.start,
        finish: store.session.finish
    }
}

class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            msg: '',
            isError: false
        }

        this.isValidForm = this.isValidForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    isValidForm() {
        const { title, username, start, finish } = this.props;

        return title !== '' && username !== '' && start <= finish
    }

    handleSubmit() {
        const { title, username, start, finish } = this.props;

        axios.post('https://realtimepoll-server.herokuapp.com/session', {
            title,
            username,
            start,
            finish
        }).then(res => {
            this.setState({msg: res.data, isError: false})
        }).catch(err => {
            this.setState({msg: err, isError: true})
        })
    }

    render(){
        return (
            <div className="sessionForm">
                <InputWithLable lable="Название сессии" id='sessionName' />
                <InputWithLable lable="Имя лектора" id='sessionLector' />
                <DatePicker lable="Начало сессии" id="start" />
                <DatePicker lable="Конец сессии" id="finish" />
                <SubmitButton text="Создать новую сессию" isValid={this.isValidForm} handleSubmit={this.handleSubmit} />
                <div className={this.state.isError ? 'msgBox error' : 'msgBox correct'}>
                    {this.state.msg}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SessionForm);
