import React, { Component } from 'react';
import './styles.css';
import { Menu, MenuItem, SubMenu } from '../Menu';
import { SessionsList, SessionForm, SessionInfo } from '../SessionWindows';
import { UsersList, UsersForm } from '../UserWindows';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import auth0Client from '../../Auth';

class AdminPanel extends Component {
    logout() {
        // TODO it check once but after its not -> clear all cookies
        auth0Client.signOut();
        this.props.history.replace('/');
    }

    render() {
        if (!auth0Client.isAuthenticated()) {
            return (
                <div>
                    <div>Страница достпуна только администратору. Уходите.</div>
                    <button onClick={auth0Client.signIn}>Пустите, я админ</button>
                </div>

            );
        } else {
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
                    <span className='logout' onClick={() => this.logout()}><MenuItem title='Выйти'/></span>

                </Menu>
                <Switch>
                    <Route path="/admin/sessions/list" component={SessionsList}/>
                    <Route path="/admin/sessions/add" component={SessionForm}/>
                    <Route path="/admin/users/list" component={UsersList}/>
                    <Route path="/admin/users/add" component={UsersForm}/>
                    <Route path="/admin/sessions/:id" render={(props) => <SessionInfo {...props} />} />
                </Switch>
            </Router>
            </div>
            );
        }
    }
}

export default withRouter(AdminPanel)
