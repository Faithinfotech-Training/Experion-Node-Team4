import React, { useEffect, useState } from "react";
import UserContext from "../user-context";

const UserContextProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(()=> {
        const accessToken = localStorage.getItem('mytoken');
        const role = localStorage.getItem('role');
        const username = localStorage.getItem('username');
        const id = localStorage.getItem('id');

        setUserDetails(accessToken ? {
            accessToken,
            role,
            username,
            id
        } : null)
    }, []);

    const login = (token, role, username, id) => {
// debugger;
        if(token){
            localStorage.setItem('mytoken',token);
            localStorage.setItem('role', role);
            localStorage.setItem('username', username);
            localStorage.setItem('id',id);
        }

        setUserDetails(token ? {
            token,
            role,
            username,
            id
        } : null)
    };

    const logout = () => {
        // debugger;
        localStorage.removeItem('mytoken');
        localStorage.removeItem('role');
        localStorage.removeItem('username');
        localStorage.removeItem('id');
        setUserDetails(null);
    }

    return(
        <UserContext.Provider value={{
            userDetails,
            login,
            logout
        }}> {children} </UserContext.Provider>
    )

}

export default UserContextProvider;