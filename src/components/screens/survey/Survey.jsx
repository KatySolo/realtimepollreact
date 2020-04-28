import React, { Component } from 'react';
import Input from '../../functional/Input/Input';
import { Selector } from '../../functional/Selector/Selector';
import RatingN from '../../functional/Rating/RatingN';
import SubmitButton from '../../functional/SubmitButton/SubmitButton';
import { connect } from 'react-redux';
import axios from 'axios';
import './styles.css';
import {
	setSessionParam,
	setSessionScore,
	setUserParam,
	setColor,
} from '../../../actions';



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

const mapDispatchToProps = dispatch => {
	return {
		setAppColor: name => dispatch(setColor(name)),
		setSessionParam: (title, value) => dispatch(setSessionParam(title, value)),
		setSessionScore: (title, score) => dispatch(setSessionScore(title, score)),
		setUserParam: (title, value) => dispatch(setUserParam(title, value))
	};
};

/**
 *Главная страница опроса
 *
 *@component
 *@category Windows
 */
class Survey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '',
			type: 'none'
		};

		this.isValidSurvey = this.isValidSurvey.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.props.setAppColor('green');
	}

	componentDidMount() {
		axios.get(process.env.REACT_APP_URL + '/current')
			.then(res => {
				this.props.setSessionParam('sessions', res.data);
			});
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
			setTimeout(() => {this.setState({ msg: '', type: 'none' });}, 5000);
			this.setState({ msg: res.data.text, type: 'ok' });
		})
			.catch((error) => {
				setTimeout(() => {this.setState({ msg: '', type: 'none' });}, 5000);
				this.setState({ msg: error.response.data.text || 'Произошла ошибка', type: 'err' });
			});
	}

	isValidSurvey() {
		const { form, interest, content, sessionId, name } = this.props;
		const isValidParam = x => x > 0 && x < 11;

		return isValidParam(form) && isValidParam(content) && isValidParam(interest) && sessionId !== -1 && name !== '';
	}

	render() {
		// TODO generate ids from labels or by ids get labels
		return (
			<div className='survey'>
				<Input
					inline={true}
					id="name"
					type='inline'
					label="Имя"
					inputValue={this.props.name}
					handleInput={this.props.setUserParam}
				/>

				<Selector
					label="Лекция"
					content={this.props.sessions}
					handleSelect={this.props.setSessionParam}
				/>

				<RatingN
					n={3}
					labels={['Форма','Интерес', 'Содержание']}
					ids={['form', 'interest', 'content']}
					max={10}
					min={1}
					handleScore={this.props.setSessionScore}
				/>

				<Input
					inline={false}
					type='block'
					id="comment"
					label="Комментарии к лекции"
					inputValue={this.props.comment}
					handleInput={this.props.setSessionScore}
				/>

				<div className='footer'>
					<SubmitButton
						text='Отправить'
						isValid={this.isValidSurvey}
						handleSubmit={this.handleSubmit}
					/>

					<div className={'msgResultBox ' + this.state.type}>
						<div className='msgResultBox_text'>{this.state.msg}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
