import React from 'react';
import RatingWithLable from './RaitingWithLable';

export default {
    title: 'Rating With Lable',
    component: RatingWithLable,
};

export const LongLable = () => <RatingWithLable lable='vetylonglabelsowhatyougonnado' />
export const OneLetterLable = () => <RatingWithLable lable='a' />
