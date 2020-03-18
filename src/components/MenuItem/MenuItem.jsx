import React, { Component } from 'react';
import './styles.css';

export class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }

    handleClick() {
        const { isClicked } = this.state;
        this.setState({isClicked: !isClicked});
    }

    isSubMenu() {
        // and type is submenu
        return this.props.children !== undefined
    }

    render() {
        return(
            // TODO think about state and draw scheme
            <div 
                className={this.isSubMenu() && this.state.isClicked ? "menuItem clicked" : "menuItem"} 
                onClick={this.handleClick}
                >
                <span className="itemName">{this.props.title}</span>
                { this.isSubMenu() && (
                    <span className="arrowDown">↓</span>
                )}
                { this.isSubMenu() && this.props.children}

            </div>
        );
    }
}