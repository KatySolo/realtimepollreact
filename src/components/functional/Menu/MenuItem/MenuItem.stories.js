import React from 'react';
import { MenuItem } from './MenuItem';
import { SubMenu } from '../SubMenu/SubMenu';

export default {
	title: 'Menu Item',
	component: MenuItem,
};

export const WithText = () => <MenuItem title='Regular Menu Item' />;
export const WithSubMenuNotClicked = () => {
	return(
		<MenuItem title='SubMenu'>
			<SubMenu>
				<MenuItem title='SubmenuTest'/>
				<MenuItem title='SubmenuTest1'/>
			</SubMenu>
		</MenuItem>
	);
};