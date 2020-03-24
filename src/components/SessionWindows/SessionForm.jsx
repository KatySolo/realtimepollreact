import React,  { Component } from 'react';
import InputWithLable from '../InputWithLable/InputWithLable';
import { DatePicker } from '../DatePicker/DatePicker';
import { connect } from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';

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

        this.isValidForm = this.isValidForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    isValidForm() {
        const { title, username, start, finish } = this.props;

        return title !== '' && username !== '' && start <= finish
    }

    handleSubmit() {
        const { title, username, start, finish } = this.props;
        console.log(title, username, start, finish);
        // TODO on when ready
        // axios.post('https://realtimepoll-server.herokuapp.com/sessions', {
        //     ....
        // }).then(res => {
        //     console.log(res.data)
        // })
    }

    render(){
        return (
            <div className="sessionForm">
                <InputWithLable lable="Название сессии" id='sessionName' />
                <InputWithLable lable="Имя лектора" id='sessionLector' />
                <DatePicker lable="Начало сессии" id="start" />
                <DatePicker lable="Конец сессии" id="finish" />
                <SubmitButton text="Создать новую сессию" isValid={this.isValidForm} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(SessionForm);
