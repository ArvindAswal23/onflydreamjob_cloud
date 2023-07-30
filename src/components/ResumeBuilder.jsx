import React, { useState } from 'react';

const ResumeBuilder = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalcode] = useState("");

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log({
                        firstName, 
                        lastName,
                        email,
                        address : {
                            street,
                            country,
                            city,
                            state,
                            postalCode
                        }
        });
        
    }
    return (
        <div>
            <h1 className="text-3xl font-bold underline text-center mt-10"> Resume Builder here</h1>
            <div className="enhance-resume"></div>
            <div className="m-20">
                <form onSubmit={handleFormSubmit} method='POST'>
                    <div className="space-y-12">
                        <div className="m-20">
                            <div className="border-b border-gray-900/10 ml-20 mr-20 mb-12 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                            </div>

{/* PERSONAL INFO */}               
                            <div className="border-b border-gray-900/10 pb-12 mb-12 ml-20 mr-20">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    {/* First name */}
                                        <div className="sm:col-span-2">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                            <div className="mt-2">
                                                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                            </div>
                                        </div>
    {/* Last Name */}
                                        <div className="sm:col-span-2">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                            <div className="mt-2">
                                                <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                            </div>
                                        </div>
    {/* Email */}
                                        <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                            <div className="mt-2">
                                                <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                            </div>
                                        </div>
    {/* ABOUT */}
                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                                            <div className="mt-2">
                                                <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                            </div>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                        </div>
    {/* PHOTO */}
                                        <div className="col-span-full">
                                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                                            <div className="mt-2 flex items-center gap-x-3">
                                                <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                </svg>
                                                <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                            </div>
                                        </div>
                                </div>     
                            </div>
{/* Address */}
                            <div className="border-b border-gray-900/10 mb-12  pb-12 ml-20 mr-20">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Address</h2>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

{/* Street */}
                                    <div className="col-span-6">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                        <div className="mt-2">
                                            <input value={street} onChange={(e)=>setStreet(e.target.value)} type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
{/* Country */}
                                    <div className="sm:col-span-1">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                        <div className="mt-2">
                                            <select onChange={(e)=>setCountry(e.target.value)} id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option value={"India"}>India</option>
                                                <option value={"Canada"}>Canada</option>
                                                <option value={"United States"}>United States</option>
                                            </select>
                                        </div>
                                    </div>
{/* City */}
                                    <div className="sm:col-span-2">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                        <div className="mt-2">
                                            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
{/* State */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                        <div className="mt-2">
                                            <input value={state} onChange={(e)=>setState(e.target.value)} type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
{/* Postal code */}
                                    <div className="sm:col-span-1">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900"> Postal code</label>
                                        <div className="mt-2">
                                            <input value={postalCode} onChange={(e)=>setPostalcode(e.target.value)} type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* SUBMIT & CANCEL BTN */}
                            <div className="ml-20 mr-20">
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>

    )
}

export default ResumeBuilder;