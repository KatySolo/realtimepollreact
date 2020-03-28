import React from 'react';
import { SubMenu } from './SubMenu';
import { MenuItem } from '../MenuItem/MenuItem';

export default {
    title: 'Sub Menu',
    component: SubMenu,
};

export const WithOneItem = () => {
    return(
        <SubMenu>
            <MenuItem title='SubTest1' />
            <MenuItem title='SubTest2' />
        </SubMenu>
    )
}