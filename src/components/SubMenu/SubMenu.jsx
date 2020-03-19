import React, { Component } from 'react';
import './styles.css';

export class SubMenu extends Component {
    render() {
        return(
            <div className={"submenu"}>{this.props.children}</div>
        );
    }
}