import React from 'react';
import RatingWithLabel from './Rating';

export default {
	title: 'Rating With Label',
	component: RatingWithLabel,
};

export const LongLabel = () => <RatingWithLabel label='vetylonglabelsowhatyougonnado' />;
export const OneLetterLabel = () => <RatingWithLabel label='a' />;
