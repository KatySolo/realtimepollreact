import React, { Component } from 'react';
import { Menu } from '../Menu/Menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { SubMenu } from '../SubMenu/SubMenu';
// import UserList from '../../components/UserWindows/UsersList/UsersList'
import { SessionsList } from '../SessionWindows/SessionsList';
import { SessionInfo } from '../SessionWindows/SessionInfo/SessionInfo';
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
                {/* <UserList /> */}
                {/* <UsersForm /> */}
                {/* <SessionsList /> */}
                {/* <SessionForm /> */}
                <SessionInfo />
            </div>
        );
    }
}