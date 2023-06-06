import React from 'react'
import { PersonPropsData } from '../interface/type'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

export default function SingleData(person: PersonPropsData) {
    const history = useHistory();
    const handelDelete =async (id:number|string) => {
         axios.delete(`http://localhost:4000/delete/${id}`)
         history.push('login')
    }
    return (
        <>
            <fieldset className='border-2 border-black mx-2 my-2 w-16 bg-gray-100 rounded-md text-center' key={person.Id}>
                <div className='text-center p-4'>
                    <form className='font-serif text-xl'>
                        <h1>{person.Name}</h1>
                        <p>Name <input type="text" className='border-2 border-black my-2 rounded-md p-1' disabled value={person.Name}/></p>
                        <p>UserName <input type="text" className='border-2 border-black my-2 rounded-md p-1' disabled value={person.UserName} /></p>
                        <p>Password <input type="text" className='border-2 border-black my-2 rounded-md p-1' disabled value={person.Password} /></p>
                        <button className='border-2 border-black my-2 rounded-md font-serif p-1 text-xl bg-amber-500' onClick={() => { history.push({ pathname: "update", state: person }) }}>Update</button>
                        <button className='border-2 border-black my-2 rounded-md font-serif p-1 text-xl mx-2 bg-red-600' onClick={()=>{handelDelete(person.Id)}}>Delete</button>
                    </form>
                </div>
            </fieldset>
        </>
    )
}
