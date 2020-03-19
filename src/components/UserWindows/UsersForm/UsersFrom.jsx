import React, { Component }  from 'react';
import InputWithLable from '../../InputWithLable/InputWithLable'
import { connect } from 'react-redux';
import './styles.css';

const mapStateToProps = state => {
    return {
        name: state.user.name
    };
}

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        // axios.post('https://realtimepoll-server.herokuapp.com/user',{
        //     name: this.props.name
        // }).then(res => {
        //      // TODO send to backend and add check if there are existing
        // })
       
    }

    render(){
        console.log(this.props.name);
        // TODO clear state after login + clean form 
        return (
            <div className='usersForm'>
                <InputWithLable lable='Введите имя нового пользователя' id='name'/>
                <button 
                    className='sendNewUserButton'
                    disabled={!this.props.name} 
                    onClick={this.handleSubmit}>
                    Создать
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(UsersForm)