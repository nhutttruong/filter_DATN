import { createContext, useEffect, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();

    const fakeAuth = () =>
        new Promise((resolve) => {
            setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
    const handleLogin = async () => {
        const token = await fakeAuth();    
        setToken(token);
        const origin = location.state?.from?.pathname || '/home';
        navigate(origin);
    };

    const handleLogout = () => {
        setToken(null);
        navigate('/home');
      };
    return (
        <AuthContext.Provider 
        value={{
            token,
            onLogin: handleLogin,
            onLogout: handleLogout,
            }}>

            {props.children}

        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}

