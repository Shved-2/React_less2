import React from 'react';
import ss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={ss.head}>
            <div className={ss.buttonList}>
                {pages.map(p => {
                    return (<button className={props.currentPage === p && ss.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</button>)

                })}

            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="dfg" />
                            </NavLink>
                        </div>
                        <div>

                            {u.followed ?
                                <button onClick={() => {

                                    Axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "031f8b3c-bf4d-4b85-976c-10a38a1d6fc7"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }

                                        });

                                }} >UNFOLLOW</button> :
                                <button onClick={() => {
                                    Axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "031f8b3c-bf4d-4b85-976c-10a38a1d6fc7"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }

                                        });



                                }} >FOLLOW</button>}
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
export default Users;