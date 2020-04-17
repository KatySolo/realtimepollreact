import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setComment } from '../../../actions/surveyActions';

const mapDispatchToProps = dispatch => {
	return {
		setComment: comment => dispatch(setComment(comment))
	};
};

/**
 * Implementation for InputWithLable Fabric for comment input
 */
class CommentInput extends Component {
	render(){
		// TODO textarea limit issue
		return(
			<div className="input comment">
				<span className="inputName">{this.props.lable}</span>
				<textarea
					className="inputNotInline"
					name='comment'
					cols="30"
					rows="5"
					value={this.props.inputValue}
					onChange={value => this.props.setComment(value.target.value)}
					maxLength='255'
				/>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(CommentInput);
