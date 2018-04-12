import React from 'react';

const Login = (props) =>{
    return(
        <div>
                 <div> <button className="button" onClick={props.login}> Login </button>
                </div>

        </div>
    )
}
export default Login;
