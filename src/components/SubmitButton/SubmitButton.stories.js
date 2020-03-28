import React from 'react';
import SubmitButton from './SubmitButton';

export default {
	title: 'Submit Button',
	component: SubmitButton
};

export const RegularButton = () => <SubmitButton text='Regular button' />;
export const NoText = () => <SubmitButton />;
export const ReallyLongText = () => <SubmitButton text='yesthisisreallyllongtextsodealwithit'/>;