import { createContext, useEffect, useReducer,useState } from "react";

export const AuthContext = createContext();

const initalState = { user: null, product: [], studentList: {} };


const reducer = (state, action) => {
    console.log(action, "- action here")

   

    switch (action.type) {
        case "LOGIN":
            return { user: action.payload } // re assigning
        case "LOGOUT":
            return { user: null } // re assign
        default:
            return state;
    }

}
export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initalState);

    function Login(userData) {
        dispatch({
            type: "LOGIN",
            payload: userData
        })
    }

    function Logout() {
        localStorage.removeItem("Currrent-user")
        dispatch({
            type: "LOGOUT"
        })
    }

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("Currrent-user"))
        // console.log(userData, "userData")
        if (userData) {
            dispatch({
                type: "LOGIN",
                payload: userData
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}