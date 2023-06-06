import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import SingleData from '../CURD/SingleData';
import { PersonPropsData } from '../interface/type';
import Nomatch from './Nomatch';


type Token = {
    Token: string
}

export default function ReadData() {
    const location = useLocation<Token>()
    const [token] = useState<Token>(location.state)
    const [datas, setData] = useState<PersonPropsData[]>([])

    useEffect(() => {
        axios.get("http://localhost:4000/read").then(res => {
            setData(res.data.record)
        })
        console.log(sessionStorage.getItem("Token"))
    }, [])

    if (!token) {
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
        </div>
    )
}

