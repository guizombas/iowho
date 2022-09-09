import { createContext, useContext, useReducer, useState } from "react";
import { TCurrency, TDateFormat, TLang } from "../design/preferences";

interface IPreferences{
    lang: TLang,
    currency: TCurrency,
    date: TDateFormat
}
interface IPreferenceContext extends IPreferences{
    setPreferences: React.Dispatch<Partial<IPreferences>>
}
interface IPrefereceProviderProps{
    children: React.ReactNode
}

const contextInicialValue = {
    lang: "pt",
    currency: "real",
    date: "normal"
} as IPreferenceContext

export const prefereceContext = createContext(contextInicialValue);

function preferecesReducer(previousState: IPreferences, preferences: Partial<IPreferences>){
    return {
        ...previousState,
        ...preferences
    }
}

export default function PrefereceProvider(props: IPrefereceProviderProps){

    const [ preferences, setPreferences ] = useReducer(preferecesReducer, contextInicialValue);

    return (
        <prefereceContext.Provider value={{
            ...preferences,
            setPreferences
        }}>
            {props.children}
        </prefereceContext.Provider>
    )
}

export function usePreferences(){
    return useContext( prefereceContext );
}

