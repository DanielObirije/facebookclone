import { useContext,useReducer,createContext } from "react";

export const StateContext = createContext()
export const StateProvider = ({children,reducer,initalState})=>(
    <StateContext.Provider value={useReducer(reducer,initalState)}>
        {children}
    </StateContext.Provider>
)
export const  useStateValue =()=> useContext(StateContext)