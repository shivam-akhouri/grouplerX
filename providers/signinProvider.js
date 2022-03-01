import react, { createContext, useState } from "react";

export const SignInContext = createContext();

export default function SignInProvider(props){
    const [username, setUsername] = useState();
    return (
        <SignInContext.Provider value={{username, setUsername}}>
            {props.children}
        </SignInContext.Provider>
    )
}