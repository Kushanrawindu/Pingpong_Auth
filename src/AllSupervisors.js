import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class AllSupervisors extends Component {
    render() {
        return (
            <div>
            <div className="text-base leading-normal tracking-normal text-gray-600 bg-white work-sans">
                <nav id="header" className="top-0 z-30 w-full py-1 bg-gray-300">
                    <div className="container flex flex-wrap items-center justify-between w-full px-6 py-3 mx-auto mt-0">
                        <label for="menu-toggle" className="block cursor-pointer md:hidden">
                            <svg className="text-gray-900 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <title>menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </label>
                        <input className="hidden" type="checkbox" id="menu-toggle" />
                    
                        <div className="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1" id="menu">
                            <nav>
                                <ul className="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
                                    <li><Link className="inline-block px-4 py-2 no-underline hover:text-black hover:underline" to="#">Log Out</Link></li>
                                    <li><Link className="inline-block px-4 py-2 no-underline hover:text-black hover:underline" to="#">Shop</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="order-1 md:order-2">
                            <Link className="flex items-center text-xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline " to="#">
                                <FontAwesomeIcon icon={faHome}/>
                                MYDREAMHOME
                            </Link>
                        </div>

                        <div className="flex items-center order-2 md:order-3" id="nav-content">

                            <Link className="inline-block no-underline hover:text-black" href="#">
                                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <circle fill="none" cx="12" cy="7" r="3" />
                                    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                                </svg>
                            </Link>

                            <Link className="inline-block pl-3 no-underline hover:text-black" href="#">
                                <FontAwesomeIcon icon={faSearch} />
                            </Link>

                        </div>
                    </div>  
                </nav>                
            </div>
                <div>
                <section class="bg-white py-8">
                    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                                <Link to="#" class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">Top</Link>
                                <div class="flex items-center" id="store-nav-content">
                                    <Link className="inline-block pl-3 no-underline hover:text-black" href="#">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Link>
                                </div>
                            </div>
                        </nav>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                            <Link to="#">
                                <img className="hover:grow hover:shadow-lg" src={require("./images/actor1.jpg")} alt="image1"/>
                                <div class="pt-3 flex items-center justify-between">
                                    <p class="">John Doe</p>
                                    <svg class="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section> 
                </div>
            
            </div>
        )
    }
}
