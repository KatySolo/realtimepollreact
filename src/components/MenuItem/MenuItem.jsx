import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubMenu: this.props.children !== undefined,
            isClicked: false 
        }

        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e) {
        e.preventDefault();
        const { isClicked } = this.state;
        this.setState({isClicked: !isClicked})
    }

    render() {
        if (this.state.isSubMenu) {
            return (
                <div className="menuItem" onMouseEnter={this.handleEvent} onMouseLeave={this.handleEvent}>
                <span className="itemName">{this.props.title}</span>
                <span className={this.state.isClicked ? "arrowUp" : "arrowDown"}  />
                <div className={this.state.isClicked ? "submenuCont visible" : "submenuCont"}>{this.props.children}</div>
                </div>
            )
        } else {
        return(
            <div className="menuItem">
                <span className="itemName">
                    {this.props.title}
                </span>
            </div>
            )
        }
    }
}