import React from 'react';
import { Menu } from './Menu';
import { MenuItem } from '../MenuItem/MenuItem'

export default {
    title: 'Menu',
    component: Menu,
};

export const WithThreeItems = () => {
    return(
        <Menu>
            <MenuItem title='First'/>
            <MenuItem title='Second'/>
            <MenuItem title='Third'/>
        </Menu>
    );
}