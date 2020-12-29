import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import cookie from "js-cookie"

export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {name: '', email:'', password:'', password_confirmation:'', errors:{}};
    }

    handleForm = (e) => {
        e.preventDefault();
        const data = {name:this.state.name, email:this.state.email, password:this.state.password, password_confirmation:this.state.password_confirmation};
        
        axios
        .post("http://localhost:8000/api/auth/register",data)
        .then(res => {
            cookie.set("token", res.data.access_token);
            cookie.set("user",res.data.user);
            this.props.history.push("/profile");
        })
        .catch(e => this.setState({ errors: e.response.data.errors }));
        // this.props.history.push("/profile");
    };

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="flex">
                <div className="w-1/3"/>
                <div className="w-1/3 p-4 mt-10 bg-white">
                    <form className="border border-gray-500" onSubmit={this.handleForm}>
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-500">Register</h1> 
                            {/* {error.errors ? ( <p className="text-sm text-red-500">{error.errors}</p>):("")} */}
                            <div className="mt-4">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Your Name" onChange={this.handleInput} className="w-full p-2 mt-1 bg-gray-200 border border-gray-400 rounded"/>
                            </div>
                            <div className="mt-4">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Email" onChange={this.handleInput} className="w-full p-2 mt-1 bg-gray-200 border border-gray-400 rounded"/>
                            </div>
                            <div className="mt-4">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password" onChange={this.handleInput} className="w-full p-2 mt-1 bg-gray-200 border border-gray-400 rounded"/>
                            </div>
                            <div className="mt-4">
                                <label>Confirm Password</label>
                                <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={this.handleInput} className="w-full p-2 mt-1 bg-gray-200 border border-gray-400 rounded"/>
                            </div>
                            <div className="mt-4">
                                <input type="submit" value="Register"className="p-2 mt-1 text-white bg-purple-600 border-gray-400 rounded cursor-pointer"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
