import React from 'react';
import { SelectorWithLable } from './SelectorWithLable';

export default {
	title: 'Selector With Lable',
	component: SelectorWithLable,
};

const DataLengthOne = [
	{ id: 1, name: 'Only One' }
];

const DataLengthFive = [
	{ id: 1, name: 'TestOption1' },
	{ id: 2, name: 'TestOption2' },
	{ id: 3, name: 'TestOption3' },
	{ id: 4, name: 'TestOption4' },
	{ id: 5, name: 'TestOption5' },
];

export const NoData = () => <SelectorWithLable lable="Lable for selector" />;
export const OneOption = () => <SelectorWithLable lable="Selector With One Option" options={DataLengthOne} />;
export const ManyOptions = () => <SelectorWithLable lable="Selector With Many Option" options={DataLengthFive} />;

