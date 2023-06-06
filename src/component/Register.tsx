import axios from 'axios'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PersonProps } from '../interface/type';


export default function Register() {
    const history = useHistory();
    const [person, setPerson] = React.useState<PersonProps>({ Id: "", Name: "", UserName: "", Password: "" })

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({ ...person, Id: Date.now(), [event.target.name]: event.target.value })
    }

    const handelSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/create', person)
        setPerson({ Id: "", Name: "", UserName: "", Password: "" })
        history.push('login')
    }

    return (
        <div className='justify-center flex '>
            <fieldset className='border-2 border-black my-40 w-16 bg-gray-100 rounded-md'>
                <div className='text-center m-4'>
                    <h1 className='text-xl font-serif font-semibold'>REGISTER</h1>
                    <form action="submit" onSubmit={handelSubmit} >
                        <p className='text-xl font-serif' >Full Name <input type="text" placeholder='Full Name...' name='Name' value={person.Name} onChange={handelChange} className='border-2 border-black my-2 rounded-md p-1 hover:bg-slate-200' /></p>
                        <p className='text-xl font-serif'>UserName <input type="text" placeholder='Username...' name='UserName' value={person.UserName} onChange={handelChange} className='border-2 border-black my-2 rounded-md p-1 hover:bg-slate-200' /></p>
                        <p className='text-xl font-serif'>Password <input type="password" placeholder='Password...' name='Password' value={person.Password} onChange={handelChange} className='border-2 border-black my-2 rounded-md p-1 hover:bg-slate-200' /></p>
                        <button className='border-2 border-black my-2 rounded-md p-2 font-serif text-xl bg-green-400 hover:bg-green-600'>Register</button>
                    </form>
                    <Link to={'login'} className='text-blue-500 text-xl hover:text-blue-600 hover:underline '>Log In</Link>
                </div>

            </fieldset>
        </div>
    )
}
