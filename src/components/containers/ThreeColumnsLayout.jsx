import React, {Component} from 'react';
import './ThreeColumns.css';

export class ThreeColumnsLayout extends Component {
    render(){
        return (
            <div className='three-column'>
                {this.props.children}
            </div>
        );
    }
}