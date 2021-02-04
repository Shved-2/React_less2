import React from 'react';
import ss from './Paginator.module.css'


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={ss.buttonList}>
            {pages.map(p => {
                return (<button className={currentPage === p && ss.selectedPage}
                    onClick={() => {onPageChanged(p) }}>{p}</button>)

            })}

        </div>


    )
}
export default Paginator;