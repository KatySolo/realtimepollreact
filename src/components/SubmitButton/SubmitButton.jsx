import React, { Component } from 'react';
import './styles.css'
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = store => {
    return {
        name: store.user.name,
        form: store.survey.form,
        interest: store.survey.interest,
        content: store.survey.content,
        comment: store.survey.comment,
        sessionId: store.session.sessionId
    }
}

class SubmitButton extends Component {
    handleSubmit() {
        const { sessionId, form, content, interest, name, comment } = this.props;
        // console.log(sessionId, form, content, interest, name, comment);
        // TODO on when ready
        axios.post('https://realtimepoll-server.herokuapp.com/results', {
            sessionId,
            form,
            content,
            interest,
            username: name,
            comment
        }).then(res => {
            console.log(res.data)
        })
    }
        
    render() {
        return(
            <div className='buttonContainer'>
                <button className='submitButton' type="submit" onClick={() => this.handleSubmit()}>{this.props.text || 'Отправить'}</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SubmitButton);