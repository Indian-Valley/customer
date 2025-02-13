import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userDataLoading, setUserDataLoading] = useState(false);
    const [user, setUser] = useState(null);

    const setAuth = (authUser) => {
        setUser(authUser);
    }

    const setUserData = userData => {
        setUser({...userData});
    }

    return (
        <AuthContext.Provider value={{user, setAuth, setUserData, userDataLoading, setUserDataLoading}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);