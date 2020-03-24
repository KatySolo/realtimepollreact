import React, { Component } from 'react';
import './styles.css';
import NameInput from './childrens/Name';
import CommentInput from './childrens/Comment';
import SessionName from './childrens/SessionName';
import SessionLector from './childrens/SessionLector';


export default class InputWithLable extends Component {
    render(){
       switch(this.props.id) {
            case 'name':
                return (<NameInput {...this.props} />);

            case 'comment':
                return (<CommentInput {...this.props} />); 
            
            case 'sessionName':
                return (<SessionName {...this.props} />)

            case 'sessionLector':
                return (<SessionLector {...this.props} />)

            default:
                return (<div className="input"></div>);
       }
    }
}