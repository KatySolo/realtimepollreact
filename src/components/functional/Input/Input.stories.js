import React from 'react';
import InputWithLabel from './Input';

export default {
	title: 'Input With Label',
	component: InputWithLabel,
};

export const LabelInlineInput = () => <InputWithLabel inline={true} label='Label Inlined With Input' />;
export const LabelBeforeInput = () => <InputWithLabel inline={false} label='Label Over An Input' />;
export const LabelWithLongValue = () => <InputWithLabel inline={true} label='Label With Long Value' inputValue='verylongvaluesoyoucantseeitall'/>;
