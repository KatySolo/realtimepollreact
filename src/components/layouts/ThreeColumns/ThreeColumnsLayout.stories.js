import React from 'react';
import { ThreeColumnsLayout } from './ThreeColumnsLayout';

export default {
	title: 'Three Columns Layout',
	component: ThreeColumnsLayout,
};



export const ThreeItems = () => {
	return (
		<ThreeColumnsLayout>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
		</ThreeColumnsLayout>
	);
};
export const LessThenThreeItems = () => {
	return (
		<ThreeColumnsLayout>
			<div>Item1</div>
			<div>Item2</div>
		</ThreeColumnsLayout>
	);
};

export const MoreThenThreeItems = () => {
	return (
		<ThreeColumnsLayout>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
			<div>Item5</div>
			<div>Item6</div>
		</ThreeColumnsLayout>
	);
};