import React, { Component } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import { SubMenu } from '../../components/SubMenu/SubMenu';

export class AdminPanel extends Component {
    render() {
        return (
            <div className="adminPanel">
                {/* Upper menu with submenu */}
                {/* mode="vertical" openAnimation="slide-up" triggerSubMenuAction="click" */}
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

                {/* TODO probably with react router */}
                {/* Window with result */}
                {/* <ResultPanel /> */}
            </div>
        );
    }
}