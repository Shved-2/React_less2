import * as Axios from 'axios';
import React from 'react';
import ss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    componentDidMount() {
        Axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={ss.head}>

                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} /></div>
                            <div>

                                {u.followed ?
                                    <button onClick={() => { this.props.unfollow(u.id) }} >UNFOLLOW</button> :
                                    <button onClick={() => { this.props.follow(u.id) }} >FOLLOW</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;



/*
const Users = (props) => {
    let getUser = () => {
        if (props.users.length === 0) {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }

    return (
        <div className={ss.head}>
            <button onClick={getUser}>set user</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto} /></div>
                        <div>

                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }} >UNFOLLOW</button> :
                                <button onClick={() => { props.follow(u.id) }} >FOLLOW</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
*/