
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function Login() {



    const [perLogin, setPerLogin] = useState<{ UserName: string, Password: number | string }>({ UserName: "", Password: "" })

    const history = useHistory();



    const handelLoginchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPerLogin({ ...perLogin, [event.target.name]: event.target.value })
    }
    const handelLogin = async () => {
        const res = await axios.get(`http://localhost:4000/verfy?UserName=${perLogin.UserName}&Password=${perLogin.Password}`)
        console.log(res.data)
        if (res.data.Messege as boolean) {
            sessionStorage.setItem("Token", res.data.Token)
            history.push({ pathname: 'read', state: res.data.Token })
        } else {
            alert("Please check your userName or password")
        }
    }

    return (
        <div className='justify-center flex flex-row'>
            <fieldset className='border-2 border-black my-40 w-20   bg-gray-100 rounded-md text-center'>
                <div className='text-center p-3'>
                    <p className='text-xl font-serif'>UserName <input type="text" placeholder='Username...' name='UserName' onChange={handelLoginchange} className='border-2 border-black my-2 rounded-md p-1' /></p>
                    <p className='text-xl font-serif'>Password <input type="password" placeholder='Password...' name='Password' onChange={handelLoginchange} className='border-2 border-black my-2 rounded-md p-1' /></p>
                    <button onClick={handelLogin} className='border-2 border-black my-2 rounded-md font-serif text-white font-semiboldbold p-1 text-xl bg-blue-600 hover:bg-blue-500'>Log in</button>
                </div>
            </fieldset>
        </div>
    )
}





