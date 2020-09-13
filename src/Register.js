import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Register extends Component {
    render() {
        return (
            <div className="w-full flex flex-wrap">
                {/* Register Section */}
                <div className="w-full md:w-1/2 flex flex-col">

                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
                        <Link to="/" className="bg-black text-white font-bold text-xl p-4">Logo</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}
