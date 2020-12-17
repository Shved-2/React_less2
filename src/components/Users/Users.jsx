import * as Axios from 'axios';
import React from 'react';
import ss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &Count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
         this.props.setCurrentPage(pageNumber);
         Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &Count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
            console.log(this.props.pageSize);
    }
    

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div className={ss.head}>
                <div className={ss.buttonList}>
                    {pages.map(p => {
                        return (<button className={this.props.currentPage == p && ss.selectedPage}
                            onClick={()=>{this.onPageChanged(p)}}>{p}</button>)

                    })}

                </div>

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