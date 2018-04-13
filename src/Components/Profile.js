import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../ducks/reducer';
import axios from 'axios';

const Profile = (props) => {
  console.log('-------------- props', props);
  return (
    <div>
      <img src={props.picture} alt={'User image of ' + props.name} />
      <h1>{props.name}</h1>
      <h6>Email: {props.email}</h6>
      <button onClick={() => {
        axios.post('/api/logout').then(response => {
          props.logout();
          props.history.push('/');
        });
      }}>Logout</button>
    </div>
  )
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);