import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
import { PersonPropsData } from '../interface/type';

export default function UpdateData() {
    const history = useHistory()
    const location = useLocation<PersonPropsData>();
    const [person, setPerson] = useState<PersonPropsData>(location.state);
    const handelUpdate = async () => {
        const res = await axios.put(`http://localhost:4000/update/${person.Id}`, person);
        console.log(res);
        history.goBack();
    }

    const handelUpdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({ ...person, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className='justify-center flex py-40'>
                <fieldset className='border-2 border-black mx-2 my-2 w-20 bg-gray-100 rounded-md text-center'>
                    <div className='p-2'>
                        <p className='text-xl font-serif'>Full Name <input type="text" placeholder='Full Name...' name='Name' value={person.Name} onChange={handelUpdateChange} className='border-2 border-black my-2 rounded-md p-1' /></p>
                        <p className='text-xl font-serif'>UserName <input type="text" placeholder='UserName...' name='UserName' value={person.UserName} onChange={handelUpdateChange} className='border-2 border-black my-2 rounded-md p-1' /></p>
                        <p className='text-xl font-serif'>Password <input type="password" placeholder='Password...' name='Password' value={person.Password} onChange={handelUpdateChange} className='border-2 border-black my-2 rounded-md p-1' /></p>
                        <button className='border-2 border-black my-2 rounded-md p-2 font-serif text-xl bg-green-400' onClick={async () => { await handelUpdate(); }}>Update</button>
                    </div>
                </fieldset>
            </div>
        </>
    )
}
