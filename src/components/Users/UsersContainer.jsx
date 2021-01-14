import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers
} from '../../Redux/userReducer';
import Preloader from '../common/preloader/Preloader';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
//import { usersAPI } from '../../api/Api';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);

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
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}

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
    followingInProgress: state.usersPage.followingInProgress

  }
}


//let withRedirect = widthAuthRedirect(UsersContainer);



//export default widthAuthRedirect(connect(mapStateToPropse, {
  //follow, unfollow,  setCurrentPage, toggleFollowingProgress, getUsers})(UsersContainer));

export default compose(
  connect(mapStateToPropse, {follow, unfollow,  setCurrentPage, toggleFollowingProgress, getUsers}),
  widthAuthRedirect,
)(UsersContainer)