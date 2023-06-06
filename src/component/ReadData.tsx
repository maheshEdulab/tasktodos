import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
import SingleData from '../CURD/SingleData';
import { PersonPropsData } from '../interface/type';
import Nomatch from './Nomatch';


type Token = {
    Token: string
}

export default function ReadData() {
    const history=useHistory();
    const [datas, setData] = useState<PersonPropsData[]>([])

    useEffect(() => {
        axios.get("http://localhost:4000/read").then(res => {
            setData(res.data.record)
        })
    }, [])

    if (!sessionStorage.getItem("Token")) {
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
            <button onClick={() => { sessionStorage.removeItem("Token");history.push("/") }}>Log Out</button>
        </div>
    )
}

