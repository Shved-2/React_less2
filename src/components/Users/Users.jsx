import React from 'react';
import ss from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2n09cekDvr7CTVplxhcBusDtvOnebiDmFg&usqp=CAU',
                followed: false, fullName: "Vasya", status: "A im a boss", location: { city: 'Perm', country: "Russia" }
            },
            {
                id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2n09cekDvr7CTVplxhcBusDtvOnebiDmFg&usqp=CAU',
                followed: true, fullName: "Petr", status: "A im a boss", location: { city: 'Perm', country: "Russia" }
            },
            {
                id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2n09cekDvr7CTVplxhcBusDtvOnebiDmFg&usqp=CAU',
                followed: false, fullName: "Mary", status: "A im a boss", location: { city: 'Kiyv', country: "Ukrain" }
            },
            {
                id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2n09cekDvr7CTVplxhcBusDtvOnebiDmFg&usqp=CAU',
                followed: true, fullName: "Joan", status: "A im a boss", location: { city: 'Minsk', country: "Belarus" }
            },
            {
                id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2n09cekDvr7CTVplxhcBusDtvOnebiDmFg&usqp=CAU',
                followed: false, fullName: "Michel", status: "A im a boss", location: { city: 'Moscow', country: "Russia" }
            },
        ])
    }

    return (
        <div className={ss.head}>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img src={u.photoUrl} /></div>
                        <div>

                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }} >UNFOLLOW</button> :
                                <button onClick={() => { props.follow(u.id) }} >FOLLOW</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;