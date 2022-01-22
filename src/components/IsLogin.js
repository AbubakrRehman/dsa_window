import React from 'react'
import Login from './Login'
import Home from './Home'

function IsLogin(props) {
    if(props.isLogin){
        props.history.push('/home');
    }
    return (
        <div>
            
            {/**props.isLogin===true?<Home handle_logout={props.handle_logout}/>:<Login isLogin={props.isLogin} setIsLogin={props.setIsLogin} history={props.history}/>**/}
            <Login {...props} />
        </div>
    )
}

export default IsLogin
