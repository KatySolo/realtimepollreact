import React, { Component }  from 'react';
import './styles.css';

export class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalNumber: 2,
            users: [{name: 'Test1'}, {name: 'Test2'}]
        }
    }

    componentDidMount(){
        // TODO uncomment when all is ready
        // axios.get('https://realtimepoll-server.herokuapp.com/users')
        // .then(res => {
        //     this.state.state({users: res.users, totalNumber: length(res.users)})
        // });
    } 

    render(){
        return (
            <div className='usersList'>
                <div className='totalNumber'><b>Всего пользователей:</b> {this.state.totalNumber}</div>
                <ol>
                    {this.state.users.map(user => {
                        return (
                            <li>{user.name}</li>
                        )
                    })}
                </ol>
            </div>
        );
    }
}