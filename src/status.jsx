import React, {useContext, useState} from "react";
import { AccountContext } from "./account";

const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext);
    
    getSession().then((session) => {
        console.log("Session:", session);
        setStatus(true);
    });
    
    return (
        <div>
        {status ? (
            <>
            <h1>You are logged in.</h1>
            <button onClick={logout}>Logout</button>
            </>
        ) : (
            <h1>You are logged out.</h1>
        )}
        </div>
    );
 };
 export default Status;