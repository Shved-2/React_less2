import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../Redux/userReducer';


let mapStateToPropse = (state) => {//принимает весь state целиком и возвращает, то что нам нужно
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage

    }
  }
  let mapDispatchToProps = (dispatch) => {//служит для пердачи  
    //длочерней компоненте функции для работы
    return {
      follow: (usersId) => {
        dispatch(followAC(usersId));
      },
      unfollow: (usersId) => {
        dispatch(unfollowAC(usersId));
      },
      setUsers: (users) => {
        dispatch(setUsersAC(users));
      },
      setCurrentPage:(pageNumber)=>{
        dispatch(setCurrentPageAC(pageNumber));
      },
      setTotalUsersCount:(totalCount)=>{
        dispatch(setUsersTotalCountAC(totalCount));
      }
    }
  }

  const UsersContainer = connect(mapStateToPropse, mapDispatchToProps)(Users);

export default UsersContainer;