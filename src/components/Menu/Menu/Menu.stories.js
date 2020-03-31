import React from 'react';
import { Menu } from './Menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { SubMenu } from '../SubMenu/SubMenu';

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
};

export const AsOnApp = () => {
	return(
		<Menu >
			<MenuItem title="Опросы">
				<SubMenu>
					<MenuItem title="Показать список"/>
					<MenuItem title="Добавить"/>
				</SubMenu>
			</MenuItem>
			<MenuItem title="Пользователи">
				<SubMenu>
					<MenuItem title="Показать список"/>
					<MenuItem title="Добавить"/>
				</SubMenu>
			</MenuItem>
			<MenuItem title='Выйти'/>
        
		</Menu>
	);
};