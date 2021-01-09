import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggletIsFetching
} from '../../Redux/userReducer';
import * as Axios from 'axios';
import Preloader from '../common/preloader/Preloader';
import { usersAPI } from '../../api/Api';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggletIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggletIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.toggletIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggletIsFetching(false);
        this.props.setUsers(data.items);
      });
    console.log(this.props.pageSize);
  }


  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}

        />
      </>
    )
  }
}

let mapStateToPropse = (state) => {//принимает весь state целиком и возвращает, то что нам нужно
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,

  }
}
/*
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggletIsFetching: (isFetching) => {
      dispatch(toggletIsFetchingAC(isFetching));
    },
  }
}*/



export default connect(mapStateToPropse, {
  follow, unfollow, setUsers,
  setCurrentPage, setTotalUsersCount, toggletIsFetching,
})(UsersContainer);

