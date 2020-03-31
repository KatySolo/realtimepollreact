import React, { Component } from 'react';
import InputWithLable from '../InputWithLable/InputWithLable';
import { SelectorWithLable } from '../SelectorWithLable/SelectorWithLable';
import RatingWithLable from '../RatingWithLable/RaitingWithLable';
import { ThreeColumnsLayout } from '../layouts/ThreeColumns/ThreeColumnsLayout';
import SubmitButton from '../SubmitButton/SubmitButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';


const mapStateToProps = store => {
	return {
		name: store.user.name,
		form: store.survey.form,
		interest: store.survey.interest,
		content: store.survey.content,
		comment: store.survey.comment,
		sessions: store.session.sessions,
		sessionId: store.session.sessionId
	};
};

/**
 * Component for survey
 */
class Survey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: ''
		};

		this.isValidSurvey = this.isValidSurvey.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		const { sessionId, form, content, interest, name, comment } = this.props;
		axios.post(process.env.REACT_APP_URL + '/results', {
			sessionId,
			form,
			content,
			interest,
			username: name,
			comment
		}).then(res => {
			setTimeout(() => {this.setState({ msg: '' });}, 5000);
			this.setState({ msg: res.data });
		})
			.catch((error) => {
				setTimeout(() => {this.setState({ msg: '' });}, 5000);
				this.setState({ msg: error.response.data.text || 'Произошла ошибка' });
			});
	}

	isValidSurvey() {
		const { form, interest, content, sessionId, name } = this.props;
		const isValidParam = x => x > 0 && x < 11;

		return isValidParam(form) && isValidParam(content) && isValidParam(interest) && sessionId !== -1 && name !== '';
	}

	render() {
		return (
			<div className='survey'>
				<Link to='/admin'><button>Я - админ</button></Link>
				{/* name */}
				<InputWithLable
					inline={true}
					id="name"
					lable="Введите имя"
					inputValue={this.props.name}
				/>
				{/* session selector */}
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
				{/* submit button */}
				<SubmitButton text='Отправить' isValid={this.isValidSurvey} handleSubmit={this.handleSubmit} />
				<div>{this.state.msg}</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Survey);
