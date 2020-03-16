import React, { Component } from 'react'
import './styles.css';
import { setFormValue, setInterestValue, setContentValue } from '../../actions/surveyActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        setForm: form => dispatch(setFormValue(form)),
        setInterest: interest => dispatch(setInterestValue(interest)),
        setContent: content => dispatch(setContentValue(content)),
    }
}
export class RatingWithLable extends Component {
    handleInput(e) {
        let handler = null;
        switch(this.props.id) {
            case 'form':
                handler = this.props.setForm;
                break;

            case 'content':
                handler = this.props.setContent;
                break;
            
            case 'interest':
                handler = this.props.setInterest;
                break;
            default:
                handler = null;    
        }

        handler(e.target.value);
    }
    render(){
        return (
            <div className="rating">
                <span className="ratingName">{this.props.lable}</span>
                <input 
                    className="ratingInput" 
                    placeholder='5' 
                    type='number' 
                    min='1' 
                    max='10' 
                    value={this.props.inputValue} 
                    onChange={value => this.handleInput(value)}
                />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(RatingWithLable);