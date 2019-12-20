import React from 'react';

const FourOhFour: React.FC = () => {
	return (
		<>
			{/* TABLE */}

			<div className="flex justify-center mx-auto w-full md:w-4/5" style={{
				marginTop: '10vh',
			}}>
				<div className="text-gray-900 bg-gray-100 px-20 py-4 w-full">
					<div className="p-2 float-left mr-auto">
						<h1 className="text-2xl font-semibold uppercase pb-4">
							contact us
						</h1>
						<p className="text-sm md:text-base text-gray-800 pb-4">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste odio obcaecati ab assumenda esse, fugit facilis, at sint libero qui sequi cum ullam exercitationem. Dignissimos magnam, vel aspernatur mollitia maiores.
						</p>
					</div>
				    <div className="px-3 py-4 flex justify-center">
				        <table className="w-full text-sm md:text-md bg-white shadow-md rounded mb-4">
				            <tbody>
				                <tr className="border-b bg-gray-200 w-full">
				                    <th className="text-left p-2 px-3 uppercase">
				                    	<p className="text-gray-800 font-semibold">
				                    		country or region
				                    	</p>
				                    </th>
				                    <th className="text-left p-2 px-3 uppercase">
				                    	<p className="text-gray-800 font-semibold">
				                    		number
				                    	</p>
				                    </th>
				                    <th className="text-left p-2 px-3 uppercase">
				                    	<p className="text-gray-800 font-semibold">
				                    		opening hours (local time)
				                    	</p>
				                    </th>
				                    <th></th>
				                </tr>
				                <tr className="border-b hover:bg-gray-100 w-full">
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase">
				                    		china
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase underline">
				                    		+123456789
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700">
				                    		from 7 am to 8:30 pm
				                    	</p>		                    	
				                    </td>
				                </tr>
				                <tr className="border-b hover:bg-gray-100 w-full">
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase">
				                    		mexico
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase underline">
				                    		+123456789
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700">
				                    		from 7 am to 8:30 pm
				                    	</p>
				                    </td>
				                </tr>
				                <tr className="border-b hover:bg-gray-100 w-full">
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase">
				                    		australia
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase underline">
				                    		+123456789
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700">
				                    		from 7 am to 8:30 pm
				                    	</p>
				                    </td>
				                </tr>
				                <tr className="border-b hover:bg-gray-100 w-full">
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase">
				                    		italy
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase underline">
				                    		+123456789
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700">
				                    		from 7 am to 8:30 pm
				                    	</p>
				                    </td>
				                </tr>
				                <tr className="border-b hover:bg-gray-100 w-full">
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase">
				                    		india
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase underline">
				                    		+123456789
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700">
				                    		from 7 am to 8:30 pm
				                    	</p>
				                    </td>
				                </tr>
				                <tr className="border-b hover:bg-gray-100 w-full">
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase">
				                    		netherlands
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700 uppercase underline">
				                    		+123456789
				                    	</p>
				                    </td>
				                    <td className="p-3 px-5">
				                    	<p className="text-gray-700">
				                    		from 7 am to 8:30 pm
				                    	</p>
				                    </td>
				                </tr>
				            </tbody>
				        </table>
				    </div>
				</div>
			</div>

			{/* END-TABLE */}

			<hr/>

			<div className="p-8 flex justify-center">
				<p className="font-md text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste odio obcaecati ab assumenda esse, fugit facilis.
				</p>
			</div>

			{/* CONTACT FORM */}

			
			<form className="w-full md:max-w-2xl mx-auto py-20">
				<h1 className="text-xl font-md uppercase pb-16 ml-4">
					contact form
				</h1>
			  <div className="flex flex-wrap -mx-3 mb-6 w-full">
			    <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
			      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
			        First Name <span className="text-red-400 text-base">*</span>
			      </label>
			      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Please enter your First Name"/>
			    </div>
			    <div className="w-full md:w-1/2 px-6">
			      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
			        Last Name <span className="text-red-400 text-base">*</span>
			      </label>
			      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Please enter your Last Name"/>
			    </div>
			  </div>
			  <div className="flex flex-wrap -mx-3 mb-6 w-full">
			    <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
			      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
			        E-mail <span className="text-red-400 text-base">*</span>
			      </label>
			      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Please enter your Email Address"/>
			    </div>
			    <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
			      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
			        Enquiry Type <span className="text-red-400 text-base">*</span>
			      </label>
			      <select className="block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  name="enquiry_type">
			      	<option value="">About Company</option>
			      	<option value="">About Products</option>
			      	<option value="">Other</option>
			      </select>
			    </div>
			  </div>
			  <div className="flex flex-wrap -mx-3 mb-6 w-full">
			    <div className="w-full px-6">
			      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
			        Message <span className="text-red-400 text-base">*</span>
			      </label>
			      <textarea className="no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" placeholder="Please enter your Message" id="message"></textarea>
			      <p className="text-gray-600 text-xs italic">
			      	Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure alias repellendus.
			  	  </p>
			    </div>
			  </div>
			  <div className="md:flex md:items-center w-full">
			    <div className="md:w-1/3 px-6">
			      <button className="shadow bg-transparent border border-gray-800 text-gray-800 hover:text-gray-200 hover:bg-black outline-none focus:outline-none text-white font-md py-2 px-4 capitalize" type="button">
			        send message
			      </button>
			    </div>
			    <div className="md:w-2/3"></div>
			  </div>
			</form>
			{/* END TABLE */}

		</>
	)
};

export default FourOhFour;
