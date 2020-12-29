import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Profile extends Component {
    render() {
        return (
            <div class="mx-auto bg-grey-900">
    
    <div className="flex flex-col min-h-screen">
    <nav id="header" className="bg-gray-800">
        <header className="bg-nav">
            <div className="flex justify-between">
                <div className="inline-flex items-center p-1 mx-3">
                    <i className="pr-2 text-white fas fa-bars" onclick="sidebarToggle()"></i>
                    <h1 className="p-2 text-white uppercase">Home construction application</h1>
                </div>
                <div className="flex flex-row items-center p-1">
                    <img onclick="profileToggle()" className="inline-block w-8 h-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt=""></img>
                    <Link to="#" className="hidden p-2 text-white no-underline md:block lg:block">User</Link>
                    <div id="ProfileDropDown" className="absolute hidden mt-12 mr-1 bg-white rounded shadow-md pin-t pin-r">
                        {/* <ul className="list-reset">
                          <li><a href="#" className="block px-4 py-2 text-black no-underline hover:bg-grey-light">My account</a></li>
                          <li><a href="#" className="block px-4 py-2 text-black no-underline hover:bg-grey-light">Notifications</a></li>
                          <li><hr className="mx-2 border-t border-grey-ligght"></li>
                          <li><a href="#" className="block px-4 py-2 text-black no-underline hover:bg-grey-light">Logout</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </header>
    </nav>

        <div className="flex flex-1">
            <aside id="sidebar" className="hidden w-1/2 border-r bg-side-nav md:w-1/6 lg:w-1/6 border-side-nav md:block lg:block">
                <div className="flex">

                </div>
                <ul className="flex flex-col list-reset">
                    <li className="w-full h-full px-2 py-3 border-b border-light-border">
                        <a href="forms.html"
                           className="font-sans text-sm font-hairline no-underline hover:font-normal text-nav-item">
                            <i className="float-left mx-2 fab fa-wpforms"></i>
                            Diary
                            <span><i className="float-right fa fa-angle-right"></i></span>
                        </a>
                    </li>
                    <li className="w-full h-full px-2 py-3 border-b border-light-border">
                        <a href="forms.html"
                           className="font-sans text-sm font-hairline no-underline hover:font-normal text-nav-item">
                            <i className="float-left mx-2 fab fa-wpforms"></i>
                            Tasks
                            <span><i className="float-right fa fa-angle-right"></i></span>
                        </a>
                    </li>
                </ul>

            </aside>
            <main className="flex-1 p-3 overflow-hidden bg-white-500">

                <div className="flex flex-col">
                    
                    <div className="flex flex-col flex-1 mx-2 md:flex-row lg:flex-row">
                        <div className="w-full mb-2 border border-gray-300 border-solid rounded shadow-sm">
                            <div className="px-2 py-3 text-center bg-gray-200 border-b border-gray-200 border-solid">
                            Daily Progress
                            </div>
                            <div className="p-3">
                                <table className="w-full rounded table-responsive">
                                    <thead>
                                      <tr>
                                        <th className="px-4 py-2 border w-1/9">Date</th>
                                        <th className="w-1/6 px-4 py-2 border">Title</th>
                                        <th className="w-1/6 px-4 py-2 border">Task</th>
                                        <th className="px-4 py-2 border w-1/7">Progress</th>
                                        <th className="w-1/4 px-4 py-2 border">Note</th>
                                        <th className="px-4 py-2 border w-1/7">Images</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border">12 Jun 2020</td>
                                            <td className="px-4 py-2 border">Title 1</td>
                                            <td className="px-4 py-2 border">Task 1</td>
                                            <td className="px-4 py-2 border">20%</td>
                                            <td className="px-4 py-2 border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                                            <td className="px-4 py-2 border"><img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300"></img></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">20 Jun 2020</td>
                                            <td className="px-4 py-2 border">Title 2</td>
                                            <td className="px-4 py-2 border">Task 1</td>
                                            <td className="px-4 py-2 border">30%</td>
                                            <td className="px-4 py-2 border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                                            <td className="px-4 py-2 border"><img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300"></img></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border">25 Jun 2020</td>
                                            <td className="px-4 py-2 border">Title 2</td>
                                            <td className="px-4 py-2 border">Task 1</td>
                                            <td className="px-4 py-2 border">60%</td>
                                            <td className="px-4 py-2 border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                                            <td className="px-4 py-2 border"><img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300"></img></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </main>
           
        </div>
      
        <footer class="bg-gray-900 border-t border-gray-400 shadow">	
		<div class="container max-w-md mx-auto flex py-8">

			<div class="w-full mx-auto flex flex-wrap">
				<div class="flex w-full md:w-1/2 ">
					<div class="px-8">
						<h3 class="font-bold font-bold text-gray-100">About</h3>
						<p class="py-4 text-gray-600 text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. 
						</p>
					</div>
				</div>
				
				<div class="flex w-full md:w-1/2">
					<div class="px-8">
					<h3 class="font-bold font-bold text-gray-100">Social</h3>
						<ul class="list-reset items-center text-sm pt-3">
						  <li>
							<Link class="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1" to="#">Add social link</Link>
						  </li>
						  <li>
							<Link class="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1" to="#">Add social link</Link>
						  </li>
							<li>
							<Link class="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline py-1" to="#">Add social link</Link>
						  </li>
						</ul>
					</div>
				</div>
			</div>
        

		
		</div>
	</footer>

    </div>

</div>
        )
    }
}
