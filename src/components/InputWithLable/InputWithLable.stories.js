import React from 'react';
import { InputWithLable } from './InputWithLable';

export default {
    title: 'Input With Lable',
    component: InputWithLable,
};

export const LableInlineInput = () => <InputWithLable inline={true} lable='Lable Inlined With Input' />
export const LableBeforeInput = () => <InputWithLable inline={false} lable='Lable Over An Input' />