import { createContext, useState, useEffect } from "react";
import { getUser, loginUser, registerUser, logoutUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getUser(token).then((data) => {
                if (data && data.id) {
                    setUser(data);
                }
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (userData) => {
        const data = await loginUser(userData);
        if (data?.token) {
            localStorage.setItem("token", data.token);
            setUser(data.user);
        }
        return data;
    };

    const signup = async (userData) => {
        const data = await registerUser(userData);
        if (data?.token) {
            localStorage.setItem("token", data.token);
            setUser(data.user);
        }
        return data;
    };

    const logout = () => {
        logoutUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
