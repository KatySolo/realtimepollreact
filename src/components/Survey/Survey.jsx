import React, { Component } from 'react';
import { InputWithLable } from '../InputWithLable/InputWithLable';
import { SelectorWithLable } from '../SelectorWithLable/SelectorWithLable';
import { RatingWithLable } from '../RatingWithLable/RaitingWithLable';
import { ThreeColumnsLayout } from '../containers/ThreeColumnsLayout';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { connect } from 'react-redux';


const mapStateToProps = store => {
    return {
        name: store.user.name,
        form: store.survey.form,
        interest: store.survey.interest,
        content: store.survey.content,
        comment: store.survey.comment
        // sessionId: store.session.sessionId
    }
}

class Survey extends Component {
    render() {
        return (
            <div className='survey'>
                {/* name */}
                <InputWithLable 
                    inline={true} 
                    lable="Введите имя" 
                    inputValue={this.props.name}
                /> 
                {/* send sessionId here but show results inside */}
                <SelectorWithLable lable="Выбирете лекцию"/>
                {/* form, interest, content */}
                <ThreeColumnsLayout>
                    <RatingWithLable lable='Форма' inputValue={this.props.form} />
                    <RatingWithLable lable='Интерес' inputValue={this.props.interest} />
                    <RatingWithLable lable='Содержание' inputValue={this.props.content} />
                </ThreeColumnsLayout>
                {/* comment */}
                <InputWithLable 
                    inline={false}
                    lable="Введите коментарии, что понравилось, а что нужно подтянуть" 
                    inputValue={this.props.comment}
                />
                <SubmitButton text='Отправить'/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Survey);