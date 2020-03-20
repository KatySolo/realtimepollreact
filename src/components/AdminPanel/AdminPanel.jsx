import React, { Component } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import { SubMenu } from '../../components/SubMenu/SubMenu';
// import UsersForm from '../UserWindows/UsersForm/UsersFrom';
// import SessionForm from '../SessionWindows/SessionForm';

export class AdminPanel extends Component {
    render() {
        return (
            <div className="adminPanel">
                {/* Upper menu with submenu */}
                {/* mode="vertical" openAnimation="slide-up" triggerSubMenuAction="click" */}
                <Menu >
                    <MenuItem title="Опросы">
                        <SubMenu>
                            <MenuItem title="Показать список" url='admin/sessions/list' />
                            <MenuItem title="Добавить" url='admin/sessions/add' />
                        </SubMenu>
                    </MenuItem>
                    <MenuItem title="Пользователи">
                        <SubMenu>
                            <MenuItem title="Показать список" url='admin/users/list' />
                            <MenuItem title="Добавить" url='admin/users/add' />
                        </SubMenu>
                    </MenuItem>
                    <MenuItem title='Выйти' url='/' />
                    
                </Menu>

                {/* TODO probably with react router */}
                {/* Window with result */}
                {/* <ResultPanel /> */}
                {/* <UsersForm /> */}
                {/* <SessionForm /> */}
            </div>
        );
    }
}