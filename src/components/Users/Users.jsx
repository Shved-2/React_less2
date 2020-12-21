import * as Axios from 'axios';
import React from 'react';
import ss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'


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
                    return (<button className={props.currentPage == p && ss.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</button>)

                })}

            </div>

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
export default Users;