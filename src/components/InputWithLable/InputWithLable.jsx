import React, { Component } from 'react';
import './styles.css';
import NameInput from './childrens/Name';
import CommentInput from './childrens/Comment';


export default class InputWithLable extends Component {
    render(){
       switch(this.props.id) {
            case 'name':
                return (<NameInput {...this.props}/>);

            case 'comment':
                return (<CommentInput {...this.props}/>); 
            
            default:
                return (<div className="input"></div>);
       }
    }
}