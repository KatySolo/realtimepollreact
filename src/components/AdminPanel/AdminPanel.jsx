import React, { Component } from 'react';
import { Menu } from '../Menu/Menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { SubMenu } from '../SubMenu/SubMenu';
import { UsersList } from '../../components/UserWindows/UsersList/UsersList'
import { SessionsList } from '../SessionWindows/SessionsList';
import UsersForm from '../UserWindows/UsersForm/UsersFrom';
import SessionForm from '../SessionWindows/SessionForm';
import {SessionInfo} from '../SessionWindows/SessionInfo/SessionInfo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export class AdminPanel extends Component {
    render() {
        return (
            <div className="adminPanel">
             <Router>
                <Menu >
                    <MenuItem title="Опросы">
                        <SubMenu>
                            <Link to='/admin/sessions/list'><MenuItem title="Показать список" /></Link>
                            <Link to='/admin/sessions/add'><MenuItem title="Добавить" /></Link>
                        </SubMenu>
                    </MenuItem>
                    <MenuItem title="Пользователи">
                        <SubMenu>
                            <Link to='/admin/users/list'><MenuItem title="Показать список" /></Link>
                            <Link to='/admin/users/add'><MenuItem title="Добавить" /></Link>
                        </SubMenu>
                    </MenuItem>
                    {/* // remove cookie and logput */}
                    <MenuItem title='Выйти' />
                    
                </Menu>
                <Switch>
                    <Route path="/admin/sessions/list" component={SessionsList}/>
                    <Route path="/admin/sessions/add" component={SessionForm}/>
                    <Route path="/admin/users/list" component={UsersList}/>
                    <Route path="/admin/users/add" component={UsersForm}/>
                    <Route path="/admin/sessions/1"><SessionInfo id={1} /></Route>
                </Switch>     
            </Router>
            </div>
        );
    }
}