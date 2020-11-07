import React from 'react';
import { createBrowserHistory } from 'history'
import './Login.css';
import data from '../Data/data';
class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          userEmail: "",
          password:""
      }
    }
    handleLogin=(ev)=>{
        ev.preventDefault();
        const history = createBrowserHistory();
        let re = /\S+@\S+\.\S+/;
        if(re.test(this.state.userEmail)){
            if(this.validateUserEmailAndPassword(this.state.userEmail, this.state.password)){
                history.push({pathname:"/search", state:{isLogin:true, email:this.state.userEmail}});
            }else{
                history.push({pathname:"/", state:{isLogin:false}});
            }
        }
    }

    validateUserEmailAndPassword=(email, password)=>{
        for(let item of data.userInfo){
            if(item.email === email && item.password=== password){
                return true;
            }
        }
        return false;
    }
    render(){
        return (<div class="loginContainer">
                   Welcome to Librabry Management System <br/>
                   <br/>
                   <br/>
                   <h1>Login Here</h1>
                   <form onSubmit={this.handleLogin} >
                    <div>
                        Email Id :<br/>  
                         <input type="email" onChange={(ev)=>{
                             this.setState({
                                userEmail:ev.target.value 
                             });
                         }} required/>
                    </div>
                    <div>
                        Password : <br/> 
                       <input type="password" onChange={(ev)=>{
                             this.setState({
                                password:ev.target.value 
                             });
                         }}/>
                    </div>
                    <input type="submit" value="Login"/>   
                    </form>       
        </div>);
    }
}
export default Login;