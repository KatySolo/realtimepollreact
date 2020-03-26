import React, { Component } from 'react';
import './styles.css';

export class Menu extends Component {
    render() {
        return (
            <div className='menu'>{this.props.children}</div>
        );
    }
}