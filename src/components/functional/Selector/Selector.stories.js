import React from 'react';
import { Selector } from './Selector';

export default {
	title: 'Selector With Label',
	component: Selector,
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

export const NoData = () => <Selector label="Label for selector" />;
export const OneOption = () => <Selector label="Selector With One Option" options={DataLengthOne} />;
export const ManyOptions = () => <Selector label="Selector With Many Option" options={DataLengthFive} />;

