import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import ss from './Users.module.css'


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return (
        <div className={ss.head}>
            <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize} />

            <div>
                {
                    users.map(u => <User user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />)

                }
            </div>
        </div >
    )
}
export default Users;