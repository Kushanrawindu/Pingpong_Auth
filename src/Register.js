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
            this.props.setLogin(res.data.user);
            this.props.history.push("/profile");
        })
        .catch(e => this.setState({ errors: e.res.data }));
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
            <div className="w-full flex flex-wrap">
                {/* Register Section */}
                <div className="w-full md:w-1/2 flex flex-col">

                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                        <Link to="/" className="bg-black text-white font-bold text-xl p-4">MyDreamHome</Link>
                    </div>
                    
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Join Us</p>
                        <form className="flex flex-col pt-3 md:pt-8" onSubmit={this.handleForm}>
                            {/* {error.errors ? (<p className="text-red-500 text-sm">{error.errors}</p>):("")} */}
                            <div className="flex flex-col pt-4">
                                <label for="name" className="text-lg">Name</label>
                                <input type="text" id="name" placeholder="John Doe" onChange={this.handleInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" ></input>
                            </div>

                            <div className="flex flex-col pt-4">
                                <label for="email" className="text-lg">Email</label>
                                <input type="email" id="email" placeholder="you@email.com" onChange={this.handleInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" ></input>
                            </div>

                            <div className="flex flex-col pt-4">
                                <label for="password" className="text-lg">Password</label>
                                <input type="password" id="password" placeholder="Password" onChange={this.handleInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" ></input>
                            </div>

                            <div className="flex flex-col pt-4">
                                <label for="password" className="text-lg">Confirm Password</label>
                                <input type="password" id="password_confirmation" placeholder="Confirm Password" onChange={this.handleInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" ></input>
                            </div>

                            <input type="submit" value="Sign Up" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"></input>
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>Already have an account? <Link to="/login" className="underline font-semibold">Sign In here.</Link></p>
                        </div>
                    </div>
                </div>

                {/* image section */}
                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block" alt="login-img" src="https://source.unsplash.com/IXUM4cJynP0"></img>
                </div>
            </div>
        )
    }
}
