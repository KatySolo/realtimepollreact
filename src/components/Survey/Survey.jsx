import React, { Component } from 'react';
import InputWithLable from '../InputWithLable/InputWithLable';
import { SelectorWithLable } from '../SelectorWithLable/SelectorWithLable';
import RatingWithLable from '../RatingWithLable/RaitingWithLable';
import { ThreeColumnsLayout } from '../containers/ThreeColumnsLayout';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { connect } from 'react-redux';


const mapStateToProps = store => {
    return {
        name: store.user.name,
        form: store.survey.form,
        interest: store.survey.interest,
        content: store.survey.content,
        comment: store.survey.comment,
        sessions: store.session.sessions
    }
}

class Survey extends Component {
    render() {
        return (
            <div className='survey'>
                {/* name */}
                <InputWithLable 
                    inline={true}
                    id="name"
                    lable="Введите имя" 
                    inputValue={this.props.name}
                /> 
                {/* send sessionId here but show results inside + add actions and dispatch */}
                <SelectorWithLable lable="Выбирете лекцию" sessions={this.props.sessions}/>
                {/* form, interest, content */}
                <ThreeColumnsLayout>
                    <RatingWithLable lable='Форма' id='form' inputValue={this.props.form} />
                    <RatingWithLable lable='Интерес' id='interest' inputValue={this.props.interest} />
                    <RatingWithLable lable='Содержание' id='content' inputValue={this.props.content} />
                </ThreeColumnsLayout>
                {/* comment */}
                <InputWithLable 
                    inline={false}
                    id="comment"
                    lable="Введите коментарии, что понравилось, а что нужно подтянуть" 
                    inputValue={this.props.comment}
                />
                <SubmitButton text='Отправить'/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Survey);