import { useEffect, useState, useRef } from 'react'
import keycloak from '../component/keycloak'

export default function useAuth() {
    const isRun = useRef(false)

    const [isLogin, setLogin] = useState<boolean>(false)
    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true

        keycloak.init({ onLoad: 'login-required' }).then(res => { setLogin(res) })

    }, [])
    const logout = () => {
        keycloak.logout();
    }
    // const login = () => {
    //     keycloak.logout();
    //     keycloak.login();
    // }

    return [isLogin, logout];
}
