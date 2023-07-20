import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import SingleData from '../CURD/SingleData';
import { PersonPropsData } from '../interface/type';
import Nomatch from './Nomatch';
import useAuth from './useAuth';

export default function ReadData() {
    const [isLoggedIn ,logout]=useAuth();
    const history = useHistory();
    const [datas, setData] = useState<PersonPropsData[]>([])
    console.log("Hello World")
    useEffect(() => {
        axios.get("http://localhost:4000/read").then(res => {
            setData(res.data.record)
        })
    }, [])

    if (!isLoggedIn) {
        return (<Nomatch />)
    }
    return (
        <div>
            <ul className='justify-center flex mx-2'>
                {
                    datas.map(person => (
                        <SingleData key={person.Id} {...person} />
                    ))
                }
            </ul>
            <button onClick={logout as ()=>void}>Log Out</button>
        </div>
    )
}

