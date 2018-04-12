import React from 'react';
import { connect } from "react-redux";
import Reducer, {logout} from '../ducks/reducer';
import axiox from 'axios';
const Profile =  (props) =>{
    console.log('inside profile', props);
    return(
        <div>
                <img src ={props.picture}/>
                <h1>name: {props.name}</h1>
                <h2>{props.email}</h2>

                {/* <button onClick ={props.logout}> Logout </button> */}
                <button onClick ={() =>{
                    axiox.post('/api/logout').then(respnose =>{
                        props.logout();
                        props.history.push('/');
                    });
                }}> Logout </button>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        state
    }
};

// mapDispatchToProps ={
//     logout,
// }


export default connect(mapStateToProps, {logout})(Profile);
